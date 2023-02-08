import {Injectable} from '@angular/core';
import {TProducts} from "../types/types";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  product?: TProducts


  getProducts(): Observable<TProducts[]> {
    return this.http.get<TProducts[]>('http://fakestoreapi.com/products')
  }

  getProduct() {
    return this.product
  }

  setProduct(product?: TProducts) {
    return this.product = product
  }
}
