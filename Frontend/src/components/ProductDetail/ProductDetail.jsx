// src/components/ProductDetail/ProductDetail.jsx
/*import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Paper, Container, Title, Text } from "@mantine/core";
import { axiosClient } from "../axiosClient";

const ProductDetail = () => {
  const params = useParams(); // URL parametresi olarak ürün ID'sini al
  const [product, setProduct] = useState(null); // Seçilen ürün bilgisi

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosClient.get(`/api/product/${params.id}`);
        setProduct(response.data.response);
      } catch (error) {
        console.error("Ürün detayları alınırken hata oluştu:", error);
        alert(
          "Ürün detayları alınırken bir hata oluştu. Lütfen tekrar deneyin."
        );
      }
    };

    fetchProductDetails();
  }, []);

  return (
    <Container>
      {product ? (
        <Paper shadow="xs" padding="md">
          <Title order={1}>{product.name}</Title>
          <Text>{product.description}</Text>
          <Text>Fiyat: ${product.price}</Text>
          <Button variant="outline" color="green">
            Sepete Ekle
          </Button>
        </Paper>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </Container>
  );
};

export default ProductDetail;*/
// ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Paper, Container, Title, Text, Image } from "@mantine/core";
import { axiosClient } from "../axiosClient";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams(); // URL parametresi olarak ürün ID'sini al
  const [product, setProduct] = useState(null); // Seçilen ürün bilgisi

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosClient.get(`/api/product/${params.id}`);
        setProduct(response.data.response);
        console.log(response.data.response);
      } catch (error) {
        console.error("Ürün detayları alınırken hata oluştu:", error);
        alert(
          "Ürün detayları alınırken bir hata oluştu. Lütfen tekrar deneyin."
        );
      }
    };

    fetchProductDetails();
  }, [params.id]);

  return (
    <Container>
      {product ? (
        <Paper shadow="xs" padding="md" className={styles.productDetail}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <Title order={1} className={styles.productName}>
              {product.productName}
            </Title>
            <Text className={styles.productDescription}>
              {product.description}
            </Text>
            <Text className={styles.productPrice}>Fiyat: ${product.price}</Text>
            <Button
              variant="outline"
              color="green"
              className={styles.addButton}
            >
              Sepete Ekle
            </Button>
          </div>
        </Paper>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </Container>
  );
};

export default ProductDetail;
