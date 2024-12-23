import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextInput, Button, Notification } from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";

function UpdateBrandPage() {
  const { id } = useParams(); // URL'den marka ID'sini al
  const navigate = useNavigate();
  const [brand, setBrand] = useState({
    brandName: "",
  });
  const [error, setError] = useState("");

  // Marka bilgilerini yükleme
  const fetchBrandDetails = async () => {
    try {
      const response = await axiosClient.get(`/api/brand/${id}`);
      setBrand(response.data.response);
    } catch (err) {
      console.error("Error fetching brand details:", err);
      setError("Marka bilgileri alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchBrandDetails();
    }
  }, [id]);

  // Form verisini güncelleme
  const handleInputChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  // Güncelleme işlemini gönderme
  const handleUpdate = async () => {
    try {
      if (id) {
        await axiosClient.put(`/api/brand/update/${id}`, {
          ...brand,
        });
      } else {
        await axiosClient.post(`/api/brand/create`, {
          ...brand,
        });
      }

      navigate("/admin/list-brands"); // Güncellemeden sonra liste sayfasına yönlendirme
    } catch (err) {
      console.error("Error updating brand:", err);
      setError("Marka güncellenirken bir hata oluştu.");
    }
  };

  if (!brand) {
    return <div>Loading...</div>;
  }

  return (
    <Container size="sm">
      <h1>Brand Update</h1>
      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}
      <TextInput
        label="Brand Name"
        name="brandName"
        value={brand.brandName || ""}
        onChange={handleInputChange}
      />

      <Button mt="md" onClick={handleUpdate}>
        {id ? "Update" : "Create"}
      </Button>
    </Container>
  );
}

export default UpdateBrandPage;
