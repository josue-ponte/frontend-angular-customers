import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private urlEndPoint: string = 'http://localhost:8080/api/orders';
  constructor(private http: HttpClient) { }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlEndPoint}/${id}`);
  }
}
