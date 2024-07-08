import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interace';

@Component({
  selector: 'app-mockup-card',
  templateUrl: './mockup-card.component.html',
  styleUrls: ['./mockup-card.component.css']
})
export class MockupCardComponent {
  @Input() mockups:Product[]=[];
  openResource(url:string){
    window.open(url,'_blank')
  }
}
