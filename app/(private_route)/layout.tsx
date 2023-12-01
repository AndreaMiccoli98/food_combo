import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/utils/auth/auth";
import { GenericProps } from "@/lib/interfaces";
import { Nav } from "@/components";

async function PrivateLayout({ children }: GenericProps) {
    const session = await getServerSession(authOptions);

    if (!session?.user) redirect("/");

    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default PrivateLayout;
