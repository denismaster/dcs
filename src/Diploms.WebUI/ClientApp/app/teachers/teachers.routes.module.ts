import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersListComponent } from './components/list/list.component';
import { TeachersAddComponent } from './components/add/add.component';
import { TeachersEditComponent } from './components/edit/edit.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'teachers',
        component: TeachersListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'teachers/new',
        component: TeachersAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'teachers/:id',
        component: TeachersEditComponent,
        canActivate: [AuthGuard]
    },
];

export const TeachersRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);