import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/../prisma/generated/prisma";
import { sendResetPasswordEmail, sendVerificationEmail } from "./email";

interface verificationEmailProps {
  user: string,
  newEmail: string,
  url: string,
  token: string
}

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "sqlite" }),

  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({user, url, token}, request) => {
      await sendResetPasswordEmail({
        to: user.email!,
        from: "reset@skilldex.nicoladen.dev",
        url: url
      });
    }
  },

  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({user, url, token}, request) => {
      await sendVerificationEmail({
        to: user.email!,
        from: "verify@skilldex.nicoladen.dev",
        url: url
      });
    },
  },

  user: {
    changeEmail: {
      enabled: true,
      sendChangeEmailVerificationEmail: async ({user, newEmail, url, token}: verificationEmailProps, request: Request) => {
        await sendVerificationEmail({
          to: newEmail,
          from: "verify@skilldex.nicoladen.dev",
          url: url
        });
      },
    },
  },
});
