import { Cliente } from "src/app/clientes/cliente";
import { OrderDetail } from "./order-detail";

export class Order {
    id: number;
    descripcion: string;
    observacion: string;
    details: Array<OrderDetail> = [];
    cliente: Cliente;
    total: number;
    createAt: string;
}
