import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsListComponent } from './components/list/list.component';
import { GroupsAddComponent } from './components/add/add.component';
import { GroupsEditComponent } from './components/edit/edit.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
    {
        path: 'groups',
        component: GroupsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'groups/new',
        component: GroupsAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'groups/:id',
        component: GroupsEditComponent,
        canActivate: [AuthGuard]
    },
];

export const GroupsRoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);