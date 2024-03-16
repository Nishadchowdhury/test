import dynamic from "next/dynamic";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found | RemoteCoded",
  description: "RemoteCoded",
};

const index = () => {
  return (
    <>
      <div
        className="error-page-wrapper "
        style={{
          backgroundImage: `url(/images/404.jpg)`,
        }}
        data-aos="fade"
      >
        <div className="content">
          <h1>404!</h1>
          <p>The page you are looking for could not be found.</p>

          <Link className="theme-btn btn-style-three call-modal" href="/">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
