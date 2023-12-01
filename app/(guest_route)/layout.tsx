import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth/auth";
import { GenericProps } from "@/lib/interfaces";
import { Nav } from "@/components";

async function PrivateLayout({ children }: GenericProps) {
    const session = await getServerSession(authOptions)
    const user = session?.user as { role: string } | undefined
    const isAdmin = user?.role === "admin";

    if (!session?.user) redirect("/");
    if (isAdmin) redirect("/dashboard")

    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default PrivateLayout;
