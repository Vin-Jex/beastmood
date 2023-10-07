import { baseUrl } from "@/components/utils/baseUrl";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { User, Account, Profile, AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn(params: {
      user: User | null | undefined;
      account: Account | null;
      profile?: Profile | null | undefined;
      email?:
        | { verificationRequest?: boolean | null | undefined }
        | null
        | undefined;
      credentials?: Record<string, any> | null | undefined;
    }) {
      const { user, account } = params;
      if (account?.provider === "google" && user) {
        const { name, email } = user;

        try {
          const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });

          if (res.ok) {
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      }

      return false; // Authentication failed
    },
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextAuth(req, res, authOptions);
};

export default handler;
