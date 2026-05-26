import { Avatar, Center, Text, Paper, Stack, Group } from "@mantine/core";
import LeaveAndAttendanceOverviewModal from "./LeaveAndAttendanceOverviewModal";
import { useDisclosure } from "@mantine/hooks";
import { LeaveAndAttendanceOverviewProps } from "./type/leaveandattendenceoverview";


function LeaveAndAttendanceOverview({
  title,
  headline,
  headline_color = "orange.6",
  rows,
  iconSrc = "/4_my_leaves.svg",
  modalContent
}: LeaveAndAttendanceOverviewProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <LeaveAndAttendanceOverviewModal opened={opened} close={close} modalContent={modalContent} />

      <Paper withBorder h="100%" p={16} onClick={open}>
        <Center>
          <Avatar variant="filled" radius="xs" size="lg" src={iconSrc} />
        </Center>
        <Text mt={15} ta="center" fz={32} c={headline_color} fw={600}>
          {headline}
        </Text>
        <Text ta="center" fw={900} c="white">
          {title}
        </Text>

        <Stack mt="md" gap="sm">
          {rows.map((row) => (
            <Paper withBorder p={6} key={row.label}>
              <Group justify="space-between" wrap="nowrap">
                <Text fw={900} fz="sm">
                  {row.label}
                </Text>
                <Text c={headline_color} fw={600}>
                  {row.value}
                </Text>
              </Group>
            </Paper>
          ))}
        </Stack>
      </Paper>
    </>
  );
}

export default LeaveAndAttendanceOverview;
