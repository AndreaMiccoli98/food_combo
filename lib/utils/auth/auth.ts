import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "@/models/User";
import { connectToDB } from "../database";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string,
                    password: string,
                };

                await connectToDB();

                const user = await UserModel.findOne({ email });
                if (!user) throw Error("Email errata!");

                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw Error("Password errata!");

                return {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    id: user._id,
                }
            },
        })
    ],
    callbacks: {
        jwt(params: any) {
            if (params.user?.role) {
                params.token.role = params.user.role;
                params.token.id = params.user.id;
            }
            return params.token;
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as { id: string }).id = token.id as string;
                (session.user as { role: string }).role = token.role as string;
            }
            return session;
        }
    }
}
