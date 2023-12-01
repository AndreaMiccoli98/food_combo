'use client'

import { signOut, useSession } from "next-auth/react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { adminsNavItems, usersNavItems } from "@/lib/utils";
import { NavItem } from "@/lib/interfaces";
import { Logo } from "..";
import { Button } from "@mui/material";


const Nav = () => {
    const pathName = usePathname()

    const { data: session } = useSession();
    const user = session?.user as { role: string } | undefined;
    const isAdmin: boolean = user?.role === "admin";

    const filteredNavItems = isAdmin ? adminsNavItems : usersNavItems;

    return (
        <div className="flex px-8 py-3 items-center shadow-lg">

            <div className="flex">
                <Logo size="small" />
            </div>

            <div className="w-full flex justify-between mx-40">
                {
                    filteredNavItems.map((item: NavItem, index) => (
                        <div
                            className={`font-bold text-2xl h-full hover:text-red_mui duration-300 ${pathName === item.path ? "text-red_mui" : ""}`}
                            key={index}>
                            <Link href={item.path}>
                                {item.label.toUpperCase()}
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div>
                <Button
                    variant="outlined"
                    onClick={() => signOut()}
                    color="error">
                    LOGOUT
                </Button>
            </div>
        </div>
    )
}

export default Nav;
