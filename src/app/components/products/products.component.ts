import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    setPriceRange(range: any) {
        console.log('product filter', range);
        console.log('type of range.upper', typeof range.upper, range.upper);
        if (range.lower == 0 && range.upper == 0) {
            this.productService.getAllProducts().subscribe((response) => {
                this.products = response;
            });
        } else {
            this.productService
                .getProductsByPriceRange(range.lower, range.upper)
                .subscribe((response) => {
                    this.products = response;
                });
        }
    }

    products: Product[] = [];

    constructor(private productService: ProductsService) {}

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe((response) => {
            this.products = response;
        });
    }
}
