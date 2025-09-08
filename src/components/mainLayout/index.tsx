import { Outlet } from "react-router-dom";

import ContentsLayout from "../../styles/ContentsLayout";
import SidebarMenu from "./customDrawer";

export default function MainLayout() {
  return (
    <>
      <SidebarMenu />
      <ContentsLayout>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Outlet />
        </div>
      </ContentsLayout>
    </>
  );
}
