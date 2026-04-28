import {
  ActionIcon,
  Box,
  Paper,
  Divider,
  Grid,
  Loader,
  Text,
  Group,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconFileTime,
  IconChevronLeft,
  IconChevronRight,
  type TablerIcon,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { useGetWeeklyWorkLogQuery } from "../services/dashboard/dashboard.service";
import { mapWeeklyTimeLog, formatDateToDayMonth } from "../utils/functions";

import type { WeeklyLogItem, WeeklyTimeLogState } from "../types/weeklyTimeLog";
import WeeklyTimeLogModal from "./WeeklyTimeLogModal";

interface WeeklyTimeLogProps {
  title?: string;
  headerIcon?: TablerIcon;
}

function WeeklyTimeLog({
  title = "Weekly Time Log",
  headerIcon: HeaderIcon = IconFileTime,
}: WeeklyTimeLogProps) {
  const [previousWeek, setPreviousWeek] = useState(false);

  const { data, isLoading, isError } = useGetWeeklyWorkLogQuery({
    weekly: true,
    previous_week: previousWeek,
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedLog, setSelectedLog] = useState<WeeklyLogItem | null>(null);

  const workLog: WeeklyTimeLogState = useMemo(() => {
    return (
      mapWeeklyTimeLog(data) || {
        items: [],
        labels: {
          last_day: 0,
          this_week: "0h 0m",
          this_month_average: "0h 0m",
        },
      }
    );
  }, [data]);

  const handleOpenModal = (item: WeeklyLogItem) => {
    if (item.total_duration === "0") {
      return; // modal will not open if time is zero
    }

    setSelectedLog(item);
    open();
  };

  return (
    <>
      <WeeklyTimeLogModal
        weeklyLog={workLog}
        selectedLog={selectedLog}
        opened={opened}
        close={close}
      />

      <Paper withBorder mt="md">
        <Group px="md" py="xs" justify="space-between" align="center">
          <Group gap={8}>
            <HeaderIcon size={24} />
            <Text size="lg" fw={700}>
              {title}
            </Text>
          </Group>

          <ActionIcon
            variant="subtle"
            color="gray"
            radius="xs"
            onClick={() => setPreviousWeek((current) => !current)}
            aria-label={previousWeek ? "Next week" : "Previous week"}
          >
            {previousWeek ? (
              <IconChevronRight size={20} />
            ) : (
              <IconChevronLeft size={20} />
            )}
          </ActionIcon>
        </Group>

        <Divider />

        <Box px="md" pb="md">
          <Grid my="md">
            {isLoading ? (
              <Grid.Col span={12}>
                <Group justify="center">
                  <Loader size="sm" />
                </Group>
              </Grid.Col>
            ) : isError ? (
              <Grid.Col span={12}>
                <Text size="sm">Failed to load weekly work log.</Text>
              </Grid.Col>
            ) : (
              <>
                {workLog.items.map((item) => (
                  <Grid.Col key={item.log_date} span={{ base: 12, xs: 4 }}>
                    <Paper
                      withBorder
                      radius="xs"
                      bg="dark.6"
                      component="button"
                      type="button"
                      onClick={() => handleOpenModal(item)}
                      disabled={item.total_duration === "0"}
                      p={0}
                      w="100%"
                      style={(theme) => ({
                        overflow: "hidden",
                        cursor:
                          item.total_duration === "0" ? "default" : "pointer",
                        borderColor: theme.colors.dark[4],
                      })}
                    >
                      <Flex>
                        {/* Date Block */}
                        <Box
                          px="md"
                          py={8}
                          bg="dark.4"
                          c="white"
                          ta="center"
                          fz={18}
                        >
                          <Box>{formatDateToDayMonth(item.log_date)}</Box>
                          <Box fw={500}>{item.day}</Box>
                        </Box>

                        {/* Time */}
                        <Flex
                          flex={1}
                          justify="flex-end"
                          align="center"
                          pr="md"
                          fz={20}
                          fw={600}
                          c={item.total_duration === "0" ? "cyan.4" : "green.5"}
                        >
                          {item.total_duration}
                        </Flex>
                      </Flex>
                    </Paper>
                  </Grid.Col>
                ))}

                {/* Total Card */}
                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Paper
                    withBorder
                    radius="xs"
                    bg="dark.4"
                    h="100%"
                    style={(theme) => ({ borderColor: theme.colors.dark[4] })}
                  >
                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      h="100%"
                      c="gray.2"
                    >
                      <Box fz={24} fw={500}>
                        {workLog.labels.this_week}
                      </Box>
                      <Text size="sm" fw={600} c="gray.5">
                        Total
                      </Text>
                    </Flex>
                  </Paper>
                </Grid.Col>
              </>
            )}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default WeeklyTimeLog;
