import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-notfound',
  templateUrl: './app.notfound.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class AppNotfoundComponent {
  constructor(public app: AppComponent) { }
}
