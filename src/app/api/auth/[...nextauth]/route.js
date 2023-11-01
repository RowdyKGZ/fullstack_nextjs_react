import NextAuth from "next-auth/next";
import GithubProdvier from "next-auth/providers/github";
import GoogleProdvier from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProdvier({
      clientId: "",
      clientSecret: "",
    }),
    GoogleProdvier({
      clientId: "",
      clientSecret: "",
    }),
  ],
});
