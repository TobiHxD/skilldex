import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
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