import Rating from '@mui/material/Rating';
import { Dish, Wine, WineType } from "@/lib/interfaces";

const ProductCard = ({ data, dataType, handleClick, wineType = "" }: WineCardProps) => {

  return (
    <div
      className={`group h-[300px] w-full flex ${getBgCard(wineType)} rounded-2xl shadow-lg hover:shadow-2xl duration-300 cursor-pointer`}
      onClick={(data ? () => handleClick(data.id) : () => { })}
    >

      <div className="min-w-[30%] flex justify-center">
        <img
          className={`group-hover:scale-110 duration-300 h-full ${dataType === "Wine" ? "w-[45%]" : "w-full rounded-tl-2xl rounded-bl-2xl"}`}
          src={'image' in data ? data?.image : data.photoUrl}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = `${dataType === "Wine" ? "/assets/images/wine_placeholder.png" : "/assets/images/dish_placeholder.png"}`;
          }}
        />
      </div>

      <div className="flex flex-col min-w-[50%] mt-5 ml-2">
        <h3 className="text-2xl">
          {'winery' in data ? data?.winery : data?.course}
        </h3>

        <h3 className="text-3xl font-bold">
          {'wine' in data ? data?.wine : data?.title}
        </h3>

        <h3 className="text-xl">
          {'location' in data ? data?.location : data?.mainIngredient}
        </h3>
      </div>

      <div className="flex flex-col min-w-[20%] justify-center text-center">
        {"rating" in data &&
          <>
            <div className="text-7xl font-bold">
              <div className='text-5xl'>{data?.rating.average}</div>
              <Rating
                readOnly
                value={Number(data?.rating.average)}
                precision={0.1}
              />
            </div>

            <h3>{data?.rating.reviews}</h3>
          </>
        }

        <div className='mt-2'>
          <button
            className='rounded-full bg-red/20 text-black/40 w-[80%] py-2 px-4 ont-bold text-2xl shadow-black/40 shadow-md hover:text-white hover:bg-red/80 duration-300'
          >
            ABBINA
          </button>
        </div>
      </div>

    </div >
  )
}

export default ProductCard;

function getBgCard(wineType: WineType): string {

  const baseTailwindRule = "bg-gradient-to-r"

  switch (wineType) {

    case "reds":
    case "port":
      return baseTailwindRule + " from-[#601b4a] from-50% via-[#93487b] via-90% to-[#b66d9f] to-100% text-white";

    case "whites":
    case "sparkling":
      return baseTailwindRule + " from-[#cdcf35] from-30% via-[#dfe067] via-75% to-[#e5e697] to-100% text-white";

    case "rose":
    case "dessert":
      return baseTailwindRule + " from-[#9f5057] from-50% via-[#ba7d83] via-90% to-[#dca0a5] to-100% text-white";

    default: return baseTailwindRule + " bg-black/20"
  }
}

interface WineCardProps {
  data: Wine | Dish,
  handleClick: (arg: string) => void,
  wineType?: WineType,
  dataType: "Dish" | "Wine",
}
