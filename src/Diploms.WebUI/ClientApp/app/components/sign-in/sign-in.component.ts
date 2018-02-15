import { Component } from '@angular/core';
import { AlertService } from '../../shared/alert/services/alert.service';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {
    constructor(private alertService: AlertService) { }

    model:any={};
    login(){
        this.alertService.error("Неверный логин или пароль");
    }
}
