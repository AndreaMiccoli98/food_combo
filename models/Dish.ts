import { Model, models, model, Document, Schema } from 'mongoose';

interface DishDocument extends Document {
    title: string,
    course?: string,
    cuisine?: string,
    mainIngredient: string,
    photoUrl?: string,
}

const dishSchema = new Schema<DishDocument, {}>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String
    },
    cuisine: {
        type: String
    },
    mainIngredient: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String
    }
});

const DishModel = models.Dish || model("Dish", dishSchema);

export default DishModel as Model<DishDocument, {}>
