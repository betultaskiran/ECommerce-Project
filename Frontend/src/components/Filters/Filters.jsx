import React from "react";
import { Paper, Title, Checkbox } from "@mantine/core";
import styles from "./Filters.module.css";

const Filters = ({
  selectedCategories = [],
  handleCategoryChange,
  selectedBrands = [],
  handleBrandChange,
  selectedPriceRange = [],
  handlePriceRangeChange,
}) => {
  return (
    <>
      <Paper shadow="xs" padding="md" className={styles.categoryTypeBox}>
        <Title order={3} className={styles.paperTitle}>
          Categories
        </Title>
        {["Skincare", "Make-up", "Parfume"].map((category) => (
          <Checkbox
            key={category}
            label={category}
            name={category}
            checked={selectedCategories.includes(category)}
            onChange={(e) => handleCategoryChange(e)}
            className={styles.checkboxLabel}
          />
        ))}
      </Paper>
      <Paper
        shadow="xs"
        padding="md"
        mt="md"
        className={styles.categoryTypeBox}
      >
        <Title order={3} className={styles.paperTitle}>
          Brands
        </Title>
        {["Clinique", "Dior", "Estee Lauder", "Tom Ford"].map((brand) => (
          <Checkbox
            key={brand}
            label={brand}
            name={brand}
            checked={selectedBrands.includes(brand)}
            onChange={(e) => handleBrandChange(e)}
            className={styles.checkboxLabel}
          />
        ))}
      </Paper>
      <Paper
        shadow="xs"
        padding="md"
        mt="md"
        className={styles.categoryTypeBox}
      >
        <Title order={3} className={styles.paperTitle}>
          Price Range
        </Title>
        {["$0-$50", "$50-$100", "$100-$200", "$200+"].map((range) => (
          <Checkbox
            key={range}
            label={range}
            name={range}
            checked={selectedPriceRange.includes(range)}
            onChange={(e) => handlePriceRangeChange(e)}
            className={styles.checkboxLabel}
          />
        ))}
      </Paper>
    </>
  );
};

export default Filters;
