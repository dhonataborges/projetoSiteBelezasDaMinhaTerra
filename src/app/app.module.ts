import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pagina/home/home.component';
import { PaisagensComponent } from './pagina/paisagens/paisagens.component';
import { ComunidadesComponent } from './pagina/comunidades/comunidades.component';
import { NoticiasComponent } from './pagina/noticias/noticias.component';
import { QuemSomosComponent } from './pagina/quem-somos/quem-somos.component';
import { MenuComponent } from './pagina/menu/menu.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaisagensComponent,
    ComunidadesComponent,
    NoticiasComponent,
    QuemSomosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
