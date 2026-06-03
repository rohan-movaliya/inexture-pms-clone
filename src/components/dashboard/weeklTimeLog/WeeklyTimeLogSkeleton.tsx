import {
  Paper,
  Group,
  Skeleton,
  Divider,
  Box,
  Grid,
  Flex,
} from "@mantine/core";

function WeeklyTimeLogSkeleton() {
  return (
    <Paper withBorder h="100%" mt="md">
      {/* Header */}
      <Group px="md" py="xs" justify="space-between">
        <Group gap={8}>
          <Skeleton height={30} width={140} radius="sm" />
        </Group>

        <Skeleton height={30} width={30} radius="xs" />
      </Group>

      <Divider />

      <Box px="md">
        <Grid my="md" mt="md">
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid.Col key={index} span={{ base: 12, xs: 4 }}>
              <Paper>
                <Flex justify="space-between" align="center">
                  <Skeleton height={85}/>
                </Flex>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default WeeklyTimeLogSkeleton;
