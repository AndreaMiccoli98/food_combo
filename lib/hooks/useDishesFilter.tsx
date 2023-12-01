import { useState, useEffect } from "react";
import { Dish } from "../interfaces";

const useDishesFilter = (dishes: Dish[] | undefined) => {

    const [filter, setFilter] = useState<string[]>();

    useEffect(() => {
        const uniqueFilter = new Set<string>();

        dishes?.map((dish: Dish) => {
            const filterValue: string = dish.mainIngredient;
            filterValue && uniqueFilter.add(filterValue)
        })

        setFilter(Array.from(uniqueFilter));
    }, [dishes])

    return filter;

}

export default useDishesFilter;
