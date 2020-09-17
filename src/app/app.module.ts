import { BrowserModule } from '@angular/platform-browser';

//import { NgModule } from '@angular/core';

import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
//import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DiretivaNgswitchComponent } from './diretivas/diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretivas/diretiva-ngfor/diretiva-ngfor.component';
import { FundoAmareloDirective } from './shared/diretivas/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/diretivas/highlight-mouse.directive';
import { HighlightDirective } from './shared/diretivas/highlight.directive';
import { NgElseDirective } from './shared/diretivas/ng-else.directive';
import { CursosComponent } from './cursos/cursos.component';
import { CursosServices } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { ExemplosPipesComponent } from './pipe/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipe/camel-case.pipe';
import { SettingService } from './setting.service';
import { FiltroArrayPipe } from './pipe/filtro-array.pipe';

import { FormsModule} from '@angular/forms';
import { FiltroArrayImpuroPipe } from './pipe/filtro-array-impuro.pipe';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CursosComponent,
    CriarCursoComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Serviço se declara dentro do providers que é o fornecedor
  providers: [
    CursosServices,
   // { provide: LOCALE_ID, useValue: 'pt-BR' }
    
    SettingService,{
      provide: LOCALE_ID,
      deps: [SettingService],
      useFactory: (settingService) => settingService.getLocale()
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }

}
