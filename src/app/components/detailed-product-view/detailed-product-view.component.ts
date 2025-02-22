import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-detailed-product-view',
    templateUrl: './detailed-product-view.component.html',
    styleUrls: ['./detailed-product-view.component.scss'],
})
export class DetailedProductViewComponent implements OnInit {
    currentProduct: Product = new Product();

    constructor(
        private actRoute: ActivatedRoute,
        private productService: ProductsService
    ) {}

    ngOnInit(): void {
        // console.log(this.actRoute.snapshot.paramMap.get('productId') ?? '');
        let id: number = 0;
        id = parseInt(this.actRoute.snapshot.paramMap.get('id') ?? '');
        this.productService.getProductById(id).subscribe((response) => {
            this.currentProduct = response;
        });
    }
}
