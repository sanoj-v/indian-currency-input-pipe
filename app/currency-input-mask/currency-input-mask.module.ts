import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyInputMaskDirective } from './currency-input-mask.directive';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
      CurrencyInputMaskDirective,
      CurrencyPipe
    ],
    exports: [
      CurrencyInputMaskDirective,
      CurrencyPipe
    ]
})
export class CurrencyInputModule {
}