import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, getUserAuthInfo } from '../../auth/services/auth.service';
import { AuthStore } from '../../auth/services/auth.store';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html'
})
export class NavMenuComponent { }
