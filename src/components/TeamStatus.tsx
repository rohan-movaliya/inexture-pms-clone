import { Text, Divider, Box } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";
import classes from "./TeamStatus.module.css";

const data = [
  { name: "In Office", value: "100", count: "16", color: "green" as const },
  { name: "Half Day", value: "0", count: "0", color: "yellow" as const },
  { name: "WFH", value: "100", count: "16", color: "teal" as const },
  { name: "On Leave", value: "0", count: "0", color: "red" as const },
];

const colorMap = {
  green: classes.green,
  yellow: classes.yellow,
  teal: classes.teal,
  red: classes.red,
};

function TeamStatus() {
  return (
    <Box className={classes.card}>
      <Box className={classes.header}>
        <Text size="lg" fw={700} className={classes.title}>
          <IconFileTime size={24} />
          Your Team Status
        </Text>
        <Text size="lg" fw={700} ta="right">
          Strength: 16
        </Text>
      </Box>

      <Divider className={classes.divider} />

      <Box className={classes.grid}>
        {data.map((item) => (
          <Box
            key={item.name}
            className={`${classes.item} ${colorMap[item.color]}`}
          >
            <Text size="md" fw={500}>
              {item.name}
            </Text>

            <Box className={classes.stats}>
              <Text fw={900} className={classes.count} c="gray.2">
                {item.count.toString().padStart(2, "0")}
              </Text>

              <Text size="lg" c="dimmed">
                {item.value}%
              </Text>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider className={classes.divider} />

      <Box className={classes.footer}>
        <Text size="lg">
          Your overall team attendance is 100%.
        </Text>
      </Box>
    </Box>
  );
}

export default TeamStatus;
