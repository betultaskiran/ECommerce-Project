import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Group,
  Container,
  Notification,
  Flex,
} from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";
import { useNavigate } from "react-router-dom";

function ListItemsBrands() {
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Verileri API'den çekme
  const fetchBrands = async () => {
    try {
      const response = await axiosClient.get("/api/brand");
      setBrands(response.data.response); // Veriyi state'e yükle
    } catch (err) {
      console.error("Error fetching brands:", err);
      setError("Markalar alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);
  const handleCreate = () => {
    navigate("/admin/update-brand");
  };
  // Markayı silme işlemi
  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(`/api/brand/delete/${id}`); // Markayı sil
      setBrands(brands.filter((brand) => brand._id !== id)); // State güncelle
    } catch (err) {
      console.error("Error deleting brand:", err);
      setError("Marka silinirken bir hata oluştu.");
    }
  };

  // Markayı güncelleme için yönlendirme
  const handleUpdate = (id) => {
    navigate(`/admin/update-brand/${id}`); // Markayı güncelleme sayfasına yönlendir
  };

  return (
    <Container size="lg">
      <Flex justify={"space-between"} align={"center"} pb={20}>
        <h1 style={{ margin: 0 }}>All Brands List</h1>
        <Button size="xs" color="blue" onClick={() => handleCreate()}>
          Create
        </Button>
      </Flex>

      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}

      <Table highlightOnHover>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Name</th>
            <th style={{ width: "200px", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand._id}>
              <td>{brand.brandName}</td>
              <td style={{ textAlign: "center", width: "200px" }}>
                <Group spacing="xs" position="center">
                  <Button
                    size="xs"
                    color="blue"
                    onClick={() => handleUpdate(brand._id)}
                  >
                    Update
                  </Button>
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => handleDelete(brand._id)}
                  >
                    Delete
                  </Button>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListItemsBrands;
