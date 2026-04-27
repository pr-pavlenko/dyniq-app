import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import LeftSidebar from "./leftsidebar";
import Footer from "./footer";
import Header from "./header";
import { Outlet, useLocation } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";

const Layout = () => {
    useScrollToTop()
    const location = useLocation()
    const isChatbotPage = location.pathname === "/chatbot" || location.pathname.startsWith("/chatbot/")

    return (
        <SidebarProvider>
            <LeftSidebar />
            <SidebarInset>
                <Header />
                <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
                    <div className="p-5">
                        <Outlet />
                    </div>
                    {!isChatbotPage && <Footer />}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout;
