import { Avatar, Box, Container, Text } from "@mantine/core";
import classes from "./LeaveAndAttendanceOverview.module.css";

export interface LeaveAndAttendanceOverviewProps {
  title: string;
  headline: string;
  rows: { label: string; value: string }[];
  iconSrc?: string;
}

function LeaveAndAttendanceOverview({
  title,
  headline,
  rows,
  iconSrc = "/4_my_leaves.svg",
}: LeaveAndAttendanceOverviewProps) {
  return (
    <Box className={classes.card}>
      <Container className={classes.iconWrap}>
        <Avatar
          variant="filled"
          radius="xs"
          size="lg"
          src={iconSrc}
        />
      </Container>
      <Text ta="center" size="xl" c="orange.6" fw={600}>
        {headline}
      </Text>
      <Text ta="center" mt={4}>
        {title}
      </Text>

      <Box className={classes.rows}>
        {rows.map((row) => (
          <Box key={row.label} className={classes.row}>
            <Text size="sm">{row.label}</Text>
            <Text c="orange.6" fw={600}>
              {row.value}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LeaveAndAttendanceOverview;
