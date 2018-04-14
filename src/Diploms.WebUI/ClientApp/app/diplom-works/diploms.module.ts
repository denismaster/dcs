import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DiplomsListComponent } from './components/list/list.component';
import { DiplomsRoutesModule } from './diploms.routes.module';
import { DiplomsAddComponent } from './components/add/add.component';
import { DiplomsEditComponent } from './components/edit/edit.component';
import { DiplomsService } from './services/diploms.service';
import { FilesModule } from '../files/files.module';
import { NormControlResultsComponent } from './components/norm-control-results/norm-control-results.component';

@NgModule({
    imports: [
        SharedModule,
        FilesModule,
        DiplomsRoutesModule
    ],
    declarations: [
        DiplomsListComponent,
        DiplomsAddComponent,
        DiplomsEditComponent,
        NormControlResultsComponent,
    ],
    exports: [
        DiplomsListComponent,
        DiplomsAddComponent,
        DiplomsEditComponent
    ],
    providers: [ DiplomsService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DiplomsModule { }