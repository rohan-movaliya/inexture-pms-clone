import { Text, Divider, Box } from "@mantine/core";
import { IconClockRecord } from "@tabler/icons-react";
import classes from "./DefaulterStatus.module.css";

const data = [
  { count: 0, label: "Working Hours & Flexibility" },
  { count: 0, label: "Business Continuity (WFH)" },
  { count: 0, label: "Time Entries" },
  { count: 0, label: "Worklog (End of Day - EOD)" },
  { count: 0, label: "Leave Management" },
  { count: 0, label: "Total" },
];

function DefaulterStatus() {
  return (
    <Box className={classes.card}>
      <Box className={classes.header}>
        <Text size="lg" fw={700} className={classes.title}>
          <IconClockRecord size={24} />
          Your Non Compliance Status
        </Text>
      </Box>

      <Divider className={classes.divider} />

      <Box className={classes.grid}>
        {data.map((item) => (
          <Box key={item.label} className={classes.item}>
            <Text fw={900} className={classes.count}>
              {item.count}
            </Text>

            <Text size="lg" fw={500} className={classes.label}>
              {item.label}
            </Text>
          </Box>
        ))}
      </Box>

      <Divider className={classes.divider} />

      <Box className={classes.footer}>
        <Text size="lg">
          Well done for keeping things in order within the rules.
        </Text>
      </Box>
    </Box>
  );
}

export default DefaulterStatus;
