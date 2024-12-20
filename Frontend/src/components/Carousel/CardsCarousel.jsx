import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./CardsCarousel.module.css";
import "@mantine/carousel/styles.css";
function Card({ image, title, category }) {
  return (
    <Paper
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xl">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1688380337044-18c03ba32199?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Beautiful skin is the result of healthy habit, she best skin care products.",
    category: "skincare",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Makeup is the best way to bring out the light within you.",
    category: "makeup",
  },
  {
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:
      "Perfume is like your personal signature; it is a detail that tells about you.",
    category: "parfume",
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="80%" /* Slayt genişliğini azalt */
      slideGap="md" /* Slaytlar arasındaki boşluk */
      align="start"
      slidesToScroll={mobile ? 1 : 1}
    >
      {slides}
    </Carousel>
  );
}
