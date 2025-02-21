import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // imports: [MatCardModule],
})
export class CardComponent {
    @Input()
    currentProduct: Product = new Product();
}
