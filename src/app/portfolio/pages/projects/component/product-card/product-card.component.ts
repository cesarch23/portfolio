import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interace';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone:false,
})
export class ProductCardComponent {
  @Input() products:Product[]=[];

  constructor(private dialog:MatDialog){}


  openDialog(product:Product){
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data:{product:product},
      enterAnimationDuration:500,
      exitAnimationDuration: 400,
      maxWidth:'700px',
      
       }
    );
  }
  
}
