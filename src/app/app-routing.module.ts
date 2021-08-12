
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pagina/home/home.component';
import { PaisagensComponent } from './pagina/paisagens/paisagens.component';
import { ComunidadesComponent } from './pagina/comunidades/comunidades.component';
import { NoticiasComponent } from './pagina/noticias/noticias.component';
import { QuemSomosComponent } from './pagina/quem-somos/quem-somos.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'paisagens', component: PaisagensComponent},
  { path: 'comunidades', component: ComunidadesComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'quem-somos', component:QuemSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
