import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
    edittedProduct: Product = new Product();

    constructor(
        private productService: ProductsService,
        private actRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        // console.log(this.actRoute.snapshot.paramMap);
        let id = parseInt(this.actRoute.snapshot.paramMap.get('id') ?? '');
        this.productService.getProductById(id).subscribe((response) => {
            this.edittedProduct = response;
        });
    }

    onSubmit(): void {
        this.productService
            .editProductById(this.edittedProduct.id, this.edittedProduct)
            .subscribe((response) => {
                console.log(response);
                this.router.navigateByUrl('/products');
            });
    }
}
