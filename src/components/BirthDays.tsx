import { Tabs, Box, Text } from "@mantine/core";

const VARIANT_COPY = {
  birthdays: {
    tab1: "Today's birthdays",
    tab2: "Upcoming birthdays",
    empty1: "No birthdays today",
    empty2: "No upcoming birthdays",
  },
  holidays: {
    tab1: "Today's holidays",
    tab2: "Upcoming holidays",
    empty1: "No holidays today",
    empty2: "No upcoming holidays",
  },
} as const;

interface BirthDaysProps {
  variant?: keyof typeof VARIANT_COPY;
}

function BirthDays({ variant = "birthdays" }: BirthDaysProps) {
  const copy = VARIANT_COPY[variant];

  return (
    <Box className="flex h-full min-h-0 flex-col border border-zinc-700">
      <Tabs
        color="yellow"
        defaultValue="first"
        className="flex min-h-0 flex-1 flex-col"
        classNames={{ panel: "flex min-h-0 flex-1 flex-col" }}
      >
        <Tabs.List grow justify="center">
          <Tabs.Tab value="first">
            <Text size="lg" fw={400}>
              {copy.tab1}
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="second">
            <Text size="lg" fw={400}>
              {copy.tab2}
            </Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">
          <Box className="p-6">
            <Text>{copy.empty1}</Text>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="second">
          <Box className="p-6">
            <Text>{copy.empty2}</Text>
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default BirthDays;
