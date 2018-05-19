import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NormControlComponent } from './components/norm-control.component';
import { NormControlRoutingModule } from './norm-control.routes.module';
import { SharedModule } from '../shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NormControlService } from './services/norm-control.service';

@NgModule({
    imports: [SharedModule, NormControlRoutingModule, PdfViewerModule],
    declarations: [NormControlComponent],
    providers: [NormControlService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NormControlModule { }