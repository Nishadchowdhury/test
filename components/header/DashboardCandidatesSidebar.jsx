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



        {/* <div className=" d-inline-block ">
          <div className="fix-icon" onClick={menuToggleHandler}>
            <span className="flaticon-arrows-2 "></span>
          </div>
        </div> */}

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
