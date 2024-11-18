import LeftSidebarDesktop from "@/components/navigation/left-sidebar/desktop";
import NavBar from "@/components/navigation/nav-bar"
import RightSidebar from "@/components/navigation/right-sidebar";

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col min-h-full">
            <NavBar />
            <div className="flex min-h-full w-screen">
                <LeftSidebarDesktop />
                <div className="flex-grow px-9 mt-8">
                    {children}
                </div>
                <RightSidebar />
            </div>

        </div>
    )
}

export default layout
