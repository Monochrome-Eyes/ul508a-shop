import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductsService) {}

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe((response) => {
            for (let i = 0; i < 3; ++i) {
                this.products[i] = response[i];
                console.log(this.products[i]);
            }
        });
    }
}
