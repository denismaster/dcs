import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SpecialitiesListComponent } from './components/list/list.component';
import { SpecialitiesRoutesModule } from './specialities.routes.module';
import { SpecialitiesAddComponent } from './components/add/add.component';
import { SpecialitiesEditComponent } from './components/edit/edit.component';
import { SpecialitiesService } from './services/specialities.service';

@NgModule({
    imports: [
        SharedModule,
        SpecialitiesRoutesModule
    ],
    declarations: [
        SpecialitiesListComponent,
        SpecialitiesAddComponent,
        SpecialitiesEditComponent,
    ],
    exports: [
        SpecialitiesListComponent,
        SpecialitiesAddComponent,
        SpecialitiesEditComponent
    ],
    providers: [ SpecialitiesService ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SpecialitiesModule { }