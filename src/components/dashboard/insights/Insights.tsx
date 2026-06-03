import { Box, Text, Divider, Paper } from "@mantine/core";
import { IconFileTime } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import classes from "./Insights.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useGetInsightsQuery } from "@/services/dashboard/dashboard.service";

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  return (
    <Paper
      shadow="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.card}
    />
  );
}

function Insights() {
  const { data: insightsData } = useGetInsightsQuery();
  console.log("Insights Data:", insightsData);

  const slides = insightsData?.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card image={item.featured_media} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Box className={classes.cardShell}>
      <Box className={classes.header}>
        <Text size="lg" fw={700} className={classes.heading}>
          <IconFileTime size={24} />
          Insights
        </Text>
      </Box>

      <Divider className={classes.divider} />

      <Box
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
    </Box>
  );
}

export default Insights;
