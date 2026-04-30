import {
  Modal,
  Text,
  Group,
  Badge,
  Box,
  Stack,
  ScrollArea,
  Card,
  Loader,
} from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import type { WeeklyWorkLogItem } from "./weeklyWorkLog";
import { useGetDateWiseWorkLogQuery } from "../../../services/dashboard/dashboard.service";
import { formatDateToDayMonthYear } from "../../../utils/functions";

type WeeklyWorkLogModalProps = {
  opened: boolean;
  close: () => void;
  selectedLog: WeeklyWorkLogItem | null;
};

function WeeklyWorkLogModal({
  opened,
  close,
  selectedLog,
}: WeeklyWorkLogModalProps) {
  const selectedDate = selectedLog?.log_date;
  const {
    data: response,
    isLoading,
    isError,
  } = useGetDateWiseWorkLogQuery(
    { date: selectedDate ?? "" },
    { skip: !opened || !selectedDate },
  );
  const items = response?.data ?? [];

  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      size="lg"
      radius="md"
      title={
        <Box
          w="100%"
          pt="xs"
          pb="xs"
          style={{
            borderBottom: "1px solid #2e2e2e",
          }}
        >
          <Group justify="space-between">
            <Text fw={700} size="lg">
              Worklog :{" "}
              {selectedLog
                ? formatDateToDayMonthYear(selectedLog.log_date)
                : ""}
            </Text>

            <Badge tt="none" radius="xl" px="md" size="lg">
              Total: {selectedLog?.workLog ?? "0"}
            </Badge>
          </Group>
        </Box>
      }
    >
      <ScrollArea h={400} scrollbarSize={6}>
        <Stack gap="md">
          {!selectedLog ? (
            <Text size="sm" c="dimmed">
              Select a work log date to view details.
            </Text>
          ) : isLoading ? (
            <Group justify="center" py="md">
              <Loader size="sm" />
            </Group>
          ) : isError ? (
            <Text size="sm" c="dimmed">
              Failed to load work log for this date.
            </Text>
          ) : items.length === 0 ? (
            <Text size="sm" c="dimmed">
              No work log found for this date.
            </Text>
          ) : (
            items.map((item, index) => (
              <Card
                key={index}
                withBorder
                bg="transparent"
                p={0}
                styles={{
                  root: {
                    border: "1px solid #2e2e2e",
                  },
                }}
              >
                {/* Header */}
                <Box
                  px="md"
                  py="sm"
                  style={{
                    borderBottom: "1px solid #2e2e2e",
                  }}
                >
                  <Group justify="space-between">
                    <Group gap="xs">
                      <IconBriefcase size={18} />
                      <Text fw={600}>
                        {item.task?.project_code} - {item.task?.project_name}
                      </Text>
                    </Group>

                    <Badge radius="xl" variant="light" color="gray" tt="none">
                      {item.log_hours}
                    </Badge>
                  </Group>
                </Box>

                {/* Content */}
                <Box
                  p="md"
                  style={{
                    overflowX: "hidden",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  {" "}
                  <Text fw={600} mb="xs">
                    {" "}
                    Task Name -{" "}
                    <Text span fw={400}>
                      {" "}
                      {item.task?.task_name ?? "-"}{" "}
                    </Text>{" "}
                  </Text>{" "}
                  <Box
                    fz="md"
                    style={{
                      lineHeight: 1,
                      overflowX: "hidden",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: item.work_description ?? "",
                    }}
                  />
                </Box>
              </Card>
            ))
          )}
        </Stack>
      </ScrollArea>
    </Modal>
  );
}

export default WeeklyWorkLogModal;
