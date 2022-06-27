import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.css']
})
export class BingoComponent implements OnInit {

  start = 1;
  end = 80;
  numbers: number[] = [];
  gone: number[] = [];
  tela = 'INICIAR';
  btnDisable = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.start = p['start'];
      this.end = p['end'];

      if (this.start < 1 || this.start > 99 || this.end < 1 || this.end > 100 || this.start >= this.end) {
        this.start = 1; this.end = 100;
      }

      this.init();
    })
  }

  private init() {
    this.numbers = [];
    this.gone = [];
    for (let i = this.start; i <= this.end; i++) this.numbers.push(i);
    this.tela = 'INICIAR';
    this.btnDisable = false;
  }

  gerar() {
    if (this.numbers.length > 0) {
      const index_sorteado = Math.floor(Math.random()*this.numbers.length);
      const valor = this.numbers[index_sorteado];
      this.numbers.splice(index_sorteado, 1);
      this.gone.push(valor);
      this.tela = '' + valor;
    } else {
      this.tela = 'ACABOU!';
      this.btnDisable = true;
    }
  }
}
