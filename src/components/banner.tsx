"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function Banner() {
  const { data: session } = authClient.useSession();

  if (session?.user.emailVerified === false) {
    return (
      <div className="bg-blue-500 text-white py-2 px-4 text-center absolute bottom-0 inset-x-0 flex justify-center items-center">
          <span className="font-semibold text-sm">Please verify your email address to access all features.</span>
          <Button variant="ghost" size="sm" className="ml-2 h-7">Resend</Button>
          <Button variant="ghost" size="sm" className="h-7">Close</Button>
      </div>
    );
  };
}