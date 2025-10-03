import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader>Header</SidebarHeader>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
    )
}