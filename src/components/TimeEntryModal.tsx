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

import type { WeeklyLogItem, WeeklyTimeLogState } from "../types/weeklyTimeLog";
import { formatDateToDayMonthYear } from "../utils/functions";

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
      size="xl"
      title={
        <Box
          w="100%"
          pt="xs"
          pb="xs"
          style={{
            borderBottom: "1px solid #2e2e2e",
            marginBottom: "8px",
          }}
        >
          <Group justify="space-between">
            <Text fw={600}>
              Time Entry :{" "}
              {selectedLog
                ? formatDateToDayMonthYear(selectedLog.log_date)
                : ""}
            </Text>

            <Badge tt="none" color="#283D40" c="#B8E7EB" size="lg">
              Total: {selectedLog?.total_duration ?? "0"}
            </Badge>
          </Group>
        </Box>
      }
    >
      {/* Stats */}
      <Grid mb="sm">
        <Grid.Col span={4}>
          <Card bg="#343A4F" p="xs">
            <Group justify="center" gap={6}>
              <Text fw={600} c="white">
                {weeklyLog.labels.last_day}
              </Text>
              <Text size="sm" c="gray.3">
                Last Day
              </Text>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card bg="#503838" p="xs">
            <Group justify="center" gap={6}>
              <Text fw={600} c="white">
                {weeklyLog.labels.this_week}
              </Text>
              <Text size="sm" c="gray.3">
                This Week
              </Text>
            </Group>
          </Card>
        </Grid.Col>

        <Grid.Col span={4}>
          <Card bg="#324936" p="xs">
            <Group justify="center" gap={6}>
              <Text fw={600} c="white">
                {weeklyLog.labels.this_month_average}
              </Text>
              <Text size="sm" c="gray.3">
                Month Average
              </Text>
            </Group>
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
        {/* Scrollable container */}
        <Box style={{ height: "300px", overflowY: "auto" }}>
          <Table
            striped
            withColumnBorders
            withTableBorder
            w="100%"
            styles={{
              th: {
                textAlign: "center",
                paddingTop: 12,
                paddingBottom: 12,
              },
              td: {
                textAlign: "center",
                paddingTop: 14,
                paddingBottom: 14,
              },
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Log Date</Table.Th>
                <Table.Th>In Time</Table.Th>
                <Table.Th>Out Time</Table.Th>
                <Table.Th>Game Zone Time</Table.Th>
                <Table.Th>Total Duration</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {selectedLog ? (
                <Table.Tr>
                  <Table.Td>
                    {formatDateToDayMonthYear(selectedLog.log_date)}
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="outline">00:00:00</Badge>
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="outline">00:00:00</Badge>
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="outline">00:00:00</Badge>
                  </Table.Td>

                  <Table.Td>{selectedLog.total_duration}</Table.Td>
                </Table.Tr>
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={5}>
                    <Text c="dimmed">No data selected</Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </Box>
      </Box>
    </Modal>
  );
}

export default TimeEntryModal;
