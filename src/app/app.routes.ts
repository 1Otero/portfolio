import { Routes } from '@angular/router';
import { HomeComponent } from './modules/presentation/home/home.component';

export const routes: Routes = [{
 path: '',   
 loadComponent: () => import("./modules/presentation/home/home.component").then(p => p.HomeComponent) 
},{
    path: 'me',
    redirectTo: 'van',
    pathMatch: 'full'
},{
    path: 'van',
    loadChildren: () => import('./modules/presentation/presentation.module').then(m => m.PresentationModule)
}];
