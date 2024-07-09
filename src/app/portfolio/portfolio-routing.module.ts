import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
 

const routes: Routes = [
  {
    path:'',
    children: [
      { path:'home', component: HomeComponent },
      { path:'about', component: AboutComponent },
      { path:'projects', component: ProjectsComponent },
      { path:'contact', component: ContactComponent },


      {path: '**', redirectTo: 'home'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
