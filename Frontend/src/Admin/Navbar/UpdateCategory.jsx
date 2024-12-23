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
  const [category, setCategory] = useState({
    categoryName: "",
  });
  const [error, setError] = useState("");
  // Ürün bilgilerini yükleme
  const fetchCategoryDetails = async () => {
    try {
      const response = await axiosClient.get(`/api/category/${id}`);
      setCategory(response.data.response);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Ürün bilgileri alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchCategoryDetails();
    }
  }, [id]);

  // Form verisini güncelleme
  const handleInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  // Güncelleme işlemini gönderme
  const handleUpdate = async () => {
    try {
      if (id) {
        await axiosClient.put(`/api/category/update/${id}`, {
          ...category,
        });
      } else {
        await axiosClient.post(`/api/category/create`, {
          ...category,
        });
      }
      navigate("/admin/list-categories"); // Güncellemeden sonra liste sayfasına yönlendirme
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Ürün güncellenirken bir hata oluştu.");
    }
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <Container size="sm">
      <h1>Category {id ? "Update" : "Create"}</h1>
      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}
      <TextInput
        label="Category Name"
        name="categoryName"
        value={category.categoryName || ""}
        onChange={handleInputChange}
      />

      <Button mt="md" onClick={handleUpdate}>
        {id ? "Update" : "Create"}
      </Button>
    </Container>
  );
}

export default UpdateItemPage;
