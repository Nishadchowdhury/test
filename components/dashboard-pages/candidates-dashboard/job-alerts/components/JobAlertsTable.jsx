import Link from "next/link.js";
import jobs from "../../../../../data/job-featured.js";
import Image from "next/image.js";
import JobDetailsOffcanvas from "../../../../../components/job-description-sidebar"

const JobAlertsTable = () => {
  return (
    <div className="tabs-box">


      <div className="widget-title">
        <h4>My Applied Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Criteria</th>
                  <th>Created</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.slice(4, 8).map((item) => (
                  <tr key={item.id}>

                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <Image
                                width={50}
                                height={49}
                                src={item.logo}
                                alt="logo"
                              />
                              <JobDetailsOffcanvas item={item} />
                            </span>
                            <h4>
                              <Link href={`/job/${item.id}`}>
                                {item.jobTitle}
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
                    </td>
                    <td>Human Resources, Junior</td>
                    <td>Nov 12, 2021 </td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">

                          <li>
                            <button data-text="View Aplication">

                              <a
                                href="#"
                                className="mobile-nav-toggler"
                                data-bs-toggle="offcanvas"
                                data-bs-target={`#offcanvasMenuJobDetails${item.id}`}
                              >
                                <span className="la la-eye"></span>
                              </a>
                            </button>
                          </li>

                          <li>
                            <button data-text="Accept">
                              <span className="la la-check"></span>
                            </button>
                          </li>

                          <li>
                            <button data-text="Decline">


                              <span className="la la-times-circle"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobAlertsTable;
