import { SignIn } from "@clerk/nextjs"; 

export default function Page() {
    return <>

        <div className=" flexC vh-100 flex-column poppins-semibold" >
            <SignIn /> 
        </div>
    </>;
}