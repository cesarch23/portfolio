import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  standalone:false,
})
export class SkillComponent {
  @Input() skills:any;  
}
