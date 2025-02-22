import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // imports: [MatCardModule],
})
export class CardComponent {
    constructor(
        private productService: ProductsService,
        private router: Router
    ) {}

    @Input()
    currentProduct: Product = new Product();

    deleteProduct(): void {
        this.productService
            .deleteProductById(this.currentProduct.id)
            .subscribe((response) => {
                console.log(response);
                window.location.reload();
            });
    }
}
