'use client'

import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { formItems } from "@/lib/utils";

const Form = ({ type, fieldsValue, handleChange, handleSubmit }: FormProps) => {

    const { title, fields, btnLabel } = formItems[type];
    const { name, password, email } = fieldsValue;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-evenly h-auto bg-black/5 p-8 rounded-2xl shadow-2xl font-[sans-serif] gap-4"
            >
                <h2 className="text-3xl w-full flex justify-center text-red_mui font-bold">
                    {title}
                </h2>
                {fields.map((field, index) => (
                    <div
                        key={index}>
                        <TextField
                            key={index}
                            name={field.name}
                            color="error"
                            value={field.name === "email" ? email : field.name === "password" ? password : name}
                            onChange={handleChange}
                            label={field.label}
                            type={field.type === "password" ? (showPassword ? "text" : "password") : field.type}
                            variant="standard"
                            required
                            className="w-full"
                            InputProps={{
                                endAdornment: (field.type === "password" &&
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Mostra password"
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                ))}
                <div className="w-full flex justify-center mt-4">
                    <Button
                        variant="contained"
                        type="submit"
                        color="error"
                        className="bg-red_mui"
                    >
                        {btnLabel}
                    </Button>
                </div>
            </form>
        </div>
    )
}

interface FormProps {
    type: "register" | "login",
    fieldsValue: { name?: string, email: string, password: string },
    handleChange: (e: any) => void,
    handleSubmit: (e: any) => void,
}

export default Form;
