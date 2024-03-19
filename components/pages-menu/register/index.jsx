"use client"
 
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function Index() {

  const { isSignedIn, user, isLoaded } = useUser();

  //auto redirect to dashboard after login
  useEffect(() => {
    if (user?.id) {
      redirect('/dashboard/my-profile');
    }else{
      redirect('/signin');
    }  
  }, [])

  return (
    // <>
    //   <Header />
    //   {/* <!--End Main Header -->  */}

    //   <MobileMenu />
    //   {/* End MobileMenu */}

    //   <div className="login-section">
    //     <div
    //       className="image-layer"
    //       style={{ backgroundImage: "url(/images/background/10.jpg)" }}
    //     ></div>
    //     <div className="outer-box">
    //       {/* <!-- Login Form --> */}
    //       <div className="login-form default-form">
    //         <Register2 />
    //       </div>
    //       {/* <!--End Login Form --> */}
    //     </div>
    //   </div>
    //   {/* <!-- End Info Section --> */} 
    // </> 
    <>
    </>
  );
};
 
