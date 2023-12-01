import { bannerItems } from "@/lib/utils";

const Banner = ({ page }: BannerProps) => {

    const {title, subTitle, image} = bannerItems[page];

    return (
        <div
            className="w-full h-[300px] text-white"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="pt-12 pl-20">
                <h1 className="font-bold text-5xl">
                    {title}
                </h1>
                <p className="italic font-bold text-2xl mt-4">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default Banner;

interface BannerProps {
    page: "vini" | "piatti",
}
