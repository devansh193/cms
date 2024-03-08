import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
import { db } from "./lib/db";
import { emitWarning } from "process";
import { compare } from "bcrypt";
const credentialConfig = CredentialProvider({
  name: "Credentials",
  credentials: {
    email: { label: "email", type: "email", placeholder: "email@example.com" },
    password: { label: "password", type: "password", placeholder: "********" },
  },
  async authorize(credentials){
    if(!credentials?.email || !credentials?.password){
      return null;
    }
    const existingUser = await db.user.findUnique({
      where: { email: credentials?.email.toString() }
    });
    if(!existingUser){
      return null;
    }
    const passwordMatch = await compare(credentials.password.toString(), existingUser.password.toString());
    if(!passwordMatch){
      return null;
    }
    return{
      id: `${existingUser.id}`,
      email: existingUser.email
    }
  }
  
});
const config: NextAuthConfig = {
  adapter:PrismaAdapter(db),
  session:{
    strategy: 'jwt'
  },
  providers: [google, credentialConfig],
  pages:{
    signIn: '/signin'
  },
  
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);


