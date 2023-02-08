import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {BasketComponent} from "./basket/basket.component";
import {DashboardComponent} from "./dashboard.component";
import { ItemComponent } from './list/item/item.component';
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "../pipes/filter.pipe";


@NgModule({
  declarations: [
    ListComponent,
    BasketComponent,
    DashboardComponent,
    ItemComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class DashboardModule {}
