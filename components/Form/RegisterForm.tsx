'use client'

import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Alert, Snackbar } from "@mui/material";
import Form from "./Form";

const RegisterForm = ({ setIsNew }: Props) => {

    const router = useRouter();

    const [error, setError] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = userInfo;

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;

        setUserInfo({ ...userInfo, [name]: value });
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            const res = await fetch("/api/auth/users", {
                method: "POST",
                body: JSON.stringify(userInfo),
            });
            if (!res.ok) {
                const errorResponse = await res.json()
                setSnackbarOpen(true);
                return setError(errorResponse.error || "Errore sconosciuto")
            }
            router.refresh()
        } catch (error) {
            console.error("Error:", error);
            setSnackbarOpen(true);
            setError("Errore inaspettato!");
        }
    }

    return (
        <>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
                <Alert onClose={() => setSnackbarOpen(false)} severity="warning">
                    {error}
                </Alert>
            </Snackbar>

            <Form
                type="register"
                fieldsValue={userInfo}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <h3 className="mt-10 cursor-pointer hover:text-red_mui duration-250" onClick={() => setIsNew(false)}>
                Hai già un account? Clicca qui per effettuare il login!
            </h3>
        </>
    )
}

export default RegisterForm;

interface Props {
    setIsNew: (arg: boolean) => void,
}