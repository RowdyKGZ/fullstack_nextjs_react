import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProdvier from "next-auth/providers/github";
import GoogleProdvier from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProdvier({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProdvier({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
