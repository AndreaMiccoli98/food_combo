import "@/styles/globals.css";
import { GenericProps } from "@/lib/interfaces";
import { AuhtProvider } from "@/components";

export const metadata = {
    title: "Food Combo",
}

async function RootLayout({ children }: GenericProps) {

    return (
        <AuhtProvider>
            <html>
                <body className="font-menulis">
                    <main>
                        {children}
                    </main>
                </body>
            </html>
        </AuhtProvider>
    )
}

export default RootLayout;
