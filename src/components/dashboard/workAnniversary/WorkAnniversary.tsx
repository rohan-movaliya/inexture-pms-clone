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

interface AnniversaryItem {
  id: number;
  name: string;
  image: string | null;
  team: string;
  experience: number;
}

const data: Record<"today" | "upcoming", AnniversaryItem[]> = {
  today: [
    {
      id: 312,
      name: "Dev Joshi",
      image: null,
      team: "DevOps Team",
      experience: 1,
    },
  ],

  upcoming: [
    {
      id: 204,
      name: "Jaydeepsinh Parmar",
      image: null,
      team: "Sales Team",
      experience: 2,
    },
    {
      id: 203,
      name: "Vikalp Soni",
      image:
        "https://inx-portal-media.s3.amazonaws.com/media/profiles/IMG_20230609_210031.jpg",
      team: "AEM Team",
      experience: 2,
    },
    {
      id: 12,
      name: "Riddhi Soni",
      image:
        "https://inx-portal-media.s3.amazonaws.com/media/profiles/Riddhi.png",
      team: "Frontend Team",
      experience: 5,
    },
    {
      id: 133,
      name: "Bharat Chaudhari",
      image: null,
      team: "Java Team",
      experience: 3,
    },
    {
      id: 307,
      name: "Faizan Chundarigar",
      image: null,
      team: "Python Team",
      experience: 1,
    },
  ],
};

type CardProps = AnniversaryItem;

function CarouselCard({ image, name, team, experience }: CardProps) {
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
            <Avatar src={image || "/male-CckHfSFM.svg"} size={85} radius="md" />
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
  const todaySlides = data?.today.map((item) => (
    <Carousel.Slide key={item.id}>
      <Box p="xs" h="100%">
        <CarouselCard {...item} />
      </Box>
    </Carousel.Slide>
  ));

  const upcomingSlides = data?.upcoming.map((item) => (
    <Carousel.Slide key={item.id}>
      <Box p="xs" h="100%">
        <CarouselCard {...item} />
      </Box>
    </Carousel.Slide>
  ));

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
          {data?.today.length ? (
            renderCarousel(todaySlides, "100%")
          ) : (
            <EmptyState message="No Anniversary Today" />
          )}
        </Tabs.Panel>

        <Tabs.Panel value="upcoming">
          {data?.upcoming.length ? (
            renderCarousel(upcomingSlides)
          ) : (
            <EmptyState message="No upcoming work anniversaries" />
          )}
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}

export default WorkAnniversary;
