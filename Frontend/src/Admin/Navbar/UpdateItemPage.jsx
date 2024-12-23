import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  TextInput,
  Button,
  Notification,
  Select,
} from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";

function UpdateItemPage() {
  const { id } = useParams(); // URL'den ürün ID'sini al
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Seçilen kategori
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  // Ürün bilgilerini yükleme
  const fetchProductDetails = async () => {
    try {
      const response = await axiosClient.get(`/api/product/${id}`);
      setSelectedCategory(response.data.response.categoryId);
      setSelectedBrand(response.data.response.brandId);
      setProduct(response.data.response);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Ürün bilgileri alınırken bir hata oluştu.");
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get("/api/category");
      setCategories(response.data.response); // Kategori listesi
    } catch (err) {
      console.error("Kategoriler yüklenirken hata oluştu:", err);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axiosClient.get("/api/brand"); // Markaları almak için endpoint
      setBrands(response.data.response); // Marka listesi
    } catch (err) {
      console.error("Markalar yüklenirken hata oluştu:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBrands();
    fetchProductDetails();
  }, [id]);

  // Form verisini güncelleme
  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Güncelleme işlemini gönderme
  const handleUpdate = async () => {
    try {
      await axiosClient.put(`/api/product/update/${id}`, {
        ...product,
        brandId: selectedBrand,
        categoryId: selectedCategory,
      });
      navigate("/admin/list-items"); // Güncellemeden sonra liste sayfasına yönlendirme
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Ürün güncellenirken bir hata oluştu.");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container size="sm">
      <h1>Update Product</h1>
      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}
      <TextInput
        label="Product Name"
        name="productName"
        value={product.productName || ""}
        onChange={handleInputChange}
      />
      <Select
        label="Kategori"
        placeholder="Kategori seçiniz"
        data={categories.map((category) => ({
          value: category._id,
          label: category.categoryName,
        }))}
        defaultValue={selectedCategory}
        onChange={setSelectedCategory}
        required
        mt="md"
      />
      <Select
        label="Marka"
        placeholder="Marka seçiniz"
        data={brands.map((brand) => ({
          value: brand._id,
          label: brand.brandName, // Kategori yerine marka adı
        }))}
        defaultValue={selectedBrand}
        onChange={setSelectedBrand} // Markayı seçtiğinde state güncellenir
        required
        mt="md"
      />
      <TextInput
        label="Price"
        name="price"
        type="number"
        value={product.price || ""}
        onChange={handleInputChange}
      />
      <Button mt="md" onClick={handleUpdate}>
        Update
      </Button>
    </Container>
  );
}

export default UpdateItemPage;
