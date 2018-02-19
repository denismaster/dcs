import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsListComponent } from './components/list/list.component';
import { DepartmentsAddComponent } from './components/add/add.component';
import { DepartmentsEditComponent } from './components/edit/edit.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'departments',
        component: DepartmentsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'departments/new',
        component: DepartmentsAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'departments/:id',
        component: DepartmentsEditComponent,
        canActivate: [AuthGuard]
    },
];

export const DepartmentsRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);