import { Component, OnInit } from '@angular/core';
import { OrderService } from './services/order.service';
import { Order } from './models/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-order',
  templateUrl: './detalle-order.component.html'
})
export class DetalleOrderComponent implements OnInit {

  order: Order;
  titulo: string = 'Order';


  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.orderService.getOrder(id).subscribe(order => this.order = order)
    });
  }
}
