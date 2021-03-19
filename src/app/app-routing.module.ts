import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu-list',
    loadChildren: () => import('./pages/menu-items/menu-items.module').then(mod => mod.MenuItemsModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then(mod => mod.FavoriteModule)
  },
  {
    path: '',
    redirectTo: '/menu-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
