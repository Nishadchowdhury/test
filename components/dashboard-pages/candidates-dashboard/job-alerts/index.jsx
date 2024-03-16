"use client"
import CopyrightFooter from "../../CopyrightFooter";
import JobAlertsTable from "./components/JobAlertsTable";
import MenuToggler from "../../MenuToggler";
import { useSelector } from "react-redux";
import PopUpWrapper from "../../../common/popUpWrapper/PopUpWrapper";


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

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobAlertsTable />
              </div>
            </div>
          </div>
          {/* End .row */}
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
