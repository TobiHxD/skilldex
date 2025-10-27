"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
import { removeProfilePicture } from "@/lib/user/profile-picture";
import ProfilePictureUpdate from "./profile-picture-update";
import { FieldSet, FieldLabel, FieldGroup, Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";

export default function SettingsPage() {
    const { data: session } = authClient.useSession();
    const [isRemoving, setIsRemoving] = useState(false);

    const [username, setUsername] = useState(session?.user.name || "");
    const [email, setEmail] = useState(session?.user.email || "");

    const handleRemovePicture = async () => {
        setIsRemoving(true);
        try {
            await removeProfilePicture();
            toast.success("Profile picture removed successfully.");
        } catch (error) {
            console.error("Error removing profile picture:", error);
            toast.error("Failed to remove profile picture.");
        } finally {
            setIsRemoving(false);
        }
    }

    return (
        <div className="min-h-screen px-4 pt-8 md:w-4/5 lg:w-3/5 mx-auto">
            <h1 className="text-2xl font-medium mb-4">Account</h1>

            <div className="mb-4 p-4 border rounded-lg bg-secondary flex flex-col lg:flex-row">
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
                <div className="ml-auto flex items-center mt-4 lg:mt-0">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mx-1 hover:cursor-pointer" variant="default">Change Picture</Button>
                        </DialogTrigger>
                        <ProfilePictureUpdate />
                    </Dialog>
                    <Button
                        className="mx-1 hover:cursor-pointer"
                        variant="outline"
                        onClick={handleRemovePicture}
                        disabled={isRemoving}
                    >
                        {isRemoving ? "Removing..." : "Remove Picture"}
                    </Button>
                </div>
            </div>

            <div className="pt-4">
                <FieldSet>
                    <FieldGroup>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field>
                                <FieldLabel>Username</FieldLabel>
                                <InputGroup>
                                    <InputGroupInput placeholder={session?.user.name} onChange={(e) => setUsername(e.target.value)}/>
                                    <InputGroupAddon align="inline-end">
                                        <InputGroupButton 
                                            className={username === session?.user.name ? "hidden" : ""}
                                        >
                                            Update
                                        </InputGroupButton>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Field>
                            <Field>
                                <FieldLabel>Email</FieldLabel>
                                <Input placeholder={session?.user.email} />
                            </Field>
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input type="password" placeholder="********" />
                            </Field>
                        </div>
                    </FieldGroup>
                </FieldSet>
            </div>

        </div>
    )
}