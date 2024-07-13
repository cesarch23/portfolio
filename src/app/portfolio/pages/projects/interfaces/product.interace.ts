export interface Product {
    id?:number;
    title:       string;
    description: string;
    image:       string;
    video:       string;
    tech?:        technologies[];
    tecnology?:    tecnology[];
    resource:    string;
    website:     string;
  }

 export type tecnology = "Github" | "Javascript" | "HTML" | "CSS" | "angular" 
 | "TypeScript" | "RxJs" | "UX/UI" | "SQL" | "Spring" | "Java" | "dotnet" | "csharp" | "Git";
 export type technologies = "Figma";