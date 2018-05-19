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
import { TextAreaComponent } from './forms/input-area/input-area.component';
import { DateInputComponent } from './forms/input-date/input-date.component';
import { FileListComponent } from '../files/components/file-list.component';
import { FilesModule } from '../files/files.module';
import { AuthModule } from '../auth/auth.module';
import { CommentsComponent } from './comments/comments.component';
import { WideStore } from './screen/wide.store';
import { CheckboxInputComponent } from './forms/input-checkbox/input-checkbox.component';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [
        CommonModule, 
        RouterModule, 
        FormsModule, 
        ReactiveFormsModule,
        RTModule,
        AuthModule,
    ],
    declarations: [
        CardComponent,
        LoadingIndicatorComponent,
        TextInputComponent,
        TextAreaComponent,
        CheckboxInputComponent,
        DateInputComponent,
        InputSelectComponent,
        OkCancelEditButtonsComponent,
        ErrorListComponent,
        AlertComponent,
        TablePaginationComponent,
        TableStateComponent,
        TableFooterComponent,
        CommentsComponent,
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
        TextAreaComponent,
        CheckboxInputComponent,
        DateInputComponent,
        InputSelectComponent,
        AlertComponent,
        TablePaginationComponent,
        TableStateComponent,
        TableFooterComponent,
        CommentsComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                WideStore
            ]
        };
    }
}