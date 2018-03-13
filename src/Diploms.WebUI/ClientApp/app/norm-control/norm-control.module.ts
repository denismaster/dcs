import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NormControlComponent } from './components/norm-control.component';
import { NormControlRoutingModule } from './norm-control.routes.module';
import { SharedModule } from '../shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    imports: [SharedModule, NormControlRoutingModule, PdfViewerModule],
    declarations: [NormControlComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NormControlModule { }