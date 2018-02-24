import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutesListComponent } from './components/list/list.component';
import { InstitutesAddComponent } from './components/add/add.component';
import { InstitutesEditComponent } from './components/edit/edit.component';

const routes: Routes = [
    {
        path: 'institutes',
        component: InstitutesListComponent,
    },
    {
        path: 'institutes/new',
        component: InstitutesAddComponent,
    },
    {
        path: 'institutes/:id',
        component: InstitutesEditComponent,
    },
];

export const InstitutesRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);