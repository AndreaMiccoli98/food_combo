export const formItems: FormItems = {
    "login": {
        title: "ACCEDI",
        fields: [
            {
                name: "email",
                label: "Email:",
                type: "email",
            },
            {
                name: "password",
                label: "Password:",
                type: "password",
            },
        ],
        btnLabel: "ACCEDI",
    },
    "register" : {
        title: "REGISTRATI",
        fields: [
            {
                name: "name",
                label: "Nome:",
                type: "text",
            },
            {
                name: "email",
                label: "Email:",
                type: "email",
            },
            {
                name: "password",
                label: "Password:",
                type: "password",
            },
        ],
        btnLabel: "REGISTRATI",
    }
}

interface FormItems {
    [key: string]: {
        title: string,
        fields: Field[],
        btnLabel: string,
    }
}

interface Field {
    name: string,
    label: string,
    type: "email" | "text" | "password",
}