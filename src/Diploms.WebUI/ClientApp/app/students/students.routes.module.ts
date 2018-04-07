import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/list/list.component';
import { StudentsAddComponent } from './components/add/add.component';
import { StudentsEditComponent } from './components/edit/edit.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'students',
        component: StudentsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'students/new',
        component: StudentsAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'students/:id',
        component: StudentsEditComponent,
        canActivate: [AuthGuard]
    },
];

export const StudentsRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);