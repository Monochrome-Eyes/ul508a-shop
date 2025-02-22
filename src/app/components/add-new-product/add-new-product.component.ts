import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-add-new-product',
    templateUrl: './add-new-product.component.html',
    styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
    newProduct: Product = new Product();

    constructor(
        private productService: ProductsService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    onSubmit(): void {
        this.productService
            .createNewProduct(this.newProduct)
            .subscribe((response) => {
                console.log(response);
                this.router.navigateByUrl('/products');
            });
    }
}
