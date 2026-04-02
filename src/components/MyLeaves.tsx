import { Avatar, Box, Container, Text } from "@mantine/core";

export interface MyLeavesProps {
  title: string;
  headline: string;
  rows: { label: string; value: string }[];
  iconSrc?: string;
}

function MyLeaves({
  title,
  headline,
  rows,
  iconSrc = "/my_leaves.svg",
}: MyLeavesProps) {
  return (
    <Box className="flex h-full min-h-0 flex-col rounded-md border border-zinc-700 p-4">
      <Container className="flex items-center justify-center mt-8">
        <Avatar
          className="mb-4"
          variant="filled"
          radius="xs"
          size="lg"
          src={iconSrc}
        />
      </Container>
      <Text ta="center" size="xl" c="orange.6" fw={600}>
        {headline}
      </Text>
      <Text ta="center" mt={4}>
        {title}
      </Text>

      <Box className="mt-4 space-y-3">
        {rows.map((row) => (
          <Box
            key={row.label}
            className="flex items-center justify-between border border-zinc-700 rounded-md px-4 py-1.5"
          >
            <Text size="sm">{row.label}</Text>
            <Text c="orange.6" fw={600}>
              {row.value}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MyLeaves;
