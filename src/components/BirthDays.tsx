import { Tabs, Box, Text} from "@mantine/core";

function BirthDays() {
  return (
    <Box className="border border-zinc-700">
      <Tabs color="yellow" defaultValue="first">
        <Tabs.List grow justify="center">
          <Tabs.Tab value="first">
            <Text size="lg" fw={400}> Today Birthday</Text>
          </Tabs.Tab>
          <Tabs.Tab value="second">
            <Text size="lg" fw={400}> Upcoming Birthdays</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">
          <Box className="p-6">
            <p>No Birthdays Today</p>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="second">
          <Box className="p-6">
            <p>No Upcoming Birthdays</p>
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default BirthDays;
