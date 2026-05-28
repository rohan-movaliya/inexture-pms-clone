import {
  Text,
  Paper,
  Group,
  Divider,
  Tabs,
  Box,
  Center,
  Avatar,
} from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";

function WorkAnniversary() {
  return (
    <Paper withBorder h="100%" mt="md">
      <Group px="md" py="xs" justify="space-between" align="center">
        <Group gap={8}>
          <IconFileTime size={24} />
          <Text size="lg" fw={700}>
            Work Anniversary
          </Text>
        </Group>
      </Group>

      <Divider />

      <Tabs
        color="yellow"
        defaultValue="first"
        styles={{
          root: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            minHeight: 0,
          },
          panel: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            minHeight: 250,
          },
        }}
      >
        <Tabs.List grow>
          <Tabs.Tab value="first">
            <Group gap={8} justify="center">
              <IconFileTime size={24} />
              <Text size="lg" fw={400}>
                Today's
              </Text>
            </Group>
          </Tabs.Tab>

          <Tabs.Tab value="second">
            <Group gap={8} justify="center">
              <IconFileTime size={24} />
              <Text size="lg" fw={400}>
                Upcoming
              </Text>
            </Group>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first">
          <Center h={250}>
            <Box ta="center">
              <Avatar
                variant="filled"
                radius="xs"
                size="xl"
                src="/work-DUbXf0BQ.svg"
              />

              <Text mt="sm">No Anniversary Today</Text>
            </Box>
          </Center>
        </Tabs.Panel>

        <Tabs.Panel value="second">
          <Center h={250}>
            <Text ta="center">No upcoming work anniversaries</Text>
          </Center>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}

export default WorkAnniversary;
