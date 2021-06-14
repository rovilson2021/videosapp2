import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'good',
    loadChildren: () => import('./filmes/good/good.module').then( m => m.GoodPageModule)
  },
  {
    path: 'good',
    loadChildren: () => import('./series/good/good.module').then( m => m.GoodPageModule)
  },
  {
    path: 'cobra',
    loadChildren: () => import('./series/cobra/cobra.module').then( m => m.CobraPageModule)
  },
  {
    path: 'greys',
    loadChildren: () => import('./series/greys/greys.module').then( m => m.GreysPageModule)
  },
  {
    path: 'menta',
    loadChildren: () => import('./series/menta/menta.module').then( m => m.MentaPageModule)
  },
  {
    path: 'simpsons',
    loadChildren: () => import('./series/simpsons/simpsons.module').then( m => m.SimpsonsPageModule)
  },
  {
    path: 'dados-serie',
    loadChildren: () => import('./dados-serie/dados-serie.module').then( m => m.DadosSeriePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
