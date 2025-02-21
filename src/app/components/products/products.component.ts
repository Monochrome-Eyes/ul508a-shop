import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductsService) {}

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe((response) => {
            this.products = response;
        });
    }
}
