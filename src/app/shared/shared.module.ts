import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    MenuComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
