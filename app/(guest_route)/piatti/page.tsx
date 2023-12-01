'use client'

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { DishApiResponse, Dish } from '@/lib/interfaces';
// import { useDishesFilter } from '@/lib/hooks';
import { SyncLoader } from "react-spinners";

const Piatti = () => {

    const DynamicTable = dynamic(() => import("../../../components/Table/Table"), {
        loading: () => <></>,
        ssr: false
    });

    // const DynamicDishFilterForm = dynamic(() => import("../../../components/Form/DishFilterForm"), {
    //     loading: () => <></>,
    //     ssr: false
    // });

    const [dishes, setDishes] = useState<Dish[]>();
    // const [filteredDishes, setFilteredDishes] = useState<Dish[]>();

    // const availableIngredients = useDishesFilter(dishes);

    // const [filter, setFilter] = useState<string>("Tutti");
    const [isLoading, setIsLoading] = useState<boolean>();
    const [queryParams, setQueryParams] = useState(
        {
        page: 1,
        elements: 5
    })

    // const handleFilter = (arg: string) => {
    //     setIsLoading(true);
    //     setFilter(arg)

    //     let filteredDishesData: Dish[] | undefined;

    //     if (arg !== "Tutti") {
    //         filteredDishesData = dishes?.filter((dish: Dish) => {
    //             return dish.mainIngredient === arg;
    //         })
    //     }
    //     else {
    //         filteredDishesData = dishes;
    //     }

    //     setFilteredDishes(filteredDishesData);
    //     setIsLoading(false);
    // }

    const changePage = (event: any, page: number) => {
        setQueryParams({...queryParams, page: page})
    }

    useEffect(() => {
        const getDishesData = async () => {
            setIsLoading(true);

            try {
                const dishesData: DishApiResponse = await fetch(`/api/dish?elements=page=${queryParams.page}`, {
                    method: "GET",
                }).then(res => res.json());
                setDishes(dishesData.data);
                // setFilteredDishes(dishesData)
            }

            catch (error) {
                throw new Error("Errore durante il recupero dei piatti: " + error)
            }

            finally {
                setIsLoading(false);
            }
        }
        getDishesData();
    }, [queryParams])

    return (
        dishes && !isLoading ?
            <div className='w-full flex justify-between px-20 pt-10'>
                <div className="flex max-w-[30%] w-full">
                    {/* <DynamicDishFilterForm
                        active={filter}
                        availableIngredients={availableIngredients ? availableIngredients : []}
                        handleFilter={handleFilter}
                    /> */}
                </div>
                <div className="flex max-w-[60%] w-full">
                    <DynamicTable
                        data={dishes ? dishes : []}
                        dataType="Dish"
                        wineType=''
                        changePage={changePage}
                        page={queryParams.page}
                    />
                </div>
            </div>
            : <div className="w-full h-full flex justify-center mt-[310px]">
                <SyncLoader
                    color="purple" />
            </div>
    )
}

export default Piatti;
