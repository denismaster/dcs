import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../../auth/services/auth.store';
import { AuthService } from '../../auth/services/auth.service';

@Component({
    selector: 'UserMenu',
    template: `<ul class="nav navbar-nav">
        <li class="dropdown" *ngIf="username">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {{username}}
                <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#">
                        <span class='fa fa-gear'></span>
                        Настройки
                    </a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                    <a (click)="logout()">
                        <span class='fa fa-sign-out'></span>
                        Выйти
                    </a>
                </li>
            </ul>
        </li>
        <li [routerLinkActive]="['link-active']" *ngIf="!username">
            <a [routerLink]="['/sign-in']">
                <span class='fa fa-sign-in'></span> Войти
            </a>
        </li>
    </ul>`,
    styles: [``]
})
export class UserMenuComponent implements OnInit {

    username: string | undefined;
    constructor(private auth: AuthStore, private authService: AuthService) { }

    ngOnInit() {
        this.auth.authStateChanges$.subscribe(info => {
            if (!info) {
                this.username = undefined;
                return;
            }
            this.username = "logged in"
        })
    }

    logout() {
        this.authService.logout();
    }
}