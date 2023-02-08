import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TProducts} from "../../types/types";
import {DashboardService} from "../../services/dashboard.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() addBasket = new EventEmitter<TProducts>()
  constructor(private dashboardService: DashboardService) {
  }
  value: string = ''
  products$?: Observable<TProducts[]>
  loading = false

  product?: TProducts


  ngOnInit(): void {
    this.loading = true
    this.products$ = this.dashboardService.getProducts().pipe(
      tap(() => {
        this.loading = false
      })
    )
  }


  outputHandler = (product: TProducts) => {
    this.product = product
  }
}
