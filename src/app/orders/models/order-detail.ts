import { Product } from "./product";

export class OrderDetail {
    product: Product;
    cantidad: number = 1;
    importe: number;

    public calcularImporte(): number {
        return this.cantidad*this.product.precio;
    }
}
