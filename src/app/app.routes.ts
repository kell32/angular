import { Routes } from '@angular/router';
import { HomePages } from './pages/home-pages/home-pages';
import { ProductosPages } from './pages/productos-pages/productos-pages';
import { LoginPages } from './pages/login-pages/login-pages';
import { RegistroPages } from './pages/registro-pages/registro-pages';
import { Error404Pages } from './pages/error404-pages/error404-pages';
import { loginGuardGuard } from './guards/login-guard-guard';
import { DetallesPages } from './pages/detalles-pages/detalles-pages';
import { CarritoPages } from './pages/carrito-pages/carrito-pages';

export const routes: Routes = [

    { path: 'home', component: HomePages },
    { path: 'productos', component: ProductosPages, canActivate: [loginGuardGuard] },
    { path: 'login', component: LoginPages },
    { path: 'registro', component: RegistroPages },
    { path: 'carrito', component: CarritoPages },
    { path: 'detalles/:id', component: DetallesPages },

    { path: '**', component: Error404Pages }

];
