import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared.module';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
    imports: [SharedModule]
})
export class AppLoginComponent {
  constructor(public app: AppComponent) { }
}
