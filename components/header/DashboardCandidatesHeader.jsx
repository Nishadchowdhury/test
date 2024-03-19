'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import MenuToggler from "../dashboard-pages/MenuToggler";
import { useSelector } from "react-redux";

const DashboardCandidatesHeader = () => {
    const { menu } = useSelector((state) => state.toggle);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-shaddow py-2 ${navbar ? "fixed-header " : ""
                }`}
        >
            <div className="container-fluid">
                {/* <!-- Main box --> */}
                <div className="main-box ">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">

                            <div className=" d-md-none  ">
                                <Link href="/">
                                    <Image
                                        alt="brand"
                                        src="/images/mini-logo.png"
                                        width={154}
                                        height={50}
                                        priority
                                        style={{
                                            height: "40px",
                                            width: "40px",
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* End .logo-box */}


                        <div className={"baseTransition " + (menu ? "slideOpen " : " slideClose ")}>
                            <div className="ms-2 d-none d-lg-block"> <MenuToggler /> </div>
                        </div>

                        {/* <HeaderNavContent /> */}
                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}

                    <div className="outer-box">
                       
                        {/* wishlisted menu */}
                        <div className={"baseTransition me-2 opacity-100" + (menu ? "slideOpen opacity-0" : " slideClose ")}>
                            <div className="ms-2 d-block d-lg-none"> <MenuToggler /> </div>
                        </div>

                        <Link href={'/dashboard/interview-invites'}>
                            <button className="menu-btn">
                                <span className="icon la la-bell"></span>
                            </button>
                        </Link>
                        {/* End notification-icon */}

                        {/* <!-- Dashboard Option --> */}
                        <div className="dropdown dashboard-option ">
                          

                            <UserButton />
                            
                        </div>
                        {/* End dropdown */}
                    </div>
                    {/* End outer-box */}
                </div>
            </div>
        </header>
    );
};

export default DashboardCandidatesHeader