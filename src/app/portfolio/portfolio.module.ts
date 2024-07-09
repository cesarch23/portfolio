import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PersonalInfoComponent } from './pages/about/component/personal-info/personal-info.component';
import { EducationComponent } from './pages/about/component/education/education.component';
import { SkillComponent } from './pages/about/component/skill/skill.component';
import { MaterialModule } from '../material/material.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MockupCardComponent } from './pages/projects/component/mockup-card/mockup-card.component';
import { ProductCardComponent } from './pages/projects/component/product-card/product-card.component';
import { ProductDialogComponent } from './pages/projects/component/product-dialog/product-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    PersonalInfoComponent,
    EducationComponent,
    SkillComponent,
    ProjectsComponent,
    MockupCardComponent,
    ProductCardComponent,
    ProductDialogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    MatDialogModule
  ]
})
export class PortfolioModule { }
