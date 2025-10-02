"use client";

import { SignupForm } from "@/components/auth/signup-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignUp = async (data: any) => {
    await authClient.signUp.email(
      {
        email: data.email,
        name: data.username,
        password: data.password,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          setLoading(true);
          router.push("/app");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          setLoading(false);
        },
      },
    );
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm onSignUp={handleSignUp} loadingState={loading} />
      </div>
    </div>
  );
}
