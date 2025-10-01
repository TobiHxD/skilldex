"use client";

import { SignupForm } from "@/components/auth/signup-form"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/router";

export default function Page() {
  const handleSignUp = async (data: any) => {
    const authData = await authClient.signUp.email({
      email: data.email,
      name: data.username,
      password: data.password,
      callbackURL: "/app"
    }, {
        onSuccess: (ctx) => { },
        onError: (ctx) => { alert(ctx.error.message); },
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm onSignUp={handleSignUp} />
      </div>
    </div>
  )
}