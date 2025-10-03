import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";
import Account from "./account";

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
            </SidebarContent>
            <SidebarFooter>
                <Account />
            </SidebarFooter>
        </Sidebar>
    )
}