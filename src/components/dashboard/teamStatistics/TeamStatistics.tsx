import { useGetTeamStatisticsQuery } from "@/services/dashboard/dashboard.service";
import { Text, Divider, Box, Paper, Group, Grid, Stack } from "@mantine/core";
import { IconUsersGroup } from "@tabler/icons-react";

function TeamStatistics() {
  const { data: teamData } = useGetTeamStatisticsQuery();
  return (
    <Paper withBorder h="100%">
      <Group px="md" py="xs" justify="space-between" align="center">
        <Group gap={8}>
          <IconUsersGroup size={24} />
          <Text size="lg" fw={700}>
            Your Team Status
          </Text>
        </Group>
        <Text size="lg" fw={700} ta="right">
          Strength: {teamData?.total_employee ?? 0}
        </Text>
      </Group>

      <Divider />

      <Box p="md">
        <Grid>
          {teamData?.data.map((item) => (
            <Grid.Col key={item.name} span={{ base: 12, sm: 6, md: 6 }}>
              <Paper p="md" bg="rgba(36,36,36,0.9)">
                <Group align="center" gap="md">
                  {/* Vertical color bar */}
                  <Box bdrs={6} w={10} h={60} bg={item.color} />

                  {/* Text section */}
                  <Stack gap={4}>
                    <Text size="sm">{item.name}</Text>

                    <Group gap={6} align="baseline">
                      <Text fz={28} fw={600}>
                        {String(item.count).padStart(2, "0")}
                      </Text>
                      <Text size="sm">{item.value}%</Text>
                    </Group>
                  </Stack>
                </Group>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
      <Divider />

      <Box p="md">
        <Text c="gray.5">
          Your overall team attendance is {teamData?.overall ?? 0}%.
        </Text>
      </Box>
    </Paper>
  );
}

export default TeamStatistics;
