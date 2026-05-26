import {
  Text,
  Divider,
  Box,
  Paper,
  Group,
  Grid,
  Stack,
  BackgroundImage,
} from "@mantine/core";
import { IconClockRecord } from "@tabler/icons-react";
import { useGetDefaulterStatusQuery } from "@/services/dashboard/dashboard.service";

function DefaulterStatus() {
  const {
    data: defaulterStatus,
    isLoading,
    isError,
  } = useGetDefaulterStatusQuery();

  return (
    <Paper withBorder h="100%">
      {/* Header */}
      <Group px="md" py="xs" gap={8}>
        <IconClockRecord size={22} />
        <Text fw={700}>Your Non Compliance Status</Text>
      </Group>

      <Divider />

      {/* Grid */}
      <Box p="md">
        {isLoading ? (
          <Text c="gray.5">Loading...</Text>
        ) : isError ? (
          <Text c="red.6">Failed to load non-compliance status.</Text>
        ) : (
          <Grid>
            {(defaulterStatus?.data ?? []).map((item) => (
              <Grid.Col
                key={item.category_id}
                span={{ base: 12, sm: 6, md: 4 }}
              >
                <BackgroundImage
                  src="/9_defaulter_bg.svg"
                  radius="sm"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "top right",
                  }}
                >
                  <Paper withBorder ta="center" p="md" bg="rgba(36,36,36,0.9)">
                    <Stack gap={2} align="center">
                      <Text fz={40} fw={500} lh={1}>
                        {item.count}
                      </Text>

                      <Text fz={14} fw={500}>
                        {item.category_name}
                      </Text>
                    </Stack>
                  </Paper>
                </BackgroundImage>
              </Grid.Col>
            ))}
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <BackgroundImage
                src="/9_defaulter_bg.svg"
                radius="sm"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "top right",
                }}
              >
                <Paper withBorder ta="center" p="md" bg="rgba(36,36,36,0.9)">
                  <Stack gap={2} align="center">
                    <Text fz={40} fw={600} lh={1}>
                      {defaulterStatus?.total ?? 0}
                    </Text>

                    <Text size="md" fw={500}>
                      Total
                    </Text>
                  </Stack>
                </Paper>
              </BackgroundImage>
            </Grid.Col>
          </Grid>
        )}
      </Box>

      <Divider />

      {/* Footer */}
      <Box p="md">
        <Text c="gray.5">
          Well done for keeping things in order within the rules.
        </Text>
      </Box>
    </Paper>
  );
}

export default DefaulterStatus;
