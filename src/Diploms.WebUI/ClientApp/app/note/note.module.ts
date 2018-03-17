import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoteComponent } from './components/note.component';
import { NoteRoutingModule } from './note.routing.module';
import { SharedModule } from '../shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    imports: [SharedModule, NoteRoutingModule, PdfViewerModule],
    declarations: [NoteComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NoteModule { }