import {
  Box,
  Text,
  Divider,
  Card,
  Image,
  Center,
  Avatar,
  Paper,
  Group,
  Overlay,
  AspectRatio,
} from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useGetInsightsQuery } from "@/services/dashboard/dashboard.service";
import { Insight } from "./type/insights";

function CarouselCard({ featured_media }: Pick<Insight, "featured_media">) {
  return (
    <Card
      shadow="md"
      withBorder
      p={0}
      style={{ width: 550, height: 250 }}
      mx="auto"
    >
      <Card.Section>
        <AspectRatio ratio={16 / 9} pos="relative">
          <Image
            src={featured_media || "/default-avatar.png"}
            alt="Employee"
            fit="cover"
          />

          <Overlay color="dark" backgroundOpacity={0.1} blur={100} zIndex={1} />

          <Center pos="absolute" inset={0} style={{ zIndex: 2 }}>
            <Avatar
              src={featured_media || "/default-avatar.png"}
              size={200}
              radius="md"
            />
          </Center>
        </AspectRatio>
      </Card.Section>
    </Card>
  );
}

function Insights() {
  const { data: insightsData } = useGetInsightsQuery();

  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const [showControls, setShowControls] = useState(false);

  const slides = insightsData?.map((item) => (
    <Carousel.Slide key={item.id}>
      <CarouselCard featured_media={item.featured_media} />
    </Carousel.Slide>
  ));

  return (
    <Paper withBorder h="100%" mt="md" miw={0} style={{ overflow: "hidden" }}>
      <Group px="md" py="xs" justify="space-between" align="center">
        <Group gap={8}>
          <IconFileTime size={24} />
          <Text size="lg" fw={700}>
            Insights
          </Text>
        </Group>
      </Group>

      <Divider />

      <Box
        mt={0}
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
        onMouseEnter={() => {
          setShowControls(true);
          autoplay.current.stop();
        }}
        onMouseLeave={() => {
          setShowControls(false);
          autoplay.current.play();
        }}
      >
        <Carousel
          slideSize="100%"
          slideGap="md"
          withControls
          emblaOptions={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          style={{
            flex: 1,
            minHeight: 0,
          }}
          styles={{
            controls: {
              opacity: showControls ? 1 : 0,
              pointerEvents: showControls ? "auto" : "none",
              transition: "opacity 150ms ease",
            },
          }}
        >
          {slides}
        </Carousel>
      </Box>
    </Paper>
  );
}

export default Insights;
