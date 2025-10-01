"use client"

import { LoginForm } from "@/components/auth/login-form"
import { authClient } from "@/lib/auth-client"

export default function Page() {
  const handleLogIn = async (data: any) => {
    await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/app",
      rememberMe: false
    }, {
      onError: (ctx) => { alert(ctx.error.message) },
    })
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onLogIn={handleLogIn}/>
      </div>
    </div>
  )
}
