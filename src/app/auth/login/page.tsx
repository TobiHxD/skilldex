"use client";

import { LoginForm } from "@/components/auth/login-form";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const handleLogIn = async (data: any) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/app",
        rememberMe: false,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => setLoading(false),
        onError: (ctx) => {
          alert(ctx.error.message);
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onLogIn={handleLogIn} loadingState={loading} />
      </div>
    </div>
  );
}
