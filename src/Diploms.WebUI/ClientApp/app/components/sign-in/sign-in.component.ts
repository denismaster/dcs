import { Component } from '@angular/core';
import { AlertService } from '../../shared/alert/services/alert.service';
import { AuthRequest, AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {
    constructor(private authService:AuthService, private router: Router ,private alertService: AlertService) { }

    model= {
        login: "", password:"", remember:true
     };
    login(){
        const authRequest: AuthRequest = {
            userName: this.model.login,
            password: this.model.password,
            rememberMe: this.model.remember
        };
        this.authService.login(authRequest).subscribe(_=>{
            this.router.navigate(['/']);
        }, error=>this.alertService.error("Неверный логин или пароль"));
    }
}
