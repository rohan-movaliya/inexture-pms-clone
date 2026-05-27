import { Modal, Box, Text, Grid, Card, Group, Table } from "@mantine/core";
import { ModalContentProps } from "./type/leaveandattendenceoverview";

function LeaveAndAttendanceOverviewModal({
  opened,
  close,
  modalContent,
}: {
  opened: boolean;
  close: () => void;
  modalContent: ModalContentProps;
}) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      size="xl"
      overlayProps={{ blur: 3 }}
      radius="md"
      styles={{
        header: {
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        },

        title: {
          flex: 1,
        },

        close: {
          color: "#d1d1d1",

          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
          },
        },

        body: {
          padding: 16,
        },
      }}
      title={
        <Text fw={700} size="lg" c="white">
          {modalContent.title}
        </Text>
      }
    >
      {/* Stats */}
      <Grid mb="sm" gutter="sm">
        {modalContent.overview.map((item, index) => (
          <Grid.Col key={index} span="auto">
            <Card bg={item.color} p="xs">
              <Group justify="center" gap={6}>
                <Text fw={600} c="white">
                  {item.value}
                </Text>
                <Text size="sm" c="gray.3">
                  {item.label}
                </Text>
              </Group>
            </Card>
          </Grid.Col>
        ))}
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
                {modalContent.tabledata.headers.map((header) => (
                  <Table.Th key={header}>{header}</Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {modalContent.tabledata.rows.length === 0 ? (
                <Table.Tr style={{ height: 220 }}>
                  <Table.Td
                    colSpan={modalContent.tabledata.headers.length}
                    ta="center"
                    style={{ verticalAlign: "middle" }}
                  >
                    No records to display.
                  </Table.Td>
                </Table.Tr>
              ) : (
                modalContent.tabledata.rows.map((row, index) => (
                  <Table.Tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <Table.Td key={cellIndex}>{cell}</Table.Td>
                    ))}
                  </Table.Tr>
                ))
              )}
            </Table.Tbody>
          </Table>
        </Box>
      </Box>
    </Modal>
  );
}

export default LeaveAndAttendanceOverviewModal;
