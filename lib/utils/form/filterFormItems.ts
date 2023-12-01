import { FilterButton } from "@/lib/interfaces"
import { WineApiEndpoints } from "@/lib/utils";

export const wineFilterButton: Array<FilterButton> = [
    {
        name: "Rosso",
        value: WineApiEndpoints.rosso,
    },
    {
        name: "Bianco",
        value: WineApiEndpoints.bianco,
    },
    {
        name: "Spumante",
        value: WineApiEndpoints.spumante,
    },
    {
        name: "Rosato",
        value: WineApiEndpoints.rosato,
    },
    {
        name: "Dessert",
        value: WineApiEndpoints.dessert,
    },
    {
        name: "Porto",
        value: WineApiEndpoints.port,
    },
];
