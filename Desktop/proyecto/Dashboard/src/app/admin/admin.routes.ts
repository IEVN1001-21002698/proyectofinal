import { Routes } from "@angular/router";

export default [


            {
                path: 'inicio',
                loadComponent: () => import('./inicio/inicio.component')
            },
            {
                path: 'procesos',
                loadComponent: () => import('./procesos/procesos.component')
            },
            {
                path: 'abc',
                loadComponent: () => import('./abc/abc.component')
            },
            {
                path:'dashboard',
                loadComponent: () => import('./admindashboard/admindashboard.component')
            }
        
    
] as Routes