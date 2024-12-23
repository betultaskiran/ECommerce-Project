import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Group,
  Container,
  Flex,
  Notification,
  Image,
} from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";
import { useNavigate } from "react-router-dom";

function ListItemsCategories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Verileri API'den çekme
  const fetchCategories = async () => {
    try {
      const response = await axiosClient.get("/api/category");
      setCategories(response.data.response); // Veriyi state'e yükle
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Ürünler alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const handleCreate = () => {
    navigate("/admin/update-category");
  };

  // Ürünü silme işlemi
  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(`/api/category/delete/${id}`); // Use template literals with backticks
      setCategories(categories.filter((category) => category._id !== id)); // Update state
    } catch (err) {
      console.error("Error deleting category:", err);
      setError("Ürün silinirken bir hata oluştu.");
    }
  };

  // Ürünü güncelleme için yönlendirme (dummy işlem)
  const handleUpdate = (id) => {
    // Güncelleme sayfasına yönlendirme işlemi yapılabilir
    navigate(`/admin/update-category/${id}`); // Eğer güncelleme sayfası varsa
  };

  return (
    <Container size="lg">
      <Flex justify={"space-between"} align={"center"} pb={20}>
        <h1 style={{ margin: 0 }}>All Category List</h1>
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
          {categories.map((category) => (
            <tr key={category._id}>
              <td style={{}}>{category.categoryName}</td>
              <td style={{ textAlign: "center", width: "200px" }}>
                <Group spacing="xs" position="center">
                  <Button
                    size="xs"
                    color="blue"
                    onClick={() => handleUpdate(category._id)}
                  >
                    Update
                  </Button>
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => handleDelete(category._id)}
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
export default ListItemsCategories;
