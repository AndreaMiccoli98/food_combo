'use client'

import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Alert, Snackbar } from "@mui/material";
import Form from "./Form";

const LoginForm = ({ setIsNew }: Props) => {

  const router = useRouter();
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      setSnackbarOpen(true);
      return setError(res.error);
    }
    router.replace("/home");
  }

  return (
    <>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="warning">
          {error}
        </Alert>
      </Snackbar>

      <Form
        type="login"
        fieldsValue={userInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <h3 className="mt-10 cursor-pointer hover:text-red_mui duration-300" onClick={() => setIsNew(true)}>
        Non hai un account? Clicca qui per registrarti!
      </h3>
    </>
  )
}

export default LoginForm;


interface Props {
  setIsNew: (arg: boolean) => void,
}