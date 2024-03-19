import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
    return <div className=" flexC vh-100 flex-column poppins-semibold" >
        <SignUp /> 
    </div>
}