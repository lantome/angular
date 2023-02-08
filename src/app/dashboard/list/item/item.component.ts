import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TProducts} from "../../../types/types";
import {DashboardService} from "../../../services/dashboard.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  constructor(private dashboardService: DashboardService) {
  }

  @Input() product?: TProducts
  @Output() emitterOutput = new EventEmitter<TProducts>()


  upAnd = (product?: TProducts): void => {
    this.emitterOutput.emit(product)
    this.dashboardService.setProduct(product)
  }
}

