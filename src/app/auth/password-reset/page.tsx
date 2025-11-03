"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function PasswordResetPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4">
            <Card className="w-full max-w-md p-6">
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Password Reset</FieldLegend>
                        <FieldDescription>Please enter your email to reset your password.</FieldDescription>
                        <FieldGroup>
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <Input id="email" type="email" />
                        </FieldGroup>
                    </FieldSet>
                    <Field>
                        <Button className="w-full mt-4">Send Reset Link</Button>
                    </Field>
                </FieldGroup>
            </Card>
        </div>
    );
}