import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'van',
    pathMatch: 'full'
},{
    path: 'van',
    loadChildren: () => import('./modules/presentation/presentation.module').then(m => m.PresentationModule)
}];
