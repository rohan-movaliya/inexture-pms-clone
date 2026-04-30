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
import {
  IconChecklist,
  IconChevronLeft,
  IconChevronRight,
  type TablerIcon,
} from "@tabler/icons-react";
import { useState } from "react";
import { useGetWeeklyWorkLogQuery } from "../../../services/dashboard/dashboard.service";
import {
  formatDateToDayMonth,
  formatDateToDayName,
} from "../../../utils/functions";
import type { WeeklyWorkLogItem } from "./weeklyWorkLog";
import { useDisclosure } from "@mantine/hooks";
import WeeklyWorkLogModal from "./WeeklyWorkLogModal";

interface WeeklyWorkLogProps {
  title?: string;
  headerIcon?: TablerIcon;
}

function WeeklyWorkLog({
  title = "Weekly Work Log",
  headerIcon: HeaderIcon = IconChecklist,
}: WeeklyWorkLogProps) {
  const [previousWeek, setPreviousWeek] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedLog, setSelectedLog] = useState<WeeklyWorkLogItem | null>(
    null,
  );

  const { data, isLoading, isError } = useGetWeeklyWorkLogQuery({
    count: previousWeek,
  });

  const handleOpenModal = (item: WeeklyWorkLogItem) => {
    if (item.workLog === "0") {
      return; // modal will not open if time is zero
    }

    setSelectedLog(item);
    open();
  };

  return (
    <>
      <WeeklyWorkLogModal
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
            onClick={() => setPreviousWeek((current) => (current ? 0 : 1))}
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
                {data?.results.map((item) => (
                  <Grid.Col key={item.log_date} span={{ base: 12, xs: 4 }}>
                    <Paper
                      withBorder
                      radius="xs"
                      bg="#212529"
                      component="button"
                      type="button"
                      p={0}
                      w="100%"
                      onClick={() => handleOpenModal(item)}
                      disabled={item.workLog === "0"}
                      style={(theme) => ({
                        overflow: "hidden",
                        borderColor: theme.colors.dark[4],
                        cursor: item.workLog === "0" ? "default" : "pointer",
                      })}
                    >
                      <Flex>
                        {/* Date Block */}
                        <Box
                          px="md"
                          py={12}
                          bg="#343A40"
                          c="white"
                          ta="center"
                          fz={18}
                        >
                          <Box>{formatDateToDayMonth(item.log_date)}</Box>
                          <Box fw={500}>
                            {formatDateToDayName(item.log_date)}
                          </Box>
                        </Box>

                        {/* Time */}
                        <Flex
                          flex={1}
                          justify="flex-end"
                          align="center"
                          pr="md"
                          fz={20}
                          fw={600}
                          c={item.workLog === "0" ? "#1098AD" : "#37B24D"}
                        >
                          {item.workLog}
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
                    bg="#343A40"
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
                        {data?.summary?.total_worklog}
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

export default WeeklyWorkLog;
