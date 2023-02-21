import { Order } from '../orders/models/order'

export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    createAt: string;
    email: string;
    foto: string;
    orders: Array<Order> =[];
}

