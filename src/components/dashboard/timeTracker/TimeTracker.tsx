import { Text, Divider, Box, Paper, Group } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";

function TimeTracker() {
  return (
    <Paper withBorder h="100%">
      <Group px="md" py="xs" justify="space-between" align="center">
        <Group gap={8}>
          <IconFileTime size={24} />
          <Text size="lg" fw={700}>
            Today's Time Tracker
          </Text>
        </Group>
      </Group>

      <Divider />

      <Box p="md"></Box>
    </Paper>
  );
}

export default TimeTracker;
