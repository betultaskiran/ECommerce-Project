import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextInput, Button, Notification } from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";

function UpdateItemPage() {
  const { id } = useParams(); // URL'den ürün ID'sini al
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  // Ürün bilgilerini yükleme
  const fetchProductDetails = async () => {
    try {
      const response = await axiosClient.get(`/api/product/${id}`);
      setProduct(response.data.response);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Ürün bilgileri alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // Form verisini güncelleme
  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Güncelleme işlemini gönderme
  const handleUpdate = async () => {
    try {
      await axiosClient.put(`/api/product/update/${id}`, product);
      navigate("/list-items"); // Güncellemeden sonra liste sayfasına yönlendirme
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
      <TextInput
        label="Category"
        name="category"
        value={product.category || ""}
        onChange={handleInputChange}
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
