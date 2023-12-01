import { NavItem } from "@/lib/interfaces"

export const usersNavItems : Array<NavItem> = [
    {
        label: "Home", 
        path: "/home", 
    },
    {
        label: "Vini", 
        path: "/vini", 
    },
    {
        label: "Piatti", 
        path: "/piatti", 
    },
    {
        label: "Profilo", 
        path: "/profilo", 
    },
];

export const adminsNavItems : Array<NavItem> = [
    {
        label: "Dashboard", 
        path: "/dashboard", 
    },
    {
        label: "Vini", 
        path: "/gestisci-vini", 
    },
    {
        label: "Piatti", 
        path: "/gestisci-piatti", 
    },
    {
        label: "Utenti", 
        path: "/gestisci-utenti", 
    },
];
