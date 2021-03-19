import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteModule } from './pages/favorite/favorite.module';
import { MenuItemsModule } from './pages/menu-items/menu-items.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuItemsModule,
    FavoriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
