import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
    return <div className=" flexC vh-100 flex-column " >
        <SignUp />
        <h6 className="mt-3 ">Or go to <Link href={'/'} >Home<h5 className="d-inline" ><span class=" la la-arrow-right"></span></h5> </Link> </h6>
    </div>
}