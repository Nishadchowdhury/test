import dynamic from "next/dynamic";

import RegisterForm from "@/components/pages-menu/register";

export const metadata = {
  title: 'Register || RemoteCoded - Job Borad React NextJS Template',
  description:
    'RemoteCoded - Job Borad React NextJS Template',
  
}

const index = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
