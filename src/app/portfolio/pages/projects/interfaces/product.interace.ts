export interface Product {
    id?:number;
    title:       string;
    description: string;
    image:       string;
    video:       string;
    tech?:        technologies[];
    languages?:    languages[];
    resource:    string;
    website:     string;
  }

 export type languages = "Github" | "JavaScript" | "HTML" | "CSS" | "Angular";
 export type technologies = "Figma";