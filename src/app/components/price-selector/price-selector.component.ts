import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observer } from 'rxjs';

@Component({
    selector: 'app-price-selector',
    templateUrl: './price-selector.component.html',
    styleUrls: ['./price-selector.component.scss'],
})
export class PriceSelectorComponent {
    @Output()
    selectionRange = new EventEmitter();

    selectionChange(event: any) {
        this.selectionRange.emit(event.value);
    }

    prices: any = [
        { value: { lower: 0, upper: 0 }, viewValue: 'None' },
        { value: { lower: 0, upper: 300 }, viewValue: '0-300' },
        { value: { lower: 300, upper: 500 }, viewValue: '300-500' },
        { value: { lower: 500, upper: 700 }, viewValue: '500-700' },
        { value: { lower: 700, upper: 10000 }, viewValue: '700-10000' },
    ];
}
