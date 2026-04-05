import { Box, Text, Divider, Paper } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import classes from "./Insights.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  return (
    <Paper
      shadow="md"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.card}
    />
  );
}

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
];

interface InsightsProps {
  title?: string;
}

function Insights({ title = "Insights" }: InsightsProps) {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card image={item.image} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Box className="flex h-full min-h-0 flex-col border border-zinc-700 p-4">
      <Box className="mb-4 flex shrink-0 items-center justify-between">
        <Text size="lg" fw={700} className="flex items-center gap-2">
          <IconFileTime size={24} />
          {title}
        </Text>
      </Box>

      <Divider className="-mx-4 shrink-0" />

      <Box
        className={`${classes.carouselWrap} mt-4 min-h-0 flex-1 flex flex-col`}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
      >
        <Carousel
          className="min-h-0 flex-1"
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
    </Box>
  );
}

export default Insights;
