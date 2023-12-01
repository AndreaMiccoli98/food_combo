import Link from "next/link";
import { Params } from "@/lib/interfaces";

const DettaglioVino = ({ params }: { params: Params }) => {
    return (
        <>
            <div>Hai cliccato sul vino con l'ID: {params.id}</div>
            <Link href="/vini">{"<-- Torna indietro"}</Link>
        </>
    )
}

export default DettaglioVino
