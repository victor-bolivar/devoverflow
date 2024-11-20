
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { authorize } from "./db";

export const authOptions: NextAuthOptions = {
    providers: [
        credentials({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize,
        }),
    ],
    session: {
        strategy: "jwt",
    }
};