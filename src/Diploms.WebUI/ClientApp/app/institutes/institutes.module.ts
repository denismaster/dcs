import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InstitutesListComponent } from './components/list/list.component';
import { InstitutesRoutesModule } from './institutes.routes.module';
import { InstitutesAddComponent } from './components/add/add.component';
import { InstitutesEditComponent } from './components/edit/edit.component';
import { InstitutesService } from './services/institutes.service';

@NgModule({
    imports: [
        SharedModule,
        InstitutesRoutesModule
    ],
    declarations: [
        InstitutesListComponent,
        InstitutesAddComponent,
        InstitutesEditComponent,
    ],
    exports: [
        InstitutesListComponent,
        InstitutesAddComponent,
        InstitutesEditComponent
    ],
    providers: [ InstitutesService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstitutesModule { }