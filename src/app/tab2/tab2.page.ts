import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { ISerie } from '../model/ISeries';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {



  listaSeries: ISerie[] = [
    {
      nome: 'The Good Doctor',
      lancamento: '2017',
      duracao: '43',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      genero: ['Drama'],
      pagina: '/good'
    },
    {
      nome: 'Greys Anatomy',
      lancamento: '2005',
      duracao: '43',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
      genero: ['Drama'],
      pagina: '/greys'
    },
    {
      nome: 'Os Simpsons',
      lancamento: '1989',
      duracao: '22',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ARIEA8fMTk8HLy8AyLbKyUjsqC.jpg',
      genero: ['Comedia', 'Drama', 'Animacao'],
      pagina: '/simpsons'
    },

    {
      nome: 'Cobra Kai',
      lancamento: '2018',
      duracao: '30',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/obLBdhLxheKg8Li1qO11r2SwmYO.jpg',
      genero: ['Drama'],
      pagina: '/cobra'
    },

    {
      nome: 'O Mentalista',
      lancamento: '2008',
      duracao: '43',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1ZcT5tHzUeQ7zgYecOVoWxH9FL.jpg',
      genero: ['Drama', 'Mistério'],
      pagina: '/menta'
    },

  ];


  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

    exibirSerie(serie: ISerie){
      this.dadosService.guardaDados('Serie',serie);
      this.route.navigateByUrl('/dados-serie');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, Favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}

