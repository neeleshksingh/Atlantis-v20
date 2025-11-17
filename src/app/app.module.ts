import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { MenuService } from './app.menu.service';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { ConfigService } from './demo/service/app.config.service';
import { ProgressBarInterceptor } from './shared/interceptors/progress-bar.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { LoadingService } from './shared/services/loading.service';
import { RippleModule } from 'primeng/ripple';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
    declarations: [
        AppComponent,
    ],

    imports: [
        AppMainComponent,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        RippleModule,
    ],

    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: ProgressBarInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        LoadingService,
        MenuService,
        AppBreadcrumbService,
        ConfigService,
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.p-dark',
                    cssLayer: false
                }
            },
            ripple: true
        })
    ],

    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }