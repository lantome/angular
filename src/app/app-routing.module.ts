import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasketComponent} from "./dashboard/basket/basket.component";
import {ListComponent} from "./dashboard/list/list.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'basket', component: BasketComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
