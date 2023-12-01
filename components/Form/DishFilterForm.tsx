import { Button } from "@mui/material";

const DishFilterForm = ({ active, availableIngredients, handleFilter }: DishFilterFormProps) => {

    return (
        <div className="flex flex-col gap-14 w-full">

            <div>
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">
                        Ingredienti Principali
                    </h1>
                </div>

                <div className="grid grid-cols-3 w-full gap-4">
                    <Button
                        variant={active === "Tutti" ? "contained" : "outlined"}
                        color="error"
                        value="Tutti"
                        className={`${active === "Tutti" ? "bg-red_mui cursor-default" : ""} py-4 px-4 rounded-2xl flex w-auto justify-center font-bold text-xl`}
                        onClick={() => active !== "Tutti" ? handleFilter("Tutti") : {}}
                        key={999}
                    >
                        Tutti
                    </Button>
                    {availableIngredients.map((ingredient: string, index) => (
                        <Button
                            variant={active === ingredient ? "contained" : "outlined"}
                            color="error"
                            value={ingredient}
                            className={`${active === ingredient ? "bg-red_mui cursor-default" : ""} py-4 px-4 rounded-2xl flex w-auto justify-center font-bold text-xl`}
                            key={index}
                            onClick={() => active !== ingredient ? handleFilter(ingredient) : {}}
                        >
                            {ingredient}
                        </Button>
                    ))}
                </div>
            </div>

            <hr className="text-red/20" />

        </div>
    )
}

export default DishFilterForm;

interface DishFilterFormProps {
    availableIngredients: string[],
    active: string,
    handleFilter: (arg: string) => void,
}