import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TstthreejsComponent } from './page/tstthreejs/tstthreejs.component'

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},{
  path: 'home',
  //component: HomeComponent
  loadComponent: () => import("./home/home.component").then(h => h.HomeComponent)
},{
  path: 'tstthree',
  component: TstthreejsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
