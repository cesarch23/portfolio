import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    NotFoundPageComponent
   ]

})
export class SharedModule { }
