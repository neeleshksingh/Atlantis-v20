import { Component } from '@angular/core';
import { MenuService } from './app.menu.service';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { AppBreadcrumbComponent } from "./app.breadcrumb.component";
import { AppFooterComponent } from "./app.footer.component";
import { AppRightMenuComponent } from "./app.rightmenu.component";
import { AppConfigComponent } from "./app.config.component";
import { AppTopbarComponent } from "./app.topbar.component";
import { AppMenuComponent } from "./app.menu.component";

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html',
    standalone: true,
    imports: [SharedModule, AppBreadcrumbComponent, AppFooterComponent, AppRightMenuComponent, AppConfigComponent, AppTopbarComponent, AppMenuComponent],

})
export class AppMainComponent {
    overlayMenuActive: boolean = false;

    staticMenuDesktopInactive = false;

    staticMenuMobileActive: boolean = false;

    sidebarActive = false;

    sidebarStatic = false;

    menuClick: boolean = false;

    menuHoverActive = false;

    topbarMenuActive: boolean = false;

    topbarItemClick: boolean = false;

    activeTopbarItem: any = null;

    configActive: boolean = false;

    configClick: boolean = false;

    rightMenuActive: boolean = false;

    rightMenuClick: boolean = false;

    searchActive: boolean = false;

    searchClick: boolean = false;

    activeInlineProfile: boolean = false;

    pinActive: boolean = false;

    constructor(private menuService: MenuService, public app: AppComponent) { }

    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        if (this.rightMenuActive && !this.rightMenuClick) {
            this.rightMenuActive = false;
        }

        if (this.searchActive && !this.searchClick) {
            this.searchActive = false;
        }

        if (!this.menuClick) {
            if ((this.isSlim() || this.isHorizontal()) && !this.isMobile()) {
                this.menuService.reset();
                this.menuHoverActive = false;
            }

            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.overlayMenuActive = false;
                this.staticMenuMobileActive = false;
            }
        }

        this.configClick = false;
        this.rightMenuClick = false;
        this.searchClick = false;
        this.menuClick = false;
        this.topbarItemClick = false;
    }

    onSidebarClick(event: Event) {
        this.menuClick = true;
    }

    onToggleMenu(event: Event) {
        this.menuClick = true;

        if (this.overlayMenuActive) {
            this.overlayMenuActive = false;
        }

        if (this.sidebarActive) {
            this.sidebarStatic = !this.sidebarStatic;
        }

        event.preventDefault();
    }

    onSidebarMouseOver(event: Event) {
        if (this.app.menuMode === 'sidebar' && !this.sidebarStatic) {
            this.sidebarActive = this.isDesktop();
            setTimeout(() => {
                this.pinActive = this.isDesktop();
            }, 200);
        }
    }

    onSidebarMouseLeave(event: Event) {
        if (this.app.menuMode === 'sidebar' && !this.sidebarStatic) {
            setTimeout(() => {
                this.sidebarActive = false;
                this.pinActive = false;
            }, 250);
        }
    }

    onMenuButtonClick(event: Event) {
        this.menuClick = true;

        if (this.isOverlay()) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }

        if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        } else {
            this.staticMenuMobileActive = !this.staticMenuMobileActive;
        }

        event.preventDefault();
    }

    onTopbarItemClick(event: Event, item: any) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event: Event) {
        event.preventDefault();
    }

    onRippleChange(event: any) {
        this.app.ripple = event.checked;
    }

    onConfigClick(event: Event) {
        this.configClick = true;
    }

    onRightMenuButtonClick() {
        this.rightMenuClick = true;
        this.rightMenuActive = true;
    }

    onRightMenuClick(event: Event) {
        this.rightMenuClick = true;
    }

    isStatic() {
        return this.app.menuMode === 'static';
    }

    isOverlay() {
        return this.app.menuMode === 'overlay';
    }

    isSlim() {
        return this.app.menuMode === 'slim';
    }

    isHorizontal() {
        return this.app.menuMode === 'horizontal';
    }

    isSidebar() {
        return this.app.menuMode === 'sidebar';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return window.innerWidth <= 991;
    }

}
