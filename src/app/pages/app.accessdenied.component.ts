import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared.module';

@Component({
    selector: 'app-accessdenied',
    templateUrl: './app.accessdenied.component.html',
    imports: [SharedModule],
    standalone: true
})
export class AppAccessdeniedComponent {
  constructor(public app: AppComponent) { }
}
