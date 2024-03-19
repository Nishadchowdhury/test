
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import FormContent2 from "./FormContent2";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { redirect } from "next/navigation";


const Register2 = () => {

  const { isSignedIn, user, isLoaded } = useUser();

  //auto redirect to dashboard after login
  if (user?.id) {
    redirect('/dashboard/my-profile');
  }

  return (
    <div className="form-inner">
      <h3>Login with RemoteCoded Account To Get Full Accessibility.</h3>
      {/* {displayName} */}
      <Tabs>
        <div className="form-group register-dual">
          <div className="btn-box row">
            <div className="col-lg-6 col-md-12">
              <Link href={"/sign-in"}>
                <button className="theme-btn btn-style-four">
                  <i className="la la-user"></i> Sign In
                </button>
              </Link>
            </div>

            <div className="col-lg-6 col-md-12">
              <Link href={"/sign-up"}>
                <button className="theme-btn btn-style-four">
                  <i class="la la-user-plus"></i> Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>

      </Tabs>

      {/* End form-group */}


      {/* End bottom-box LoginWithSocial */}
    </div>
  );

  return (
    <div className="form-inner">
      <h3>Create a Free RemoteCoded Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Candidate
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <FormContent2 />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <FormContent2 />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>

      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link href="/login" className="call-modal login">
            LogIn
          </Link>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register2;
