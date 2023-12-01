import { NextResponse } from "next/server";
import UserModel from "@/models/User";
import { connectToDB } from "@/lib/utils/database";

export const POST = async (req: Request): Promise<NewResponse> => {
    const body = (await req.json()) as NewUserRequest;

    await connectToDB();

    try {
        const oldUser = await UserModel.findOne({ email: body.email })
        if (oldUser)
            return NextResponse.json(
                { error: "Email già utilizzata!" },
                { status: 422 }
            )

        const user = await UserModel.create({ ...body });

        return NextResponse.json({
            user: {
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                role: user.role,
            }
        })
    } catch (error) {
        console.error("Error:", error);

        return NextResponse.json(
            { error: "Errore interno al server" },
            { status: 500 }
        );
    }
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

interface NewUserRequest {
    name: string,
    email: string,
    password: string,
}

interface NewUserResponse {
    id: string,
    name: string,
    email: string,
    role: string,
}
