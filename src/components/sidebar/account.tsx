"use client"

import { useState } from "react"

import { authClient } from "@/lib/auth-client"
import { ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { cn } from "@/lib/utils"
import AccountMenu from "./account-menu"

export default function Account() {
    const [collapsed, setCollapsed] = useState(true)

    const { data: session } = authClient.useSession()

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const ProfileImage = () => {
        return (
            <Avatar className="rounded-lg h-10 w-10">
                <AvatarImage src={session?.user.image || undefined} />
                <AvatarFallback className="rounded-lg h-10 w-10">{session?.user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
        )
    }

    return (
        <div className="p-2">
            <div 
                className="flex items-center space-x-3 p-2 hover:bg-accent hover:rounded-2xl hover:cursor-pointer" 
                onClick={toggleCollapsed}
            >
                <div className="aspect-square flex items-center">
                    <ProfileImage />
                </div>
                <div className="flex flex-col">
                    <h3>{session?.user.name}</h3>
                    <span className="text-muted-foreground text-sm">{session?.user.email}</span>
                </div>
                <ChevronRight 
                    className={
                        cn("ml-auto h-5 w-5 text-muted-foreground transition-transform duration-200 ease-in-out",
                            collapsed ? "" : "rotate-90"
                        )
                    }
                />
            </div>
            <AccountMenu visible={!collapsed} />
        </div>
    )
}