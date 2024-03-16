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
import Link from "next/link";
import Image from "next/image";


const Index = ({ item }) => {

  const router = useRouter()

  return (
    <div
      className="offcanvas offcanvas-end mobile_menu-contnet"
      tabIndex="-1"
      id={`offcanvasMenuJobDetails${item?.id}`}
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}


      <Sidebar>
          <div className="job-block px-3">
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <Image
                    width={50}
                    height={49}
                    src={item?.logo}
                    alt="logo"
                  />
                  
                </span>
                <h4>
                  <Link href={`/job/${item?.id}`}>
                    {item?.jobTitle}
                  </Link>
                </h4>
                <ul className="job-info">
                  <li>
                    <span className="icon flaticon-briefcase"></span>
                    Segment
                  </li>
                  <li>
                    <span className="icon flaticon-map-locator"></span>
                    London, UK
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </Sidebar>


      <SidebarFooter />
    </div>
  );
};

export default Index;