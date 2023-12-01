'use client'

import { useSession } from "next-auth/react";

const Profilo = () => {
    const session = useSession();
    const {name, email, image} = session.data?.user || {};

    return (
        <div className="w-full h-full flex justify-evenly">
            <div>
                Benvenuto nel tuo profilo, {name}
            </div>

            <div>
                <div>
                    <h1>Dati personali</h1>
                </div>
                <div className="">
                    <h3>email: {email}</h3>
                    <h3>comboProvate: []</h3>
                </div>
            </div>

            <div>
                Tabella con combo provate
            </div>

        </div>
    )
}

export default Profilo;
