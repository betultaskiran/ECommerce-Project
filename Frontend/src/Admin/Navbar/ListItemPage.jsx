import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Group,
  Container,
  Notification,
  Flex,
  Image,
} from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";
import { useNavigate } from "react-router-dom";

function ListItemsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Verileri API'den çekme
  const fetchProducts = async () => {
    try {
      const response = await axiosClient.get("/api/product");
      setProducts(response.data.response); // Veriyi state'e yükle
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Ürünler alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Ürünü silme işlemi
  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(`/api/product/delete/${id}`); // Use template literals with backticks
      setProducts(products.filter((product) => product._id !== id)); // Update state
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Ürün silinirken bir hata oluştu.");
    }
  };
  const handleCreate = () => {
    navigate("/admin/add-items");
  };
  // Ürünü güncelleme için yönlendirme (dummy işlem)
  const handleUpdate = (id) => {
    // Güncelleme sayfasına yönlendirme işlemi yapılabilir
    console.log("Update product with id:", id);
    navigate(`/admin/update-items/${id}`); // Eğer güncelleme sayfası varsa
  };

  return (
    <Container size="lg">
      <Flex justify={"space-between"} align={"center"} pb={20}>
        <h1 style={{ margin: 0 }}>All Product List</h1>
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
            <th style={{ width: "5%", textAlign: "center" }}>Image</th>
            <th style={{ width: "30%", textAlign: "center" }}>Name</th>
            <th style={{ width: "15%", textAlign: "center" }}>Category</th>
            <th style={{ width: "20%", textAlign: "center" }}>Price</th>
            <th style={{ width: "30%", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={{ textAlign: "center" }}>
                <Image
                  src={
                    product.image
                      ? "http://localhost:3000" + product.image
                      : "https://via.placeholder.com/50"
                  }
                  alt={product.productName}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </td>
              <td style={{ textAlign: "center" }}>{product.productName}</td>
              <td style={{ textAlign: "center" }}>{product.categoryName}</td>
              <td style={{ textAlign: "center" }}>${product.price}</td>
              <td style={{ textAlign: "center" }}>
                <Group spacing="xs" position="center">
                  <Button
                    size="xs"
                    color="blue"
                    onClick={() => handleUpdate(product._id)}
                  >
                    Update
                  </Button>
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => handleDelete(product._id)}
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
export default ListItemsPage;
/*import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Group,
  Container,
  Notification,
  Image,
} from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";

function ListItemsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Verileri API'den çekme
  const fetchProducts = async () => {
    try {
      const response = await axiosClient.get("/api/product");
      setProducts(response.data.response); // Veriyi state'e yükle
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Ürünler alınırken bir hata oluştu.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Ürünü silme işlemi
  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(/api/product/delete/${id});
      setProducts(products.filter((product) => product._id !== id)); // State'i güncelle
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Ürün silinirken bir hata oluştu.");
    }
  };

  // Ürünü güncelleme için yönlendirme (dummy işlem)
  const handleUpdate = (id) => {
    // Güncelleme sayfasına yönlendirme işlemi yapılabilir
    console.log("Update product with id:", id);
    // navigate(/update/${id}); // Eğer güncelleme sayfası varsa
  };

  return (
    <Container size="lg">
      <h1>All Products List</h1>

      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}

      <Table highlightOnHover>
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: "center" }}>Image</th>
            <th style={{ width: "30%", textAlign: "center" }}>Name</th>
            <th style={{ width: "20%", textAlign: "center" }}>Category</th>
            <th style={{ width: "20%", textAlign: "center" }}>Price</th>
            <th style={{ width: "20%", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={{ textAlign: "center" }}>
                <Image
                  src={product.image || "https://via.placeholder.com/50"}
                  alt={product.productName}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
              </td>
              <td style={{ textAlign: "center" }}>{product.productName}</td>
              <td style={{ textAlign: "center" }}>{product.category}</td>
              <td style={{ textAlign: "center" }}>${product.price}</td>
              <td style={{ textAlign: "center" }}>
                <Group spacing="xs" position="center">
                  <Button
                    size="xs"
                    color="blue"
                    onClick={() => handleUpdate(product._id)}
                  >
                    Update
                  </Button>
                  <Button
                    size="xs"
                    color="red"
                    onClick={() => handleDelete(product._id)}
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
}*/
