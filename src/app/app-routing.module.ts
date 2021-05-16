import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'isobar',
    loadChildren: () => import('./isobar/isobar.module').then( m => m.IsobarPageModule)
  },
  {
    path: 'fronts',
    loadChildren: () => import('./fronts/fronts.module').then( m => m.FrontsPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'frontpics',
    loadChildren: () => import('./frontpics/frontpics.module').then( m => m.FrontpicsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
