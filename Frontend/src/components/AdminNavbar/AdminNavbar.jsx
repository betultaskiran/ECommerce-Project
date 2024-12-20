// AdminNavbar.jsx
/*import { Button, Group, Flex } from "@mantine/core";
import { IconPlus, IconList, IconPackage } from "@tabler/icons-react"; // @tabler/icons'u doğrudan kullanın
import styles from "./AdminNavbar.module.css";

function AdminNavbar() {
  return (
    <Flex
      direction="column"
      gap={20}
      spacing="xl"
      className={styles.navbarGroup}
    >
      <Button
        leftSection={<IconPlus />}
        onClick={() => console.log("Add Items")}
      >
        Add Items
      </Button>
      <Button
        leftSection={<IconList />}
        onClick={() => console.log("List Items")}
      >
        List Items
      </Button>
      <Button
        leftSection={<IconPackage />}
        onClick={() => console.log("Orders")}
      >
        Orders
      </Button>
    </Flex>
  );
}

export default AdminNavbar;*/

import { Button, Flex } from "@mantine/core";
import { IconPlus, IconList, IconPackage } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom"; // useNavigate'i import edin
import styles from "./AdminNavbar.module.css";

function AdminNavbar() {
  const navigate = useNavigate(); // navigate hook'unu kullanın

  return (
    <Flex
      direction="column"
      gap={20}
      spacing="xl"
      className={styles.navbarGroup}
    >
      <Button
        leftSection={<IconPlus />}
        onClick={() => navigate("/admin/add-items")} // Yönlendirme işlemi
      >
        Add Items
      </Button>
      <Button
        leftSection={<IconList />}
        onClick={() => navigate("/admin/list-items")} // Yönlendirme işlemi
      >
        List Items
      </Button>
      <Button
        leftSection={<IconPackage />}
        onClick={() => navigate("/admin/orders")} // Yönlendirme işlemi
      >
        Orders
      </Button>
    </Flex>
  );
}

export default AdminNavbar;
