import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


// IMPORTAR COMPONENTE A LOS CUALES QUIERO HACER UNA PAGINA EXCLUSIVA
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorComponent } from "./components/error/error.component";

// array de ruta
const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "blog", component: BlogComponent},
    {path: "formulario", component: FormularioComponent},
    {path: "peliculas", component: PeliculasComponent},
    {path: "pagina-de-prueba", component: PaginaComponent},
    {path: "pagina-de-prueba/:nombre/:apellido", component: PaginaComponent},
    {path: "**", component: ErrorComponent} 

]

// exporta el modulo de ruta
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);