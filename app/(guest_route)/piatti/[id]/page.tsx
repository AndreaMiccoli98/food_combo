import Link from "next/link";
import { Params } from "@/lib/interfaces";

const DettaglioPiatto = ({ params }: { params: Params }) => {
    return (
        <>
            <div>Hai cliccato sul piatto con l'ID: {params.id}</div>
            <Link href="/piatti">{"<-- Torna indietro"}</Link>
        </>

    )
}

export default DettaglioPiatto
