import { authClient } from "@/lib/auth-client"
import { ChevronRight } from "lucide-react"

export default function Account() {
    const { data: session } = authClient.useSession()

    const getProfileImage = () => {
        if (session?.user.image) {
            return (
                <img
                    src={session.user.image}
                    alt="Profile"
                    className="h-10 w-10 rounded-xl"
                />
            )
        } else {
            return (
                <div className="h-10 w-10 rounded-xl bg-muted" />
            )
        }
    }

    return (
        <div className="p-2">
            <div className="flex items-center space-x-3 hover:bg-accent hover:rounded-2xl p-2">
                <div className="aspect-square flex items-center">
                    {getProfileImage()}
                </div>
                <div className="flex flex-col">
                    <h3>{session?.user.name}</h3>
                    <span className="text-muted-foreground text-sm">{session?.user.email}</span>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
            </div>
        </div>
    )
}