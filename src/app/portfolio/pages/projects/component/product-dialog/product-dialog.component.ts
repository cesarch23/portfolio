import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../interfaces/product.interace';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  standalone:false,
})
export class ProductDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {product:Product} ){
  }



}
