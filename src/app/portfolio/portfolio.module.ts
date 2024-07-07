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


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AboutComponent,
    PersonalInfoComponent,
    EducationComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule
  ]
})
export class PortfolioModule { }
