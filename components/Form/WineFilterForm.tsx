import { FilterButton, WineType } from "@/lib/interfaces";
import { wineFilterButton } from "@/lib/utils";
import { Button } from "@mui/material";

const WineFilterForm = ({ active, handleFilter }: WineFilterFormProps) => {

    return (
        <div className="flex flex-col gap-14 w-full">

            <div>
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">
                        Tipologie di vino
                    </h1>
                </div>

                <div className="grid grid-cols-3 w-full gap-4">
                    {/* Button filtro per tipo di vino (es. bianco/rosso/rosato...) */}
                    {wineFilterButton.map((filterButton: FilterButton, index) => (
                        <Button
                            variant={filterButton.value === active ? "contained" : "outlined"}
                            color="error"
                            value={filterButton.value}
                            className={`py-4 rounded-2xl flex w-full justify-center font-bold text-xl ${filterButton.value === active ? "cursor-default bg-red_mui" : ""}`}
                            onClick={() => filterButton.value !== active ? handleFilter(filterButton.value) : {}}
                            key={index}
                        >
                            {filterButton.name}
                        </Button>
                    ))}
                </div>
            </div>

            <hr className="text-red/20" />

        </div>
    )
}

export default WineFilterForm;

interface WineFilterFormProps {
    active: string,
    handleFilter: (arg: WineType) => void,
}