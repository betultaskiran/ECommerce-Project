import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Outlet } from "react-router-dom";
import { HeaderMegaMenu } from "./components/Header/HeaderMegaMenu";
import { FooterCentered } from "./components/Footer/FooterCentered";
import styles from "./components/HomePage/HomePage.module.css";
function CustomAppShell() {
  const [opened] = useDisclosure();

  return (
    <AppShell header={{ height: 80 }} padding="md">
      <AppShell.Header>
        <HeaderMegaMenu />
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
      <AppShell.Main px={0}>
        <div className={styles.pageContainer}>
          <Outlet></Outlet>
        </div>
      </AppShell.Main>

      <FooterCentered />
    </AppShell>
  );
}

export default CustomAppShell;
