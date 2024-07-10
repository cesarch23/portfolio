import { Component } from '@angular/core';
import { Skill } from './interfaces/skill.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public skills:Skill[] =[
    { name:'HTML',percentage:75, oficialName:"" },
    { name:'CSS',percentage:70 , oficialName:""},
    { name:'JavaScript',percentage:70, oficialName:"" },
    { name:'angular',percentage:70 , oficialName:""},
    { name:'TypeScript',percentage:70 , oficialName:""},
    { name:'RxJs',percentage:70 , oficialName:""},
    { name:'csharp',percentage:70 , oficialName:""},
    { name:'dotnet',percentage:70 , oficialName:""},
    { name:'Java',percentage:70 , oficialName:""},
    { name:'Spring',percentage:70 , oficialName:"Spring"},
    { name:'SQL',percentage:70 , oficialName:"SQL Server"},
    { name:'Figma',percentage:70 , oficialName:"Figma"}
  ]
  public education =[
    {year:2021,tittle:"Ingresé a la UPC.",description:"Empece a estudiar desde el primer trimestre del año. "},
    {year:2024,tittle:"Estudiando en la UPC - 7mo ciclo",description:"Actualmente me encuentro en el septimo ciclo de la universidad."},
    
  ]
}
