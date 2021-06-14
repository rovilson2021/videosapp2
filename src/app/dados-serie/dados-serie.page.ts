import { ISerie } from './../model/ISeries';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISerie;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.dadosService.pegarDados('serie');
    console.log('Filme Enviado', this.serie);
  }

}
