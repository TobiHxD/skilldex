"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function SettingsPage() {
    const { data: session } = authClient.useSession();

    return (
        <div className="min-h-screen px-4 pt-8 md:w-4/5 lg:w-3/5 mx-auto">
            <h1 className="text-2xl font-medium mb-4">Account</h1>

            <div className="mb-4 p-4 border rounded-lg bg-secondary flex flex-col md:flex-row">
                <div className="flex items-center">
                    <div className="w-12 aspect-square mr-4">
                        <Avatar className="rounded-sm w-full h-full">
                        <AvatarImage src={session?.user.image || undefined} />
                        <AvatarFallback className="bg-blue-500 rounded-sm">
                            {session?.user.name?.charAt(0)}
                        </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-1">{session?.user.name}</h2>
                        <p className="text-sm text-muted-foreground">{session?.user.email}</p>
                    </div>
                </div>
                <div className="ml-auto flex items-center mt-4 md:mt-0">
                    <Button className="mx-1" variant="default">Change Picture</Button>
                    <Button className="mx-1" variant="outline">Remove Picture</Button>
                </div>
            </div>

        </div>
    )
}