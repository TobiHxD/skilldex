import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/../prisma/generated/prisma";
import { sendVerificationEmail } from "./email";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "sqlite" }),

  emailAndPassword: {
    enabled: true,
  },

  emailVerification: {
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
    },
  },
});
