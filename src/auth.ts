import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { db } from "./lib/db";

const credentialConfig = CredentialProvider({
  name: "Credentials",
  credentials: {
    username: { label: "username", type: "text", placeholder: "" },
    password: { label: "password", type: "password", placeholder: "" },
  },
 
});

const config: NextAuthConfig = {
  providers: [google, credentialConfig],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

