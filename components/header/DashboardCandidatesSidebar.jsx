'use client'

import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import candidatesuData from "../../data/candidatesMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import Image from "next/image";

const DashboardCandidatesSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;

  const dispatch = useDispatch();

  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };


  function handleMenu() {
    if (menu) {
      menuToggleHandler()
    } else {
      return
    }
  }

  return (
    <div className={`user-sidebar  ${menu ? "sidebar_open " : ""}`}
      style={{
        width: !menu && '100px',
      }}
    >
      {/* Start sidebar close icon */}
      <div className="logo-box m-3 d-flex d-lg-none justify-content-between">
        <div className="logo">
          <Link href="/">
            <Image
              alt="brand"
              src="/images/logo.png"
              width={154}
              height={50}
              priority
            />
          </Link>
        </div>


        {/* 
        <div className=" d-inline-block ">
          <div className="fix-icon" onClick={menuToggleHandler}>
            <span className="flaticon-arrows-2 "></span>
          </div>
        </div> */}


        {<div className="theme-btn toggle-filters  d-md-none"
          onClick={menuToggleHandler}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>}

      </div>
      {/* End sidebar close icon */}


      <div className={`sidebar-inner  ${!menu && " sidebar_padding"} `}>
        <ul className="navigation ">

          {/* collapsible sidebar */}

          <div className="logo-box mb-3 d-none d-lg-flex justify-content-between">
            <div className={`logo   baseTransition ${!menu ? " opacity-0 w-0" : "opacity-100 me-3"} `}>
              <Link href="/">
                <Image
                  alt="brand"
                  src="/images/logo.png"
                  width={154}
                  height={50}
                  priority
                />
              </Link>
            </div>

            <div className={`logo  baseTransition ${!menu ? " opacity-100 " : "opacity-0 w-0"} `}>
              <Link href="/">
                <Image
                  alt="brand"
                  src="/images/mini-logo.png"
                  width={154}
                  height={50}
                  priority
                />
              </Link>





            </div>

          </div>
          {/* Routes */}



          {candidatesuData.map((item) => (
            <li
              onClick={handleMenu}
              className={` ${isActiveLink(item.routePath, usePathname()) ? "active" : ""
                } mb-1 `}
              key={item.id}
            >
              <Link className={!menu && "w-fit"} href={item.routePath}>
                <i className={`la ${item.icon} ${menu && "me-3"} `}></i> <span className={`baseTransition ${!menu && "w-0"}`} >{menu && item.name}</span>
              </Link>
            </li>
          ))}


        </ul>
        {/* End navigation */}

        {<div className={`skills-percentage baseTransition `}

          style={{
            scale: menu ? 1 : 0,
            fontSize: !menu && 0
          }}>

          <h4>Skills Percentage</h4>
          <p>
            `Put value for <strong>Cover Image</strong> field to increase your
            skill up to <strong>85%</strong>`
          </p>
          <div style={{ width: 200, height: 200, margin: "auto" }}>
            <CircularProgressbar
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#16a34a",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
              value={percentage}
              text={`${percentage}%`}
            />
          </div>{" "}
          {/* <!-- Pie Graph --> */}
        </div>}

      </div>
    </div>
  );
};

export default DashboardCandidatesSidebar;
