"use client"
import CopyrightFooter from "../../CopyrightFooter";
import Form from "./components/Form";
import MenuToggler from "../../MenuToggler";
import PopUpWrapper from "../../../common/popUpWrapper/PopUpWrapper";
import { useSelector } from "react-redux";

const index = () => {
  const { menu } = useSelector((state) => state.toggle);

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <PopUpWrapper />

      {/* <!-- Dashboard --> */}
      <section className={` ${menu ? 'slideOpen' : 'slideClose '} user-dashboard baseTransition`}

      >
        <div className="dashboard-outer">

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="ls-widget">
            <div className="widget-title">
              <h4>Change Password</h4>
            </div>

            <div className="widget-content">
              <Form />
            </div>
          </div>
          {/* <!-- Ls widget --> */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
