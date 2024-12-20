/*import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Title,
  Checkbox,
  SimpleGrid,
  Container,
} from "@mantine/core";
import { FeaturesCard } from "../Card/FeaturesCard";
import styles from "./ProductsPage.module.css";
import { axiosClient } from "../axiosClient";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Tüm ürünler
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtrelenmiş ürünler
  const [loading, setLoading] = useState(true); // Loading durumu
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);

  // Sayfa yüklendiğinde tüm ürünleri çek
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Loading durumu aktif edildi
        const response = await axiosClient.get("api/product"); // API endpoint'iniz
        setProducts(response.data.response);
        setFilteredProducts(response.data); // İlk başta tüm ürünler filtrelenmiş olarak gösterilsin
      } catch (error) {
        console.error("Ürünler çekilirken hata oluştu:", error);
        alert("Ürünler çekilirken bir hata oluştu. Lütfen tekrar deneyin."); // Error handling
      } finally {
        setLoading(false); // Veriler alındıktan sonra yükleme durumu false yapılsın
      }
    };

    fetchProducts();
  }, []); // Boş dizin bağımlılığı, bir kez çalışacak

  // Kategori değiştiğinde filtreleme fonksiyonu
  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, name] : prev.filter((category) => category !== name)
    );
  };

  // Marka değiştiğinde filtreleme fonksiyonu
  const handleTypeChange = (event) => {
    const { name, checked } = event.target;
    setSelectedBrands((prev) =>
      checked ? [...prev, name] : prev.filter((brand) => brand !== name)
    );
  };

  // Fiyat aralığı değiştiğinde filtreleme fonksiyonu
  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    setSelectedPriceRange((prev) =>
      checked ? [...prev, name] : prev.filter((range) => range !== name)
    );
  };

  // Ürünleri filtreleme
  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedBrands.length) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedPriceRange.length) {
      filtered = filtered.filter((product) =>
        selectedPriceRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          const price = Number(product.price);
          return min <= price && price <= (max || Infinity);
        })
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedBrands, selectedPriceRange, products]);

  return (
    <Grid gutter="md" className={styles.container}>
      <Grid.Col span={2}>
        <Paper shadow="xs" padding="md" className={styles.categoryTypeBox}>
          <Title order={3} className={styles.paperTitle}>
            Categories
          </Title>
          <Checkbox
            label="Skincare"
            name="Skincare"
            onChange={handleCategoryChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="Make-up"
            name="Make-up"
            onChange={handleCategoryChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="Parfume"
            name="Parfume"
            onChange={handleCategoryChange}
            className={styles.checkboxLabel}
          />
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
          <Checkbox
            label="Clinique"
            name="Clinique"
            onChange={handleTypeChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="Dior"
            name="Dior"
            onChange={handleTypeChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="Estee Lauder"
            name="Estee Lauder"
            onChange={handleTypeChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="Tom Ford"
            name="Tom Ford"
            onChange={handleTypeChange}
            className={styles.checkboxLabel}
          />
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
          <Checkbox
            label="$0-$50"
            name="$0-$50"
            onChange={handlePriceRangeChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="$50-$100"
            name="$50-$100"
            onChange={handlePriceRangeChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="$100-$200"
            name="$100-$200"
            onChange={handlePriceRangeChange}
            className={styles.checkboxLabel}
          />
          <Checkbox
            label="$200+"
            name="$200+"
            onChange={handlePriceRangeChange}
            className={styles.checkboxLabel}
          />
        </Paper>
      </Grid.Col>
      <Grid.Col span={10}>
        <Container fluid>
          {loading ? (
            <p>Yükleniyor...</p> // Sayfa yüklenirken Loading... yazısı gösterilir
          ) : filteredProducts.length > 0 ? (
            <SimpleGrid cols={4} spacing="lg">
              {filteredProducts.map((product) => (
                <FeaturesCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          ) : (
            <p>Ürün bulunamadı.</p> // Eğer filtrelenmiş ürün bulunamadıysa bir mesaj göster
          )}
        </Container>
      </Grid.Col>
    </Grid>
  );
};

export default ProductsPage;*/
import React, { useState, useEffect } from "react"; //şuanki kod
import { Grid, SimpleGrid, Container } from "@mantine/core";
import { FeaturesCard } from "../Card/FeaturesCard";
import styles from "./ProductsPage.module.css";
import { axiosClient } from "../axiosClient";
import Filters from "../Filters/Filters";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Tüm ürünler
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtrelenmiş ürünler
  const [loading, setLoading] = useState(true); // Loading durumu
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const navigate = useNavigate(); // Yönlendirme işlevi için kullan

  // Sayfa yüklendiğinde tüm ürünleri çek
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Loading durumu aktif edildi
        const response = await axiosClient.get("api/product");
        setProducts(response.data.response);
        setFilteredProducts(response.data.response); // İlk başta tüm ürünler gösterilsin
      } catch (error) {
        console.error("Ürünler çekilirken hata oluştu:", error);
        alert("Ürünler çekilirken bir hata oluştu. Lütfen tekrar deneyin.");
      } finally {
        setLoading(false); // Veriler alındıktan sonra yükleme durumu false
      }
    };

    fetchProducts();
  }, []);

  // Kategori değiştiğinde filtreleme
  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, name] : prev.filter((category) => category !== name)
    );
  };

  // Marka değiştiğinde filtreleme
  const handleBrandChange = (event) => {
    const { name, checked } = event.target;
    setSelectedBrands((prev) =>
      checked ? [...prev, name] : prev.filter((brand) => brand !== name)
    );
  };

  // Fiyat aralığı değiştiğinde filtreleme
  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    setSelectedPriceRange((prev) =>
      checked ? [...prev, name] : prev.filter((range) => range !== name)
    );
  };

  // Ürünleri filtreleme
  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedBrands.length) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedPriceRange.length) {
      filtered = filtered.filter((product) =>
        selectedPriceRange.some((range) => {
          const [min, max] = range.replace("$", "").split("-").map(Number);
          const price = Number(product.price);
          return min <= price && price <= (max || Infinity);
        })
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedBrands, selectedPriceRange, products]);

  // Ürün detay sayfasına yönlendirme
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Grid gutter="md" className={styles.container}>
      <Grid.Col span={2}>
        <Filters
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
          selectedBrands={selectedBrands}
          handleBrandChange={handleBrandChange}
          selectedPriceRange={selectedPriceRange}
          handlePriceRangeChange={handlePriceRangeChange}
        />
      </Grid.Col>
      <Grid.Col span={10}>
        <Container fluid>
          {loading ? (
            <p>Yükleniyor...</p>
          ) : filteredProducts.length > 0 ? (
            <SimpleGrid cols={4} spacing="lg">
              {filteredProducts.map((product) => (
                <FeaturesCard
                  key={product._id}
                  product={product}
                  handleProductClick={handleProductClick}
                /> // Her bir ürün kartı tıklama işlevi eklenir
              ))}
            </SimpleGrid>
          ) : (
            <p>Ürün bulunamadı.</p>
          )}
        </Container>
      </Grid.Col>
    </Grid>
  );
};

export default ProductsPage;
