import { Model, models, model, Document, Schema } from 'mongoose';
import bycrypt from 'bcrypt';

interface UserDocument extends Document {
    email: string,
    name: string,
    password: string,
    role: "user" | "admin",
}

interface Methods {
    comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument, {}, Methods>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bycrypt.genSalt(10)
        this.password = await bycrypt.hash(this.password, salt);
        next();
    } catch (error) {
        throw new Error("Errore nell'encriptazione della password: " + error)
    }
});

userSchema.methods.comparePassword = async function (password) {
    try {
        return await bycrypt.compare(password, this.password);
    } catch (error) {
        throw new Error("Errore nella comparazione fra password: " + error);
    }
};

const UserModel = models.User || model("User", userSchema);

export default UserModel as Model<UserDocument, {}, Methods>