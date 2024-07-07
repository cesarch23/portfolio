import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'portfolio-cesar',
    loadChildren:()=>import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)
  },
  {
    path:'',
    redirectTo: 'portfolio-cesar',
    pathMatch:'full'
  },
  {
    path:'404',
    component: NotFoundPageComponent
  },
  {
    path:'**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
