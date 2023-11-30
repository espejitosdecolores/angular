import { Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NoAndaComponent } from './no-anda/no-anda.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Hija2Component } from './hija2/hija2.component';
export const routes: Routes = [
    
    {path:'first-ruta', title:'primero', component:FirstComponent},
    //con lazyload en standalone components
    {path: 'second-ruta',title:'segundo', loadComponent: () => import('./second/second.component').then(m => m.SecondComponent)},
    {path:'ruta-padre',component:PadreComponent,
        children: [ 
            {path:'hija', component:HijoComponent},
            {path:'hija2', component:Hija2Component}
        ]
    },
     //redireccion
    { path: 'otro',   redirectTo: '/first-ruta', pathMatch: 'full' },
    
    //Comodin para otras rutas 
    { path: '**', component: NoAndaComponent },
   
];

