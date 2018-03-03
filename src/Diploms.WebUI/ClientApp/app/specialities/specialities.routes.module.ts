import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialitiesListComponent } from './components/list/list.component';
import { SpecialitiesAddComponent } from './components/add/add.component';
import { SpecialitiesEditComponent } from './components/edit/edit.component';

const routes: Routes = [
    {
        path: 'specialities',
        component: SpecialitiesListComponent,
    },
    {
        path: 'specialities/new',
        component: SpecialitiesAddComponent,
    },
    {
        path: 'specialities/:id',
        component: SpecialitiesEditComponent,
    },
];

export const SpecialitiesRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);