import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TextInputComponent } from './forms/input-text/input-text.component';
import { LoadingIndicatorComponent } from './loading-indicator';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    declarations: [
        CardComponent,
        LoadingIndicatorComponent,
        TextInputComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        CardComponent,
        LoadingIndicatorComponent,
        TextInputComponent,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}