import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './components/list/list.component';
import { DepartmentsAddComponent } from './components/add/add.component';

const routes: Routes = [
    {
        path: 'departments',
        component: DepartmentsListComponent,
    },
    {
        path: 'departments/new',
        component: DepartmentsAddComponent,
    },
    {
        path: 'departments/:id',
        component: DepartmentsAddComponent,
    },
];

export const DepartmentsRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);