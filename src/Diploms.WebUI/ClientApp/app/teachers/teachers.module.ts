import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TeachersListComponent } from './components/list/list.component';
import { TeachersRoutesModule } from './teachers.routes.module';
import { TeachersAddComponent } from './components/add/add.component';
import { TeachersEditComponent } from './components/edit/edit.component';
import { TeachersService } from './services/teachers.service';

@NgModule({
    imports: [
        SharedModule,
        TeachersRoutesModule
    ],
    declarations: [
        TeachersListComponent,
        TeachersAddComponent,
        TeachersEditComponent,
    ],
    exports: [
        TeachersListComponent,
        TeachersAddComponent,
        TeachersEditComponent
    ],
    providers: [ TeachersService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TeachersModule { }