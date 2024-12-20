// AddItemsPage.jsx
/*import { Button, Group, TextInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

function AddItemsPage() {
  const form = useForm({
    initialValues: {
      productName: "",
      description: "",
      price: "",
      image: "",
    },

    validationRules: {
      productName: (value) => value.trim() !== "",
      description: (value) => value.trim() !== "",
      price: (value) => !isNaN(value) && parseFloat(value) > 0,
      image: (value) => value.trim() !== "",
    },
  });

  const handleSubmit = (values) => {
    console.log("Product Data Submitted:", values);
    // Here you would typically send the form data to your backend
  };

  return (
    <Stack spacing="md">
      <TextInput
        label="Product Name"
        placeholder="Enter product name"
        {...form.getInputProps("productName")}
      />
      <TextInput
        label="Description"
        placeholder="Enter product description"
        {...form.getInputProps("description")}
      />
      <TextInput
        label="Price"
        placeholder="Enter product price"
        {...form.getInputProps("price")}
      />
      <TextInput
        label="Image URL"
        placeholder="Enter image URL"
        {...form.getInputProps("image")}
      />
      <Button onClick={form.onSubmit(handleSubmit)}>Add Product</Button>
    </Stack>
  );
}

export default AddItemsPage;*/

/*import { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  FileInput,
  Group,
  Container,
  Notification,
} from "@mantine/core";
import { axiosClient } from "../../components/axiosClient";

function AddItemsPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axiosClient.post("api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Product added:", response.data);
      setSuccess(true);
    } catch (err) {
      console.error("Error adding product:", err);
      setError(err.response?.data?.message || "Bir hata oluştu.");
    }
  };

  return (
    <Container size="sm">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Ürün İsmi"
          placeholder="Ürün ismini giriniz"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <TextInput
          label="Açıklama"
          placeholder="Ürün açıklamasını giriniz"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mt="md"
        />
        <NumberInput
          label="Fiyat"
          placeholder="Ürün fiyatını giriniz"
          value={price}
          onChange={setPrice}
          required
          mt="md"
        />
        <NumberInput
          label="Stok Miktarı"
          placeholder="Ürün stok miktarını giriniz"
          value={stock}
          onChange={setStock}
          required
          mt="md"
        />
        <FileInput
          label="Ürün Resmi"
          placeholder="Ürün resmi seçiniz"
          value={image}
          onChange={setImage}
          required
          mt="md"
        />
        <Group position="center" mt="xl">
          <Button type="submit">Ürün Ekle</Button>
        </Group>
      </form>

      {success && (
        <Notification
          color="green"
          title="Başarılı!"
          onClose={() => setSuccess(false)}
        >
          Ürün başarıyla eklendi!
        </Notification>
      )}

      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}
    </Container>
  );
}

export default AddItemsPage;*/

/*import { useState } from "react"; //çalışan kod
import {
  TextInput,
  NumberInput,
  Button,
  Group,
  Container,
  Notification,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../components/axiosClient";

function AddItemsPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form verilerini JSON olarak backend'e gönderiyoruz
    const productData = {
      productName,
      description,
      price,
      stock,
      /*category,
      image,
    };

    try {
      const response = await axiosClient.post(
        "api/product/create",
        productData
      );
      console.log("Product added:", response.data);
      setSuccess(true);
      // Başarılı işlemden sonra kullanıcıyı yönlendiriyoruz
      setTimeout(() => {
        navigate("/products"); // Ürünler sayfasına yönlendirme    //YÖNLENDİRME NEDEN OLMUYOR????
      }, 1500); // 1.5 saniye sonra yönlendirme
    } catch (err) {
      console.error("Error adding product:", err);
      setError(err.response?.data?.message || "Bir hata oluştu.");
    }
  };

  return (
    <Container size="sm">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Ürün İsmi"
          placeholder="Ürün ismini giriniz"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <TextInput
          label="Açıklama"
          placeholder="Ürün açıklamasını giriniz"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mt="md"
        />
        <NumberInput
          label="Fiyat"
          placeholder="Ürün fiyatını giriniz"
          value={price}
          onChange={setPrice}
          required
          mt="md"
        />
        <NumberInput
          label="Stok Miktarı"
          placeholder="Ürün stok miktarını giriniz"
          value={stock}
          onChange={setStock}
          required
          mt="md"
        />
        {/*<TextInput
          label="Kategori"
          placeholder="Ürün kategorisini giriniz"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          mt="md"
        />
        <FileInput
          label="Ürün Resmi"
          placeholder="Ürün resmi seçiniz"
          value={image}
          onChange={setImage}
          mt="md"
        />}

        <Group position="center" mt="xl">
          <Button type="submit">Ürün Ekle</Button>
        </Group>
      </form>

      {success && (
        <Notification
          color="green"
          title="Başarılı!"
          onClose={() => setSuccess(false)}
        >
          Ürün başarıyla eklendi!
        </Notification>
      )}

      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}
    </Container>
  );
}

export default AddItemsPage;*/
import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  Group,
  Container,
  Notification,
  FileInput,
} from "@mantine/core";
import { uploadClient } from "../../components/axiosClient";

function AddItemsPage() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // FormData oluştur
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      if (image) {
        formData.append("image", image);
      }
      // FormData içindeki öğeleri foreach ile döküm
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // uploadClient ile isteği gönder
      const response = await uploadClient.post("/api/product/create", formData);
      console.log("Product added:", response.data);
      setSuccess(true);

      // Yönlendirme işlemi
      // setTimeout(() => {
      //   window.location.href = "/products"; // Ürünler sayfasına yönlendir
      // }, 1500);
    } catch (err) {
      console.error("Error adding product:", err);
      setError(err.response?.data?.message || "Bir hata oluştu.");
    }
  };

  return (
    <Container size="sm">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Ürün İsmi"
          placeholder="Ürün ismini giriniz"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <TextInput
          label="Açıklama"
          placeholder="Ürün açıklamasını giriniz"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mt="md"
        />
        <NumberInput
          label="Fiyat"
          placeholder="Ürün fiyatını giriniz"
          value={price}
          onChange={setPrice}
          required
          mt="md"
        />
        <NumberInput
          label="Stok Miktarı"
          placeholder="Ürün stok miktarını giriniz"
          value={stock}
          onChange={setStock}
          required
          mt="md"
        />
        <FileInput
          label="Ürün Resmi"
          placeholder="Ürün resmi seçiniz"
          onChange={(file) => setImage(file)}
          accept="image/*"
          required
          mt="md"
        />
        <Group position="center" mt="xl">
          <Button type="submit">Ürün Ekle</Button>
        </Group>
      </form>

      {success && (
        <Notification
          color="green"
          title="Başarılı!"
          onClose={() => setSuccess(false)}
        >
          Ürün başarıyla eklendi!
        </Notification>
      )}

      {error && (
        <Notification color="red" title="Hata!" onClose={() => setError("")}>
          {error}
        </Notification>
      )}
    </Container>
  );
}

export default AddItemsPage;
