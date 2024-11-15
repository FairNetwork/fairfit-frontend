export interface IDashboard {
    text: string;
    icon?: string;
    route: string;
    children?: {
        text: string;
        icon?: string;
        route: string;
    }[];
}
