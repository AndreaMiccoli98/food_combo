import NextAuth from "next-auth";
import { authOptions } from "@/lib/utils/auth/auth";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
