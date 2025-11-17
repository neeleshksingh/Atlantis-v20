import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { SharedModule } from './shared.module';

@Component({
    selector: 'app-rightmenu',
    templateUrl: './app.rightmenu.component.html',
    imports: [SharedModule]
})
export class AppRightMenuComponent {
    date: Date;

    constructor(public appMain: AppMainComponent) { }
}
