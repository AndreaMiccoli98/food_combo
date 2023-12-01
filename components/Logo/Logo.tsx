import Image from "next/image";
import { logoSizes } from "@/lib/utils";

const Logo = ({ size }: LogoProps) => {

    return (
        <div className="flex w-full justify-center text-center">
            <Image
                src="/assets/images/logo.svg"
                width={logoSizes[size].logo_textWH}
                height={logoSizes[size].logo_textWH}
                alt="logo"
            />
            <Image
                src="/assets/images/logo_text.png"
                width={logoSizes[size].text_width}
                height={logoSizes[size].logo_textWH}
                className="pt-1"
                alt="logo text"
            />
        </div>
    )
}

export default Logo;

interface LogoProps {
    size: string,
};