import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DepartmentsListComponent } from './components/list/list.component';
import { DepartmentsRoutesModule } from './departments.routes.module';
import { DepartmentsAddComponent } from './components/add/add.component';
import { DepartmentsEditComponent } from './components/edit/edit.component';
import { DepartmentsService } from './services/departments.service';

@NgModule({
    imports: [
        SharedModule,
        DepartmentsRoutesModule
    ],
    declarations: [
        DepartmentsListComponent,
        DepartmentsAddComponent,
        DepartmentsEditComponent,
    ],
    exports: [
        DepartmentsListComponent,
        DepartmentsAddComponent,
        DepartmentsEditComponent
    ],
    providers: [ DepartmentsService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DepartmentsModule { }