import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemsRoutingModule } from './menu-items-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { HeaderComponent } from '../../shared/header/header.component';

import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ServerCallsService } from 'src/app/services/server-calls.service';

@NgModule({
  declarations: [MenuListComponent, HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    MenuItemsRoutingModule,
    HttpClientModule,
    AccordionModule,
    RippleModule,
    DialogModule,
    ButtonModule
  ],
  providers: [ServerCallsService]
})

export class MenuItemsModule { }
