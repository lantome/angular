import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {TProducts} from "../../types/types";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {}

  product?: TProducts

  ngOnInit(): void {
    this.product = this.dashboardService.getProduct()
  }

}
