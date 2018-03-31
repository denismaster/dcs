import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GroupsListComponent } from './components/list/list.component';
import { GroupsRoutesModule } from './groups.routes.module';
import { GroupsAddComponent } from './components/add/add.component';
import { GroupsEditComponent } from './components/edit/edit.component';
import { GroupsService } from './services/groups.service';

@NgModule({
    imports: [
        SharedModule,
        GroupsRoutesModule
    ],
    declarations: [
        GroupsListComponent,
        GroupsAddComponent,
        GroupsEditComponent,
    ],
    exports: [
        GroupsListComponent,
        GroupsAddComponent,
        GroupsEditComponent
    ],
    providers: [ GroupsService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class GroupsModule { }