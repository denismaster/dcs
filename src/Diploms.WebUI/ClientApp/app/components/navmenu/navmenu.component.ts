import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, getUserAuthInfo } from '../../auth/services/auth.service';
import { AuthInfoService } from '../../auth/services/auth-info.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html'
})
export class NavMenuComponent {

    username: string | undefined;
    constructor(private authInfo: AuthInfoService, private authService: AuthService) { }

    ngOnInit() {
        this.authInfo.getUserAuthInfo().subscribe(info => {
            if (!info) {
                this.username = undefined;
                return;
            }

            this.username = "logged in"
        })
    }

    logout(){
        this.authService.logout();
    }
}
