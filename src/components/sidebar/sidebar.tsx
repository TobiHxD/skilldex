import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import Account from "./account";
import { useIsMobile } from "@/hooks/use-mobile";
import { GitFork } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AppSidebar() {
    const router = useRouter();

    const isMobile = useIsMobile();

    return (
        <Sidebar>
            <SidebarContent>
                {isMobile && <SidebarTrigger />}

                <div 
                    className="flex m-3 p-3 rounded-lg justify-start items-center hover:bg-secondary/60 hover:cursor-pointer"
                    onClick={() => router.push('/app')}
                >
                    <GitFork className="h-5 w-5 mr-2 rotate-180" />
                    <span>Skills</span>
                </div>
            </SidebarContent>
            <SidebarFooter>
                <Account />
            </SidebarFooter>
        </Sidebar>
    )
}
