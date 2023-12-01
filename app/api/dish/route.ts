import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/utils/database";
import DishModel from "@/models/Dish";
import { Dish } from "@/lib/interfaces";

async function getAllDish(req: NextRequest): Promise<NewResponse> {

    const { nextUrl: { search } } = req;
    const urlSearchParams = new URLSearchParams(search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const page = +params.page;
    const elements = 5

    await connectToDB();

    try {
        const response = await DishModel.find().sort({ title: 1 }).skip((page - 1) * elements).limit(elements);
        const dishes: Dish[] = response.map((dish: any) => (
            {
                id: dish._id.toString(),
                title: dish.title,
                course: dish.course,
                cuisine: dish.cuisine,
                mainIngredient: dish.mainIngredient,
                photoUrl: dish.photoUrl,
            }
        ))
        return NextResponse.json({ data: dishes })
    }
    catch (error) {
        console.log("Errore nella getAll dei pietti: " + error)
        return NextResponse.json(
            { error: "Errore nella getAll dei piatti" },
            { status: 500 }
        );
    }
}

type NewResponse = NextResponse<{ data?: Dish[]; error?: string }>;

export { getAllDish as GET }
