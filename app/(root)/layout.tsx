import LeftSidebarDesktop from "@/components/navigation/left-sidebar/desktop";
import NavBar from "@/components/navigation/nav-bar"

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col h-full">
            <NavBar />
            <div className="flex h-full">
                <LeftSidebarDesktop />
                {children}
            </div>

        </div>
    )
}

export default layout
