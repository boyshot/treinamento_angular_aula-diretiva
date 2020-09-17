import { NgModule } from '@angular/core';
import { CriarCursoComponent } from './criar-curso.component';
import { CommonModule } from '@angular/common';
import { CursosServices } from '../cursos/cursos.service';

@NgModule({
    declarations: [
        CriarCursoComponent
    ],
    imports: [
        CommonModule
    ],
    //Serviço se declara dentro do providers que é o fornecedor
    providers: [CursosServices],
    exports:[CriarCursoComponent]

})
export class AppModule { }
