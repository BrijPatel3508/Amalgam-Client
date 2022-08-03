import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModuleModule } from './shared/share-module.module';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppSharedModule } from './app-shared/app-shared.module';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent
    ],
    imports: [
        StoreModule.forRoot({
            router: routerReducer,
        }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        StoreRouterConnectingModule.forRoot({
            routerState: RouterState.Minimal,
        }),
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ShareModuleModule,
        AppSharedModule,
        ShareModuleModule,
        MatListModule,
        MatDialogModule,
        SocialLoginModule
    ],
    providers: [HttpClientModule,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '136130410877-tt3b9lf5mr97g48m82q0ajnahf8spie1.apps.googleusercontent.com'
                        )
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
