'use client'

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getData } from "@/lib/api";
import { WineApiResponse, WineType } from "@/lib/interfaces";
import { WineApiEndpoints } from "@/lib/utils";
import { SyncLoader } from "react-spinners";

const Vini = () => {

    const DynamicTable = dynamic(() => import("../../../components/Table/Table"), {
        loading: () => <></>,
        ssr: false
    });

    const DynamicWineFilterForm = dynamic(() => import("../../../components/Form/WineFilterForm"), {
        loading: () => <></>,
        ssr: false
    });

    const [wines, setWines] = useState<WineApiResponse>();
    const [isLoading, setIsLoading] = useState<boolean>()
    const [filter, setFilter] = useState<WineType>(WineApiEndpoints.rosso);

    const handleFilter = (arg: WineType) => {
        setFilter(arg)
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const winesData: WineApiResponse = await getData("wines", filter);
                setWines(winesData);
            }
            catch (error) {
                throw new Error("Errore durante il recupero dei vini: " + error)
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [filter])

    return (
        wines && !isLoading ?
            <div className='w-full flex justify-between px-20 pt-10'>
                <div className="flex max-w-[30%] w-full">
                    <DynamicWineFilterForm
                        active={filter}
                        handleFilter={handleFilter}
                    />
                </div>
                <div className="flex max-w-[60%] w-full">
                    {/* <DynamicTable
                        data={wines}
                        dataType="Wine"
                        wineType={filter}
                    /> */}
                </div>
            </div>
            : <div className="w-full h-full flex justify-center mt-[310px]">
                <SyncLoader
                    color="red"
                />
            </div>
    )
}

export default Vini;
