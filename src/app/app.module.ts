import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Application Components
import { AppCodeModule } from './blocks/app-code/app.code.component';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app.menu.component';
// Demo services
import { CountryService } from './demo/service/countryservice';
import { CustomerService } from './demo/service/customerservice';
import { EventService } from './demo/service/eventservice';
import { IconService } from './demo/service/iconservice';
import { NodeService } from './demo/service/nodeservice';
import { PhotoService } from './demo/service/photoservice';
import { ProductService } from './demo/service/productservice';

// Application services
import { MenuService } from './app.menu.service';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { ConfigService } from './demo/service/app.config.service';
import { SharedModule } from './shared.module';
import { ProgressBarInterceptor } from './shared/interceptors/progress-bar.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { LoadingService } from './shared/services/loading.service';
import { AppRoutingModule } from './app-routing.module';
import { AppMainComponent } from './app.main.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppFooterComponent } from './app.footer.component';
import { AppRightMenuComponent } from './app.rightmenu.component';
import { AppConfigComponent } from './app.config.component';

@NgModule({
    declarations: [
        AppComponent,
        AppMainComponent,
        AppBreadcrumbComponent,
        AppFooterComponent,
        AppRightMenuComponent,
        AppConfigComponent
    ],
    imports: [
        SharedModule,
        AppCodeModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, AppBreadcrumbService, ConfigService,

        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // { provide: HTTP_INTERCEPTORS, useClass: ProgressBarInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        LoadingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
