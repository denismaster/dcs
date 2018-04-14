import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileListComponent } from './components/file-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [FileListComponent],
    imports: [CommonModule, SharedModule],
    exports: [FileListComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FilesModule { }