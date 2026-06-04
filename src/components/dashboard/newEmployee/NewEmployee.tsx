import {
  Box,
  Text,
  Divider,
  Paper,
  Group,
  Center,
  Avatar,
} from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";

function NewEmployee() {
  return (
    <Paper withBorder h="100%" mt="md" miw={0} style={{ overflow: "hidden" }}>
      <Group px="md" py="xs" justify="space-between" align="center">
        <Group gap={8}>
          <IconFileTime size={24} />
          <Text size="lg" fw={700}>
            New Joiners
          </Text>
        </Group>
      </Group>

      <Divider />

      <Box
        mt="md"
        flex={1}
        w="100%"
        py="xs"
        px={5}
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          position: "relative",
        }}
      >
        <Center h={200}>
          <Box ta="center">
            <Avatar src="/work-DUbXf0BQ.svg" size="xl" />
            <Text mt="sm">No new Joinee</Text>
          </Box>
        </Center>
      </Box>
    </Paper>
  );
}

export default NewEmployee;
