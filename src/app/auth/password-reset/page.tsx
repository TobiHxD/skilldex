"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

export default function PasswordResetPage() {
    const [ email, setEmail ] = useState("");

    const handleSendResetLink = async () => {
        const {data, error} = await authClient.requestPasswordReset({
            email: email,
            redirectTo: `${window.location.origin}/auth/password-reset/confirm`
        })

        if (!error) {
            toast.success("Password reset link sent! Please check your email.");
        } else {
            toast.error(`Error: ${error.message}`);
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4">
            <Card className="w-full max-w-md p-6">
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Password Reset</FieldLegend>
                        <FieldDescription>Please enter your email to reset your password.</FieldDescription>
                        <FieldGroup>
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <Input id="email" type="email" onChange={(e) => {setEmail(e.target.value)}} />
                        </FieldGroup>
                    </FieldSet>
                    <Field>
                    <Button 
                        className="w-full mt-4" 
                        onClick={async () => {await handleSendResetLink();}}
                    >
                        Send Reset Link
                    </Button>
                    </Field>
                </FieldGroup>
            </Card>
        </div>
    );
}