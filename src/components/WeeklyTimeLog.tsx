import {
  Box,
  Container,
  Divider,
  Grid,
  Loader,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconFileTime,
  type TablerIcon
} from "@tabler/icons-react";
import { useState } from "react";
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
  const { data, isLoading } = useGetWeeklyWorkLogQuery({});
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedLog, setSelectedLog] = useState<WeeklyLogItem | null>(null);
  const workLog = mapWeeklyTimeLog(data);

  return (
    <>
      <TimeEntryModal
        weeklyLog={workLog}
        selectedLog={selectedLog}
        opened={opened}
        close={close}
      />

      <Container fluid className={classes.card}>
        <Box className={classes.header}>
          <Text size="lg" fw={700} className={classes.title}>
            <HeaderIcon size={24} />
            {title}
          </Text>

          {/* <UnstyledButton
            type="button"
            aria-label="Previous week"
            className={classes.previousButton}
            onClick={() => setPreviousWeek((current) => !current)}
          >
            <IconChevronLeft size={26} />
          </UnstyledButton> */}
        </Box>

        <Divider className={classes.divider} />
        <Grid my="md" className={classes.grid}>
          {isLoading && (
            <Grid.Col span={12}>
              <Box className={classes.totalCard}>
                <Loader size="sm" />
              </Box>
            </Grid.Col>
          )}

          {workLog.items.map((item) => (
            <Grid.Col
              span={{ base: 12, xs: 4 }}
              onClick={() => {
                setSelectedLog(item);
                open();
              }}
              key={item.date}
            >
              <Box className={classes.logItem}>
                <Box className={classes.dateBlock}>
                  <Box>{item.date}</Box>
                  <Box className={classes.day}>{item.day}</Box>
                </Box>

                <Box className={classes.time}>{item.time}</Box>
              </Box>
            </Grid.Col>
          ))}
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Box className={classes.totalCard}>
              <Box className={classes.totalTime}>
                {workLog.totalTime}
              </Box>
              <Box className={classes.totalLabel}>Total</Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default WeeklyTimeLog;
