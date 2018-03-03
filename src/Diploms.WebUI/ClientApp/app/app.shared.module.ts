import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';

import { SharedModule } from './shared/shared.module';
import { DepartmentsModule } from './departments/departments.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AlertService } from './shared/alert/services/alert.service';
import { InstitutesModule } from './institutes/institutes.module';
import { SpecialitiesModule } from './specialities/specialities.module';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        SignInComponent,
        HomeComponent
    ],
    providers:[
        AlertService
    ],
    imports: [
        HttpClientModule,
        SharedModule,
        InstitutesModule,
        DepartmentsModule,
        SpecialitiesModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'sign-in', component: SignInComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    schemas : [ NO_ERRORS_SCHEMA ]
})
export class AppModuleShared {
}
