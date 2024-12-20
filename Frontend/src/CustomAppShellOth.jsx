// CustomAppShellOth.jsx
import { AppShell, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { HeaderMegaMenu } from "./components/Header/HeaderMegaMenu";

import styles from "./components/HomePage/HomePage.module.css";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";

function CustomAppShellOth() {
  const [opened] = useDisclosure();

  return (
    <AppShell
      header={{ height: 0 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>{/* Header content (if needed) */}</AppShell.Header>
      <AppShell.Navbar p="md">
        <AdminNavbar /> {/* AdminNavbar'ı navbar içinde çağır */}
      </AppShell.Navbar>

      <AppShell.Main>
        <div className={styles.pageContainer}>
          <Outlet></Outlet>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default CustomAppShellOth;
