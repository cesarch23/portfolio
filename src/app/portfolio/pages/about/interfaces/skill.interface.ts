import { languages, technologies } from "../../projects/interfaces/product.interace";

export interface Skill{
    name:languages | technologies;
    percentage:number;
    oficialName:string;
}