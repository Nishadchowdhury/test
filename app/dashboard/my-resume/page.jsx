import dynamic from "next/dynamic";
import MyResume from "@/components/dashboard-pages/candidates-dashboard/my-resume";
import { redirect } from "next/navigation";

export const metadata = {
  title: "My Resume | RemoteCoded",
  description: "",
};

const index = () => {



  if (typeof window === 'undefined') {
    redirect('/dashboard/my-profile');
    return null;
  }

  // return null;

  return (
    <>
      <MyResume />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
