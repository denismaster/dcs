import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtHelper } from './helpers/jwt.helper';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { RefreshInterceptor } from './interceptors/refresh.interceptor';


@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        JwtHelper,
        AuthService,
        TokenService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RefreshInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
    ],
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [TokenService]
        };
    }
}