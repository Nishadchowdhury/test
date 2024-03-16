"use client";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";


const Index = ({ data }) => {

  const router = useRouter()

  return (
    <div
      className="offcanvas offcanvas-end mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenuJobDetails"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}


      <Sidebar>
        <Menu>
          {data?.id}
        </Menu>
      </Sidebar>


      <SidebarFooter />
    </div>
  );
};

export default Index;