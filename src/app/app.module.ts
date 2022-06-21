import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarCarroComponent } from './cadastrar-carro/cadastrar-carro.component';
import { ListarCarroComponent } from './listar-carro/listar-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarCarroComponent,
    ListarCarroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
