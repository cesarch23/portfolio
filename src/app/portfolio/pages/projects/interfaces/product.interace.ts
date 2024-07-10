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

 export type languages = "Github" | "JavaScript" | "HTML" | "CSS" | "angular" 
 | "TypeScript" | "RxJs" | "UX/UI" | "SQL" | "Spring" | "Java" | "dotnet" | "csharp" | "";
 export type technologies = "Figma";