import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/utils/auth/auth";
import { GenericProps } from "@/lib/interfaces";
import { Nav } from "@/components";

async function PrivateLayout({ children }: GenericProps) {
    const session = await getServerSession(authOptions);
    const user = session?.user as { role: string } | undefined;
    const isAdmin =  user?.role === "admin";

    if(!isAdmin && session) redirect("/home");
    if(!isAdmin && !session) redirect("/")  

    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default PrivateLayout;
