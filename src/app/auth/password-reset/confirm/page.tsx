"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { connection } from "next/server";
import { useState } from "react";
import { toast } from "sonner";

export default async function PasswordResetConfirmationPage() {
    await connection();

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [loading, setLoading] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
        setLoading(true);

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            setLoading(false);
            return;
        }

        const { data, error } = await authClient.resetPassword({
            token: token!,
            newPassword: password
        });

        if (!error) {
            toast.success("Password has been reset successfully!");
        } else {
            toast.error(`Error: ${error.message}`);
        }

        setLoading(false);
    }

    if (token == "INVALID_TOKEN" || token == null) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center px-4">
                <h1 className="text-2xl font-bold mb-4">Invalid or Missing Token</h1>
                <p className="text-center">The password reset token is either invalid or missing. Please request a new password reset link.</p>
            </div>
        );
    } else {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center px-4">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Change Password</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-2">
                            <Label htmlFor="new-password" className="text-sm font-medium">New Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2 mt-2">
                            <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <Button 
                                className="w-full mt-4"
                                onClick={handleSubmit}
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    "Reset Password"
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
};