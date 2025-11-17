import { Component } from '@angular/core';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
import { SharedModule } from '../shared.module';

@Component({
    templateUrl: './app.help.component.html',
    imports: [SharedModule]
})
export class AppHelpComponent {
    text: any;

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Help', routerLink: ['/pages/help'] }
        ]);
    }
}
