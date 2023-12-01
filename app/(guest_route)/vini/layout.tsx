import { GenericProps } from "@/lib/interfaces";
import { Banner } from "@/components";

const WineLayout = ({ children }: GenericProps) => {

    return (
        <main>
            <Banner page="vini" />
            {children}
        </main>
    )
}

export default WineLayout;
