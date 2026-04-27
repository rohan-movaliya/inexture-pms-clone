import {
  Box,
  Paper,
  Divider,
  Grid,
  Loader,
  Text,
  UnstyledButton,
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
import { mapWeeklyTimeLog } from "../utils/functions";
import TimeEntryModal from "./TimeEntryModal";
import classes from "./WeeklyTimeLog.module.css";

export type WeeklyLogItem = {
  date: string;
  day: string;
  time: string;
};

export type WeeklyTimeLogState = {
  items: WeeklyLogItem[];
  totalTime: string;
};

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
  console.log(data);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedLog, setSelectedLog] = useState<WeeklyLogItem | null>(null);

  const workLog = useMemo(() => {
    return (
      mapWeeklyTimeLog(data) || {
        items: [],
        totalTime: "0h 0m",
      }
    );
  }, [data]);

  const handleOpenModal = (item: WeeklyLogItem) => {
    setSelectedLog(item);
    open();
  };

  return (
    <>
      <TimeEntryModal
        weeklyLog={workLog}
        selectedLog={selectedLog}
        opened={opened}
        close={close}
      />

      <Paper withBorder radius="xs" className={classes.card}>
        <Box px="md" pt="xs" pb="xs" className={classes.header}>
          <Text size="lg" fw={700} className={classes.title}>
            <HeaderIcon size={24} />
            {title}
          </Text>

          <UnstyledButton
            type="button"
            aria-label="Previous week"
            className={classes.previousButton}
            onClick={() => setPreviousWeek((current) => !current)}
          >
            {previousWeek ? (
              <IconChevronRight size={26} />
            ) : (
              <IconChevronLeft size={26} />
            )}
          </UnstyledButton>
        </Box>

        <Divider />

        <Box px="md" pb="md">
          <Grid my="md" className={classes.grid}>
            {isLoading ? (
              <Grid.Col span={12}>
                <Box className={classes.totalCard}>
                  <Loader size="sm" />
                </Box>
              </Grid.Col>
            ) : isError ? (
              <Grid.Col span={12}>
                <Box className={classes.totalCard}>
                  <Text size="sm">Failed to load weekly work log.</Text>
                </Box>
              </Grid.Col>
            ) : (
              <>
                {workLog.items.map((item) => (
                  <Grid.Col
                    key={item.date}
                    span={{ base: 12, xs: 4 }}
                    onClick={() => handleOpenModal(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box className={classes.logItem}>
                      <Box className={classes.dateBlock}>
                        <Box>{item.date}</Box>
                        <Box className={classes.day}>{item.day}</Box>
                      </Box>

                      <Box
                        c={item.time === "0" ? "#1098ad" : "#37b24d"}
                        fz="20px"
                        fw={600}
                        pr="md"
                        className={classes.time}
                      >
                        {item.time}
                      </Box>
                    </Box>
                  </Grid.Col>
                ))}

                <Grid.Col span={{ base: 12, xs: 4 }}>
                  <Box className={classes.totalCard}>
                    <Box className={classes.totalTime}>{workLog.totalTime}</Box>
                    <Box className={classes.totalLabel}>Total</Box>
                  </Box>
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
