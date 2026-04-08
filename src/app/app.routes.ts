import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { AccessDenied } from './features/auth/pages/access-denied/access-denied';
import { MainLayout } from './layout/components/main-layout/main-layout';
import { authGuard } from './core/guards/auth-guard';
import { Home } from './features/dashboard/pages/home/home';
import { PizzaList } from './features/pizzas/pages/pizza-list/pizza-list';
import { PizzaForm } from './features/pizzas/pages/pizza-form/pizza-form';

export const routes: Routes = [

        {path: '', redirectTo: 'login', pathMatch:'full'},
        {   
            path:'login', 
            component: Login
        },
        {   
            path:'acesso-negado', 
            component: AccessDenied
        },
        {   
            path:'', 
            component: MainLayout,
            canActivate: [authGuard],
            children: [
                {
                    path:'home',
                    component:Home
                },
                {
                    path:'pizzas',
                    component:PizzaList
                },
                {
                    path:'pizzas/novo',
                    component:PizzaForm
                },
                {
                    path:'pizza/editar/:id',
                    component:PizzaForm
                },
            ]
        },
        {
            path:'**',
            redirectTo: 'login'
        }
];
