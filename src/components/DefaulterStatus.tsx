import { Text, Divider, Box } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";
import classes from "./DefaulterStatus.module.css";

const data = [
  { count: 0, label: "Working Hours & Flexibility" },
  { count: 0, label: "Work From Home" },
  { count: 0, label: "Time Entries" },
  { count: 0, label: "Worklog (EOD)" },
  { count: 0, label: "Leaves" },
  { count: 0, label: "Game Zone" },
  { count: 0, label: "Others" },
  { count: 0, label: "Total" },
];

function DefaulterStatus() {
  return (
    <Box className={classes.card}>
      <Box className={classes.header}>
        <Text size="lg" fw={700} className={classes.title}>
          <IconFileTime size={24} />
          Your Defaulter Status
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
