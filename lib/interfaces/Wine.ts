export interface WineApiResponse extends Array<Wine> { }

export interface Wine {
    winery: string,
    wine: string,
    rating: {
        average: number,
        reviews: string
    },
    location: string,
    image: string,
    id: string
};

export type WineType = "reds" | "port" | "whites" | "sparkling" | "rose" | "dessert" | "";

export interface FilterButton {
    name: string,
    value: WineType,
};

export interface WineFilterNations {
    [tipo: string]: Array<string>
};