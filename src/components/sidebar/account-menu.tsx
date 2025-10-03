"use client"

import { cn } from "@/lib/utils"
import { Settings, LogOut } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export default function AccountMenu({ visible }: { visible: boolean }) {
    const router = useRouter()

    const logOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/")
                }
            }
        })
    }

    return (
        <div className={cn("overflow-hidden transition-all duration-200 ease-in-out", visible ? "max-h-30" : "max-h-0")}>
            <div 
                className="flex space-y-2 mt-2 bg-secondary p-2 rounded-lg justify-start items-center hover:bg-secondary/60 hover:cursor-pointer"
            >
                <Settings className="h-5 w-5 mr-2 text-muted-foreground" />
                Settings
            </div>
            <div 
                className="flex space-y-2 mt-2 bg-secondary text-destructive p-2 rounded-lg justify-start items-center hover:bg-secondary/60 hover:cursor-pointer"
                onClick={logOut}
            >
                <LogOut className="h-5 w-5 mr-2" />
                Log Out
            </div>
        </div>
    )
}