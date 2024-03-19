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
      className="offcanvas offcanvas_job_detail offcanvas-end mobile_menu-contnet "
      tabIndex="-1"
      id={`offcanvasMenuJobDetails${item?.id}`}
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}


      <Sidebar>
        <div className="job-block px-3">
          <div className="inner-box mb-3">
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

          <div
            style={{
              width: "100%",
            }}

            className="job-detail mb-3"
          >

            <h4 className="mb-3">
              Job Description
            </h4>
            <p>{item.description}</p>

            <h4>
              Key Responsibilities
            </h4>
            <ul className="list-style-three"><li>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</li><li>Work with BAs, product managers and tech teams to lead the Product Design</li><li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li><li>Accurately estimate design tickets during planning sessions.</li><li>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</li><li>Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.</li><li>Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel</li><li>Present your work to the wider business at Show &amp; Tell sessions.</li></ul>



          </div>


        </div>


        <div className="  jobDetailsBtn "

        >
          <button className=" btn-style-one mm-listitem__text">
            Accept
          </button>

          <button className="theme-btn btn-style-three call-modal">
            Decline
          </button>

        </div>

        <div className="  jobDetailsBtn opacity-0 d-md-none"

        >
          <button className=" btn-style-one mm-listitem__text">
            Accept
          </button>

          <button className="theme-btn btn-style-three call-modal">
            Decline
          </button>

        </div>

      </Sidebar>


    </div>
  );
};

export default Index;