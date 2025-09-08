import { Outlet } from "react-router-dom";

import ContentsLayout from "../../styles/contentsLayout";
import SidebarMenu from "../sideBar";

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
