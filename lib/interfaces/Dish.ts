export interface DishApiResponse { 
    data: Dish[]
}

export interface Dish {
    id: string,
    title: string,
    course: string,
    cuisine: string,
    mainIngredient: string,
    photoUrl: string,
}

// export interface Dish {
//     id: number,
//     title: string,
//     course: string,
//     cuisine: string,
//     mainIngredient: string,
//     description: string,
//     source: string,
//     url: string,
//     urlHost: string,
//     prepTime: number,
//     cookTime: number,
//     totalTime: number,
//     servings: number,
//     yield: number,
//     ingrediets: string,
//     directions: string,
//     tags: string,
//     //! manca il tipo di rating
//     rating: any
//     //! -----------------------
//     publicUrl: string,
//     photoUrl: string,
//     private: string,
//     //! manca il tipo di nutritionalScoreGeneric
//     nutritionalScoreGeneric: any
//     //! -----------------------
//     calories: number,
//     fat: string,
//     cholesterol: string,
//     sodium: string,
//     sugar: string,
//     carbohydrate: string,
//     fiber: string,
//     protein: string,
//     //! manca il tipo di cost
//     cost: any
//     //! -----------------------
// }