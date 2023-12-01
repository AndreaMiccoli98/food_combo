export const logoSizes: LogoSize = {
    "small": {
        logo_textWH: 35,
        text_width: 125,
    },
    "medium": {
        logo_textWH: 70,
        text_width: 250
    }
}

interface LogoSize {
    [key: string]:
    {
        logo_textWH: number,
        text_width: number
    }
}
