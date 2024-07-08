import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public skills =[
    { name:'HTML',percentage:75 },
    { name:'CSS',percentage:70 },
    { name:'Javascript',percentage:70 },
    { name:'Angular',percentage:70 },
    { name:'Typescript',percentage:70 },
    { name:'RxJs',percentage:70 },
    { name:'C#',percentage:70 },
    { name:'.NET 6',percentage:70 },
    { name:'Java',percentage:70 },
    { name:'Sprint Boot',percentage:70 },
    { name:'SQL Server',percentage:70 },
    { name:'UX/UI',percentage:70 }
  ]
  public education =[
    {year:2020,tittle:"Studyng at UPC - 7mo",description:"Description about my studying must be brief also i dont now but ist ok "},
    {year:2021,tittle:"Studyng at UPC - 7mo",description:"Description about my studying must be brief also i dont now but ist ok "},
    {year:2022,tittle:"Studyng at UPC - 7mo",description:"Description about my studying must be brief also i dont now but ist ok "},
    {year:2023,tittle:"Studyng at UPC - 7mo",
      description:"Description about my studying must be brief  desde la perspectiva de una las cass de dla lomas also i dont nsd s  sad as as fasd fsd sd sad fsa dfasd fds d ow but ist ok "},
  ]
}
