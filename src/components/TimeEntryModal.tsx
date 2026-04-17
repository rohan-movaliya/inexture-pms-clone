import {
  Modal,
  Card,
  Text,
  Group,
  Badge,
  Table,
  Grid,
  Box,
} from "@mantine/core";

type WeeklyLogItem = {
  date: string;
  day: string;
  time: string;
};

type WeeklyTimeLogState = {
  items: WeeklyLogItem[];
  totalTime: string;
};

type TimeEntryModalProps = {
  opened: boolean;
  close: () => void;
  weeklyLog: WeeklyTimeLogState;
  selectedLog: WeeklyLogItem | null;
};

function TimeEntryModal({
  opened,
  close,
  weeklyLog,
  selectedLog,
}: TimeEntryModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      size="lg"
      title={
        <Group justify="space-between" w="100%">
          <Text fw={600}>
            Time Entry {selectedLog ? `- ${selectedLog.date}` : ""}
          </Text>

          <Badge color="teal" size="lg">
            Total: {weeklyLog.totalTime}
          </Badge>
        </Group>
      }
    >
      {/* Stats */}
      <Grid mb="md">
        <Grid.Col span={4}>
          <Card bg="indigo.9" p="sm" radius="md">
            <Text fw={600} c="white">
              {selectedLog?.time ?? "00:00:00"}
            </Text>
            <Text size="sm" c="gray.3">
              Selected Day
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card bg="red.9" p="sm" radius="md">
            <Text fw={600} c="white">
              {weeklyLog.totalTime}
            </Text>
            <Text size="sm" c="gray.3">
              This Week
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card bg="green.9" p="sm" radius="md">
            <Text fw={600} c="white">
              {weeklyLog.totalTime}
            </Text>
            <Text size="sm" c="gray.3">
              Month Average
            </Text>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Table */}
      <Box
        style={{
          border: "1px solid #2e2e2e",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Table highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Day</Table.Th>
              <Table.Th>Total Duration</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {selectedLog ? (
              <Table.Tr>
                <Table.Td>{selectedLog.date}</Table.Td>

                <Table.Td>
                  <Badge variant="outline">{selectedLog.day}</Badge>
                </Table.Td>

                <Table.Td>
                  <Badge color="teal">{selectedLog.time}</Badge>
                </Table.Td>
              </Table.Tr>
            ) : (
              <Table.Tr>
                <Table.Td colSpan={3}>
                  <Text c="dimmed" ta="center">
                    No data selected
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </Box>
    </Modal>
  );
}

export default TimeEntryModal;
