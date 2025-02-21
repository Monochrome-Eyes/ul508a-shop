import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // imports: [MatCardModule],
})
export class CardComponent {
    @Input()
    imgUrl: string = '';

    @Input()
    description: string = '';
}
