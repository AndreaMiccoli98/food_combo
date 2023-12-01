import { GenericProps } from "@/lib/interfaces";
import { Banner } from "@/components";

const DishLayout = ({ children }: GenericProps) => {
    return (
        <main>
            <Banner page="piatti" />
                {children}
        </main>
    )
}

export default DishLayout;
