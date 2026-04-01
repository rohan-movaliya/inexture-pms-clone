import { Avatar, Box, Container, Text } from "@mantine/core";

function Leaves() {
  return (
    <>
      <Box className="border border-zinc-700 rounded-md mb-2 p-4">
        <Container className="flex items-center justify-center mt-8">
          <Avatar
            className="mb-4"
            variant="filled"
            radius="xs"
            size="lg"
            src="my_leaves.svg"
          />
        </Container>
        <Text ta="center" size="xl" c="orange.6">
          17
        </Text>
        <Text ta="center">My Leaves</Text>

        <Box className="mt-4 space-y-3">
          {/* Used Leave */}
          <Box className="flex items-center justify-between border border-zinc-700 rounded-md px-4 py-1.5">
            <Text className="text-sm">Used Leave</Text>
            <Text c="orange.6" className="text-orange-500 font-semibold">
              0
            </Text>
          </Box>

          {/* Remaining */}
          <Box className="flex items-center justify-between border border-zinc-700 rounded-md px-4 py-1.5">
            <Text className="text-sm">Remaining</Text>
            <Text c="orange.6" className="text-orange-500 font-semibold">
              17
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Leaves;
