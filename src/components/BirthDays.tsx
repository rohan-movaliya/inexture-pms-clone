import { Tabs, Box, Text } from "@mantine/core";
import classes from "./BirthDays.module.css";

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
    <Box className={classes.card}>
      <Tabs
        color="yellow"
        defaultValue="first"
        className={classes.tabs}
        classNames={{ panel: classes.panel }}
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
          <Box className={classes.content}>
            <Text>{copy.empty1}</Text>
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="second">
          <Box className={classes.content}>
            <Text>{copy.empty2}</Text>
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default BirthDays;
