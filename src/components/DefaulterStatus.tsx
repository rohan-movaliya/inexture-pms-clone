import { Container, Text, Divider, Grid, Box, Flex } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";

const data = [
  { count: 0, label: "Working Hours & Flexibility" },
  { count: 0, label: "Work From Home" },
  { count: 0, label: "Time Entries" },
  { count: 0, label: "Worklog (EOD)" },
  { count: 0, label: "Leaves" },
  { count: 0, label: "Game Zone" },
  { count: 0, label: "Others" },
  { count: 0, label: "Total" },
];

function DefaulterStatus() {
  return (
    <Box className="border border-gray-300">
      <Box className="flex items-center justify-between my-4">
        <Text size="lg" fw={700} className="flex items-center gap-2">
          <IconFileTime size={24} />
          Your Defaulter Status
        </Text>
      </Box>

      <Divider my="md" />

      <Flex>
        <Grid my="md">
          {data.map((item, i) => (
            <Grid.Col h={120} span={{ base: 12, xs: 3 }} key={i}>
              <Container className="flex flex-col items-center justify-center border border-zinc-700 rounded-md overflow-hidden py-6 mx-2 my-2">
                <Text size="xl" fw={900} className="text-cyan-400">
                  {item.count}
                </Text>

                <Text size="lg" fw={500} className="text-gray-300">
                  {item.label}
                </Text>
              </Container>
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

export default DefaulterStatus;
