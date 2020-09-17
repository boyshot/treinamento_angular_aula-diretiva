import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'java como programar',
    rating: 4.325577,
    numeroPaginas: 500,
    preco: 55.90,
    dataLancamento: new Date(2020, 1, 1),
    url: 'https://www.amazon.com.br/Java%C2%AE-como-programar-Paul-Deitel/dp/8543004799'
  }

  filtro: string = '';

  livros: string[] = ['Java', 'Angular'];

  constructor() { }

  ngOnInit(): void {
  }

  valueAsync = new Promise((resolve, reject) => (
    setTimeout(() => resolve('Valor assincrono'), 2000)
  ));

  valorAsync2 =  interval(4000).pipe(map(valor => 'Valor assíncrono 2')); 
  

  addCurso(value: string) {
    this.livros.push(value);

    console.log(this.livros);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined ||
      this.filtro.trim() === '')
      return this.livros;

    return this.livros.filter((x) => {
      return x.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0;

    }
    );
  }
}
