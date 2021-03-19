import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { MenuItemsModule } from '../menu-items/menu-items.module';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MenuItemsModule,
    DialogModule
  ]
})
export class FavoriteModule { }
