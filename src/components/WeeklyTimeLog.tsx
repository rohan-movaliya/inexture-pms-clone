import { Box, Container, Divider, Grid, Text, UnstyledButton } from "@mantine/core";
import { IconFileTime, IconChevronLeft, type TablerIcon } from "@tabler/icons-react";
import classes from "./WeeklyTimeLog.module.css";

const data = [
  { date: "30 Mar", day: "Mon", time: "07:05:35" },
  { date: "31 Mar", day: "Tue", time: "0" },
  { date: "01 Apr", day: "Wed", time: "0" },
  { date: "02 Apr", day: "Thu", time: "0" },
  { date: "03 Apr", day: "Fri", time: "0" },
];

interface WeeklyTimeLogProps {
  title?: string;
  headerIcon?: TablerIcon;
}

function WeeklyTimeLog({
  title = "Weekly Time Log",
  headerIcon: HeaderIcon = IconFileTime,
}: WeeklyTimeLogProps) {
  return (
    <Container fluid className={classes.card}>
      <Box className={classes.header}>
        <Text size="lg" fw={700} className={classes.title}>
          <HeaderIcon size={24} />
          {title}
        </Text>

        <UnstyledButton
          type="button"
          aria-label="Previous week"
          className={classes.previousButton}
        >
          <IconChevronLeft size={26} />
        </UnstyledButton>
      </Box>

      <Divider className={classes.divider} />
      <Grid my="md" className={classes.grid}>
        {data.map((item) => (
          <Grid.Col span={{ base: 12, xs: 4 }} key={item.date}>
            <Box className={classes.logItem}>
              <Box className={classes.dateBlock}>
                <Box>{item.date}</Box>
                <Box className={classes.day}>{item.day}</Box>
              </Box>

              <Box className={classes.time}>
                {item.time}
              </Box>
            </Box>
          </Grid.Col>
        ))}

        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Box className={classes.totalCard}>
            <Box className={classes.totalTime}>7h 5m 35s</Box>
            <Box className={classes.totalLabel}>Total</Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default WeeklyTimeLog;
