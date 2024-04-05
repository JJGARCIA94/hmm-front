import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home.module').then(m => m.HomeModule) },
    {path: '**', redirectTo: ''}
];
