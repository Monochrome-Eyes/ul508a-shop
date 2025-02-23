import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-price-selector',
    templateUrl: './price-selector.component.html',
    styleUrls: ['./price-selector.component.scss'],
})
export class PriceSelectorComponent {
    @Output()
    selectionRange = new EventEmitter();

    selectionChange(event: any) {
        console.log('price-selector event', event);
        this.selectionRange.emit(event.value);
    }

    prices: any = [
        { value: { lower: 0, upper: 0 }, viewValue: 'None' },
        { value: { lower: 0, upper: 300 }, viewValue: '0-300' },
        { value: { lower: 300, upper: 500 }, viewValue: '300-500' },
        { value: { lower: 500, upper: 700 }, viewValue: '500-700' },
        { value: { lower: 700, upper: 1000 }, viewValue: '700-1000' },
        { value: { lower: 1000, upper: 15000 }, viewValue: '1000-15000' },
    ];
}
