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
import { useGetWorkAnniversaryQuery } from "@/services/dashboard/dashboard.service";
import { AnniversaryItem } from "./type/workAnniversary";

type CardProps = AnniversaryItem;

function CarouselCard({ image, name, team, experience, gender }: CardProps) {
  const fallbackImage =
    gender === "female" ? "/female-DbdA0NF7.svg" : "/male-CckHfSFM.svg";

  return (
    <Card shadow="md" withBorder p={0} w="100%" h="100%">
      {/* Top Banner */}

      <Card.Section>
        <Box pos="relative">
          <Image
            src="/celebration_ribbon-DtIxGEvi.png"
            h={150}
            alt="Celebration ribbon"
          />

          <Center pos="absolute" top={0} left={0} right={0} bottom={0}>
            <Avatar src={image || fallbackImage} size={85} radius="md" />
          </Center>
        </Box>
      </Card.Section>

      <Divider color="gray.7" />

      {/* Bottom Content */}

      <Group px="xs" justify="space-between" align="flex-start" wrap="nowrap">
        <Box flex={1}>
          <Group justify="space-between" align="center" wrap="nowrap">
            <Text c="white" fw={700} size="sm">
              {name}
            </Text>

            <Text c="orange" fw={700} size="sm">
              {experience} yr
            </Text>
          </Group>

          <Text c="gray.4" size="sm" mt={2}>
            {team}
          </Text>
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

function WorkAnniversary() {
  const { data: workAnniversaryData, isLoading } = useGetWorkAnniversaryQuery();

  if (isLoading) {
    return (
      <Paper withBorder h="100%" mt="md" p="md">
        <Center h={200}>
          <Text>Loading anniversaries...</Text>
        </Center>
      </Paper>
    );
  }

  const todaySlides =
    workAnniversaryData?.today.map((item) => (
      <Carousel.Slide key={item.id}>
        <Box px={5} h="100%">
          <CarouselCard {...item} />
        </Box>
      </Carousel.Slide>
    )) || [];

  const upcomingSlides =
    workAnniversaryData?.upcoming.map((item) => (
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
            Work Anniversary
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
            {workAnniversaryData?.today.length ? (
              renderCarousel(todaySlides, "100%")
            ) : (
              <EmptyState message="No Anniversary Today" />
            )}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="upcoming">
          <Box flex={1} w="100%" py="xs" px={5} style={{ overflow: "hidden" }}>
            {workAnniversaryData?.upcoming.length ? (
              renderCarousel(upcomingSlides)
            ) : (
              <EmptyState message="No upcoming work anniversaries" />
            )}
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}

export default WorkAnniversary;
