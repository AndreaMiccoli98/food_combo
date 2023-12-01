'use client'

import { SessionProvider } from "next-auth/react";
import { GenericProps } from "@/lib/interfaces";

const AuhtProvider = ({ children }: GenericProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuhtProvider;
