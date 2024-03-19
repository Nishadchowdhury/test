
import Resume from "./components";

const index = () => {
  return (


    <div className="row">
      <div className="col-lg-12">
        <div className="ls-widget">
          <div className="tabs-box"> 
            {/* End widget-title */}

            <div className="widget-content">
              <Resume />
            </div>
            {/* End widget-content */}
          </div>
        </div>
        {/* End ls-widget */}
      </div>
    </div>

  );
};

export default index;
