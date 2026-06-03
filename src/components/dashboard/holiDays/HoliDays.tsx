import {
  Text,
  Paper,
  Group,
  Divider,
  Tabs,
  Box,
  Center,
  Avatar,
  Image,
  Card,
} from "@mantine/core";
import type { ReactNode } from "react";
import { IconFileTime } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import { useGetHolidaysQuery } from "@/services/dashboard/dashboard.service";
import { Holiday } from "./type/holiDays";

function CarouselCard({ holiday_image, name, date }: Holiday) {
  const fallbackImage = "/holiday_fallback.png";
  return (
    <Card shadow="md" withBorder p={0} w="100%" h="100%">
      {/* Top Banner */}

      <Card.Section>
        <Box pos="relative">
          <Image
            src="/birthday_backgroun.png"
            h={150}
            alt="Celebration ribbon"
          />

          <Center pos="absolute" top={0} left={0} right={0} bottom={0}>
            <Avatar
              src={holiday_image || fallbackImage}
              size={85}
              radius="md"
            />
          </Center>
        </Box>
      </Card.Section>

      <Group px="xs" justify="space-between" align="flex-start" wrap="nowrap">
        <Box flex={1}>
          <Group justify="space-between" align="center" wrap="nowrap">
            <Text c="white" fw={700} size="sm">
              {name}
            </Text>

            <Text c="orange" fw={700} size="sm">
              {date}
            </Text>
          </Group>
        </Box>
      </Group>
    </Card>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <Center h={200}>
      <Box ta="center">
        <Avatar src="/work-DUbXf0BQ.svg" size="xl" />
        <Text mt="sm">{message}</Text>
      </Box>
    </Center>
  );
}

function HoliDays() {
  const { data: holidays, isLoading } = useGetHolidaysQuery();

  if (isLoading) {
    return (
      <Paper withBorder h="100%" mt="md" p="md">
        <Center h={200}>
          <Text>Loading Holidays...</Text>
        </Center>
      </Paper>
    );
  }

  const todaySlides =
    holidays?.today.data.map((item) => (
      <Carousel.Slide key={item.id}>
        <Box px={5} h="100%">
          <CarouselCard {...item} />
        </Box>
      </Carousel.Slide>
    )) || [];

  const upcomingSlides =
    holidays?.upcoming.data.map((item) => (
      <Carousel.Slide key={item.id}>
        <Box px={5} h="100%">
          <CarouselCard {...item} />
        </Box>
      </Carousel.Slide>
    )) || [];

  const renderCarousel = (slides: ReactNode[], slideSize: string = "50%") => (
    <Carousel
      slideSize={slideSize}
      emblaOptions={{ align: "start", loop: true }}
      withIndicators={false}
      withControls={slides.length > 1}
      controlsOffset={24}
      w="100%"
      style={{ flex: 1, minWidth: 0 }}
    >
      {slides}
    </Carousel>
  );

  return (
    <Paper withBorder h="100%" mt="md" miw={0} style={{ overflow: "hidden" }}>
      <Group px="md" py="xs" justify="space-between" align="center">
        <Group gap={8}>
          <IconFileTime size={24} />
          <Text size="lg" fw={700}>
            Holidays
          </Text>
        </Group>
      </Group>

      <Divider />

      <Tabs
        color="yellow"
        defaultValue="today"
        styles={{
          root: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            minHeight: 0,
            minWidth: 0,
            overflow: "hidden",
          },
          panel: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            minWidth: 0,
            overflow: "hidden",
          },
        }}
      >
        <Tabs.List grow>
          <Tabs.Tab value="today">
            <Group gap={8} justify="center">
              <IconFileTime size={24} />
              <Text size="lg" fw={400}>
                Today's
              </Text>
            </Group>
          </Tabs.Tab>

          <Tabs.Tab value="upcoming">
            <Group gap={8} justify="center">
              <IconFileTime size={24} />
              <Text size="lg" fw={400}>
                Upcoming
              </Text>
            </Group>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="today">
          <Box flex={1} w="100%" py="xs" px={5} style={{ overflow: "hidden" }}>
            {holidays?.today.data.length ? (
              renderCarousel(todaySlides, "100%")
            ) : (
              <EmptyState message="No holidays today" />
            )}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="upcoming">
          <Box flex={1} w="100%" py="xs" px={5} style={{ overflow: "hidden" }}>
            {holidays?.upcoming.data.length ? (
              renderCarousel(upcomingSlides)
            ) : (
              <EmptyState message="No upcoming holidays" />
            )}
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}

export default HoliDays;
