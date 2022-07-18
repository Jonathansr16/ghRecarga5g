import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoPageFoundComponent } from "../components/no-page-found/no-page-found.component";
import { PagaquiComponent } from "./plataformas/pagaqui/pagaqui.component";
import { PlataformasComponent } from "./plataformas/plataformas.component";
import { RecargakiComponent } from "./plataformas/recargaki/recargaki.component";
import { ProductosComponent } from "./productos.component";


const productos: Routes = [
    { path: 'productos', component: ProductosComponent },
    { path: 'productos/plataformas', component: PlataformasComponent },
    { path: 'productos/plataformas/pagaqui', component: PagaquiComponent },
    { path: 'productos/plataformas/recargaki', component: RecargakiComponent },
    { path: '**', component: NoPageFoundComponent }
]

@NgModule( {
    imports: [RouterModule.forChild(productos)],
    exports: [RouterModule]
})

export class ProductosRoutingModule { }