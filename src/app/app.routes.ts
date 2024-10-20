import { Routes } from '@angular/router';
import { HomeComponent } from './modules/presentation/home/home.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'van',
    pathMatch: 'full'
},{
    path: 'me',
    component: HomeComponent
},{
    path: 'van',
    loadChildren: () => import('./modules/presentation/presentation.module').then(m => m.PresentationModule)
}];
