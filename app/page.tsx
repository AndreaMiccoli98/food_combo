'use client'

import Image from "next/image";
import { LoginForm, Logo, RegisterForm } from "@/components";
import { useState } from "react";

const RootPage = () => {

    const [isNew, setIsNew] = useState(false)

    return (
        <div className="sm:flex-row flex h-full flex-col-reverse">
            <div className="sm:w-1/2 sm:h-full w-full h-2/3">
                <div className="flex flex-col text-center py-10 gap-10 mb-10 font-[sans-serif]">
                    <Logo size="medium" />
                </div>
                <div className="xl:px-32 px-8 mt-16">
                    {isNew
                        ? <RegisterForm setIsNew={setIsNew} />
                        : <LoginForm setIsNew={setIsNew} />
                    }
                </div>
            </div>

            <div className="sm:w-1/2 sm:h-full w-full h-1/3">
                <div className="w-full h-[100vh] overflow-hidden relative">
                    <Image
                        src="/assets/images/login_page-image.jpg"
                        fill
                        sizes="auto"
                        className="w-auto h-auto object-cover object-center"
                        alt="Wine & dish image"
                    />
                </div>
            </div>
        </div>
    )
}

export default RootPage;
