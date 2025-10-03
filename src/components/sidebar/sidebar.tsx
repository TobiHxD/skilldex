import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import Account from "./account";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AppSidebar() {
    const isMobile = useIsMobile();

    return (
        <Sidebar>
            <SidebarContent>
                {isMobile && <SidebarTrigger />}
            </SidebarContent>
            <SidebarFooter>
                <Account />
            </SidebarFooter>
        </Sidebar>
    )
}