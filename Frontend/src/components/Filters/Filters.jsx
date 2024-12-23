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
  categories,
  brands,
}) => {
  return (
    <>
      <Paper shadow="xs" padding="md" className={styles.categoryTypeBox}>
        <Title order={3} className={styles.paperTitle}>
          Categories
        </Title>
        {categories?.data?.response &&
          categories.data.response.map((category) => (
            <Checkbox
              key={category._id}
              label={category.categoryName}
              checked={selectedCategories.includes(category._id)}
              onChange={(e) => handleCategoryChange(category._id)}
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
        {brands?.data?.response &&
          brands.data.response.map((brand) => (
            <Checkbox
              key={brand._id}
              label={brand.brandName}
              checked={selectedBrands.includes(brand._id)}
              onChange={(e) => handleBrandChange(brand._id)}
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
