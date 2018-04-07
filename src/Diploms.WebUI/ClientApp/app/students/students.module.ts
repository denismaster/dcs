import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentsListComponent } from './components/list/list.component';
import { StudentsRoutesModule } from './students.routes.module';
import { StudentsAddComponent } from './components/add/add.component';
import { StudentsEditComponent } from './components/edit/edit.component';
import { StudentsService } from './services/students.service';

@NgModule({
    imports: [
        SharedModule,
        StudentsRoutesModule
    ],
    declarations: [
        StudentsListComponent,
        StudentsAddComponent,
        StudentsEditComponent,
    ],
    exports: [
        StudentsListComponent,
        StudentsAddComponent,
        StudentsEditComponent
    ],
    providers: [ StudentsService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class StudentsModule { }