import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomAppShell from "./CustomAppShell.jsx";
import Home from "./pages/Home.jsx";
import "@mantine/core/styles.css";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import ProductsPage from "./components/ProductsPage/ProductsPage.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import CustomAppShellOth from "./CustomAppShellOth.jsx";
import AddItemsPage from "./Admin/Navbar/AddItemsPage.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import UpdateItemPage from "./Admin/Navbar/UpdateItemPage.jsx";
import ListItemsPage from "./Admin/Navbar/ListItemPage.jsx";
import ListItemsCategories from "./Admin/Navbar/ListCategoryPage.jsx";
import ListItemsBrands from "./Admin/Navbar/ListBrandPage.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import UpdateCategory from "./Admin/Navbar/UpdateCategory.jsx";
import UpdateBrands from "./Admin/Navbar/UpdateBrands.jsx";
import { createContext, useEffect, useState } from "react";
import MyCard from "./components/MyCard/MyCard.jsx";
export const Context = createContext();
const ContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    console.log(basket);
  }, [basket]);
  return (
    <Context.Provider value={{ search, setSearch, basket, setBasket }}>
      {props.children}
    </Context.Provider>
  );
};
export default function App() {
  return (
    <ContextProvider>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<CustomAppShell></CustomAppShell>}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>
              <Route path="/product/:id" element={<ProductDetail />}></Route>
              <Route path="/my-cart" element={<MyCard />}></Route>
            </Route>
            <Route
              path="/admin"
              element={<CustomAppShellOth></CustomAppShellOth>}
            >
              <Route path="add-items" element={<AddItemsPage />}></Route>
              <Route path="list-items" element={<ListItemsPage />}></Route>
              <Route
                path="list-categories"
                element={<ListItemsCategories />}
              ></Route>
              <Route
                path="update-items/:id"
                element={<UpdateItemPage />}
              ></Route>
              <Route
                path="update-category/:id"
                element={<UpdateCategory />}
              ></Route>
              <Route
                path="update-category"
                element={<UpdateCategory />}
              ></Route>
              <Route path="list-brands" element={<ListItemsBrands />}></Route>
              <Route
                path="update-items/:id"
                element={<UpdateItemPage />}
              ></Route>
              <Route path="update-brand" element={<UpdateBrands />}></Route>
              <Route path="update-brand/:id" element={<UpdateBrands />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ContextProvider>
  );
}
