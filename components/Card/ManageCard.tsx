import { DashboardItem } from "@/lib/interfaces";

const ManageCard = ({ data, handleNavigation }: ManageCardProps) => {

    const { title, lblButton, arg } = data;

    return (
        <div className="flex flex-col bg-black/20 h-[500px] w-[30%] rounded-2xl shadow-2xl">
            <div className="w-full border-black/20 h-[15%] shadow-lg">
                <h1 className="uppercase text-4xl font-bold p-4">
                    {title}
                </h1>
            </div>

            <div className="h-[70%]">

            </div>

            <div className="h-[15%] flex justify-center my-2">
                <button
                    className="uppercase bg-red_mui items-center text-2xl text-white rounded-2xl h-[80%] w-[80%] hover:shadow-2xl hover:bg-red/80 duration-300 "
                    type="button"
                    onClick={() => handleNavigation(arg)}>
                    {lblButton}
                </button>
            </div>
        </div>
    )
}

export default ManageCard;

interface ManageCardProps {
    data: DashboardItem
    handleNavigation: (arg: string) => void
}