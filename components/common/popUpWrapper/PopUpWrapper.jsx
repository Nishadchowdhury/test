import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader"
import LoginPopup from "../form/login/LoginPopup"
import MobileMenu from "@/components/header/MobileMenu"
import DashboardCandidatesSidebar from "@/components/header/DashboardCandidatesSidebar"

function PopUpWrapper() {
    return (
        <>
            {/* <!-- Header Span for hight --> */}

            <LoginPopup />
            {/* End Login Popup Modal */}

            <DashboardCandidatesHeader />
            {/* End Header */}

            {/* <MobileMenu /> */}
            {/* End MobileMenu */}

            <DashboardCandidatesSidebar />
            {/* <!-- End Candidates Sidebar Menu --> */}

        </>
    )
}
export default PopUpWrapper