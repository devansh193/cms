import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
const credentialConfig = CredentialProvider({
    name:"Credentials",
    credentials:{
        username:{
            label:"username",
        },
        password:{
            label:"password",
            type:"password",
        },
    },
    
})

const config = {
    providers:[google],
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut } = NextAuth(config)