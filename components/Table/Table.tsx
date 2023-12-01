'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "..";
import { Dish, Wine, WineType } from "@/lib/interfaces";
import { Pagination } from "@mui/material";

const Table = ({ data, dataType, page, wineType = "", changePage }: TableProps) => {

    const [actualIndex, setActualIndex] = useState<number>(5)

    const dataToDisplay = data.slice(0, actualIndex)

    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/${dataType === "Dish" ? "piatti" : "vini"}/${id}`)
    }

    const showMore = () => {
        setActualIndex(actualIndex + 5)
    }

    return (
        <div className="w-full">

            <div className={`grid grid-cols-1 gap-x-2 gap-y-4 w-full`}>
                {dataToDisplay.map((item: Wine | Dish, index) => (
                    <div className="flex w-full h-full" id={item.id.toString()} key={index}>
                        <ProductCard
                            data={item}
                            handleClick={handleClick}
                            wineType={wineType}
                            dataType={dataType}
                        />
                    </div>
                ))}
            </div>

            <Pagination count={10} shape="rounded" onChange={changePage} page={page}/>
            {/* {
                data.length > 5 && dataToDisplay.length < data.length ?
                    <div className="w-full justify-center flex my-5">
                        <button
                            onClick={showMore}
                            className="w-1/2 py-2 px-4 bg-red/20 text-black/40 rounded-full font-bold text-2xl shadow-black/40 shadow-md hover:text-white hover:bg-red/80 duration-300"
                        >
                            CARICA ALTRI
                        </button>
                    </div>

                    : null
            } */}

        </div>
    )
}

export default Table;

interface TableProps {
    data: Dish[] | Wine[],
    dataType: "Dish" | "Wine",
    wineType?: WineType,
    page: number,
    changePage: (event: any, page: number) => void,
}
