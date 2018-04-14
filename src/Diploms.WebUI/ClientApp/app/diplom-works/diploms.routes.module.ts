import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiplomsListComponent } from './components/list/list.component';
import { DiplomsAddComponent } from './components/add/add.component';
import { DiplomsEditComponent } from './components/edit/edit.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'diploms',
        component: DiplomsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'diploms/new',
        component: DiplomsAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'diploms/:id',
        component: DiplomsEditComponent,
        canActivate: [AuthGuard]
    },
];

export const DiplomsRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);