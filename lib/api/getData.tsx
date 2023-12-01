import { genericApiEndpoints } from "@/lib/utils";

export async function getData(type: "wines", filter: string,) {

    const baseApiURL = "https://api.sampleapis.com/"

    const buildUrl = () => {
        let url: string = "";
        url = `${baseApiURL}${genericApiEndpoints[type]}/${filter}`
        return url;
    }

    try {
        const response = await fetch(buildUrl());
        if (!response.ok) {
            throw new Error(`Errore nella richiesta API Vini!`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Errore durante la richiesta API Vini!: ` + error);
    }
}
