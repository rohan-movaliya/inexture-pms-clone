import { Avatar, Center, Text, Paper, Stack, Group } from "@mantine/core";

export interface LeaveAndAttendanceOverviewProps {
  title: string;
  headline: string;
  headline_color?: string;
  rows: { label: string; value: string }[];
  iconSrc?: string;
}

function LeaveAndAttendanceOverview({
  title,
  headline,
  headline_color = "orange.6",
  rows,
  iconSrc = "/4_my_leaves.svg",
}: LeaveAndAttendanceOverviewProps) {
  return (
    <Paper withBorder p={16}>
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
  );
}

export default LeaveAndAttendanceOverview;
