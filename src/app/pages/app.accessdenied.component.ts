import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './app.accessdenied.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class AppAccessdeniedComponent {
  constructor(public app: AppComponent) { }
}
