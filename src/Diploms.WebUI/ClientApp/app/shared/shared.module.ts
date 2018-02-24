import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TextInputComponent } from './forms/input-text/input-text.component';
import { LoadingIndicatorComponent } from './loading-indicator';
import { AlertComponent } from './alert/alert.component';
import { OkCancelEditButtonsComponent } from './edit-buttons/ok-cancel-edit-buttons.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { RTModule } from 'right-angled/right-angled';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableStateComponent } from './table-state/table-state.component';
import { TableFooterComponent } from './table-footer.component';
import { InputSelectComponent } from './forms/input-select/input-select.component';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [
        CommonModule, 
        RouterModule, 
        FormsModule, 
        ReactiveFormsModule,
        RTModule
    ],
    declarations: [
        CardComponent,
        LoadingIndicatorComponent,
        TextInputComponent,
        InputSelectComponent,
        OkCancelEditButtonsComponent,
        ErrorListComponent,
        AlertComponent,
        TablePaginationComponent,
        TableStateComponent,
        TableFooterComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        RTModule,
        CardComponent,
        OkCancelEditButtonsComponent,
        ErrorListComponent,
        LoadingIndicatorComponent,
        TextInputComponent,
        InputSelectComponent,
        AlertComponent,
        TablePaginationComponent,
        TableStateComponent,
        TableFooterComponent,
    ],
    providers: [
    ],
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