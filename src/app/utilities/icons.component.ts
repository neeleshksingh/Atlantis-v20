import { Component, OnInit } from '@angular/core';
import { IconService } from '../demo/service/iconservice';
import { AppBreadcrumbService } from '../app.breadcrumb.service';
import { SharedModule } from '../shared.module';
import { AppCodeModule } from "../blocks/app-code/app.code.component";

@Component({
    templateUrl: './icons.component.html',
    imports: [SharedModule, AppCodeModule],
    standalone: true
})
export class IconsComponent implements OnInit {

    icons: any[] = [];

    filteredIcons: any[] = [];

    constructor(private iconService: IconService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Icons', routerLink: ['/utilities/icons'] }
        ]);
    }

    ngOnInit() {
        this.iconService.getIcons().subscribe(data => {
            data = data.filter(value => {
                return value.icon.tags.indexOf('deprecate') === -1;
            });

            let icons = data;
            icons.sort((icon1, icon2) => {
                if (icon1.properties.name < icon2.properties.name)
                    return -1;
                else if (icon1.properties.name < icon2.properties.name)
                    return 1;
                else
                    return 0;
            });

            this.icons = icons;
            this.filteredIcons = data;
        });
    }

    onFilter(event: Event) {
        const searchText = (event.target as HTMLInputElement).value;

        if (!searchText) {
            this.filteredIcons = this.icons;
        } else {
            this.filteredIcons = this.icons.filter(icon => {
                return icon.properties.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
            });
        }
    }
}
