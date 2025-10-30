"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { sendVerificationEmail } from "@/lib/email";

export function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  const { data: session } = authClient.useSession();

  if (session?.user.emailVerified === false && showBanner) {
    return (
      <div className="bg-blue-500 text-white py-2 px-4 text-center absolute bottom-0 inset-x-0 flex justify-center items-center">
          <span className="font-semibold text-sm">Please verify your email address to access all features.</span>

          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-2 h-7"
            onClick={async () => {await authClient.sendVerificationEmail({
              email: session.user.email!,
              callbackURL: "/app/settings"
            })}}
          >
            Resend
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7" 
            onClick={() => setShowBanner(false)}
          >
            Close
          </Button>

      </div>
    );
  };
}