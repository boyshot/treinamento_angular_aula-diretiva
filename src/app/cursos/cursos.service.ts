import { Injectable } from '@angular/core';

@Injectable()
export class CursosServices {

    private cursos: string[] = ['Angular', 'Java', 'PHP'];

    constructor() {
        console.log("criou CursosServices!");
    }

    getCursos() {
        return this.cursos;
    }

    newCurso(curso: string) {
        if (curso != null && curso != "")
            this.cursos.push(curso);
    }
}