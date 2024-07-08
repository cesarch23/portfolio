import { Component, Input } from '@angular/core';
import { Mock } from '../../projects.component';

@Component({
  selector: 'app-mockup-card',
  templateUrl: './mockup-card.component.html',
  styleUrls: ['./mockup-card.component.css']
})
export class MockupCardComponent {
  @Input() mockups:Mock[]=[];
  openResource(url:string){
    window.open(url,'_blank')
  }
}
