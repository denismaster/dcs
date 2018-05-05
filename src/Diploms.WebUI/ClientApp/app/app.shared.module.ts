import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './components/counter/counter.component';

import { SharedModule } from './shared/shared.module';
import { DepartmentsModule } from './departments/departments.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AlertService } from './shared/alert/services/alert.service';
import { InstitutesModule } from './institutes/institutes.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { LoginGuard } from './auth/guards/login.guard';
import { UserMenuComponent } from './components/navmenu/user-menu.component';
import { NormControlModule } from './norm-control/norm-control.module';
import { NoteModule } from './note/note.module';
import { GroupsModule } from './groups/groups.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { DiplomsModule } from './diplom-works/diploms.module';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        UserMenuComponent,
        CounterComponent,
        SignInComponent,
        HomeComponent,
    ],
    providers: [
        AlertService,
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        AuthModule,
        AuthModule.forRoot(),
        SharedModule.forRoot(),
        InstitutesModule,
        DepartmentsModule,
        SpecialitiesModule,
        GroupsModule,
        TeachersModule,
        StudentsModule,
        DiplomsModule,
        NormControlModule,
        NoteModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'sign-in', component: SignInComponent, canActivate: [LoginGuard] },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModuleShared {
}
