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
import classes from "./Insights.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useGetInsightsQuery } from "@/services/dashboard/dashboard.service";
import { Insight } from "./type/insights";

function CarouselCard({ featured_media }: Pick<Insight, "featured_media">) {
  return (
    <Card shadow="md" withBorder p={0} w="100%" h="100%">
      <Card.Section>
        <AspectRatio ratio={16 / 9} pos="relative">
          <Image
            src={featured_media || "/default-avatar.png"}
            alt="Employee"
            fit="cover"
          />

          <Overlay color="dark" backgroundOpacity={0.1} blur={100} zIndex={0} />

          <Center pos="absolute" inset={0}>
            <Avatar src={featured_media} size={160} radius="md" />
          </Center>
        </AspectRatio>
      </Card.Section>
    </Card>
  );
}

function Insights() {
  const { data: insightsData } = useGetInsightsQuery();
  console.log("Insights Data:", insightsData);

  const slides = insightsData?.map((item) => (
    <Carousel.Slide key={item.id}>
      <CarouselCard featured_media={item.featured_media} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 3000 }));

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
      <Box
        flex={1}
        w="100%"
        py="xs"
        px={5}
        style={{ overflow: "hidden" }}
        className={classes.carouselWrap}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        <Carousel
          className={classes.carousel}
          classNames={{ controls: classes.carouselControls }}
          slideSize="100%"
          slideGap="md"
          withControls
          emblaOptions={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
        >
          {slides}
        </Carousel>
      </Box>
    </Paper>
  );
}

export default Insights;
