import { Card, Image, Text, Group, ActionIcon, Rating } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import styles from "./FeaturesCard.module.css";
import { useState } from "react";

export function FeaturesCard({ product, handleProductClick }) {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <Card
      withBorder
      radius="md"
      className={styles.card}
      onClick={() => handleProductClick(product._id)}
    >
      {/* Product Image Section */}
      <Card.Section className={styles.imageSection}>
        <Image
          src={`http://localhost:3000${product.image}`}
          className={styles.productImage}
        />

        <ActionIcon className={styles.favoriteIcon} size="lg" radius="xl">
          <IconHeart size={24} stroke={1.5} />
        </ActionIcon>
      </Card.Section>

      {/* Product Details Section */}
      <div className={styles.detailsSection}>
        {/* Product Name */}
        <Text fz="lg" fw={700} mt="md">
          {product.productName}
        </Text>

        {/* Rating Section */}
        <Group spacing={4} mt="xs">
          <Rating value={ratingValue} onChange={setRatingValue} />
        </Group>

        {/* Price Section */}
        <Text fz="xl" fw={700} mt="sm">
          {product.price}$
        </Text>
      </div>
    </Card>
  );
}
