import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-error',
  templateUrl: './app.error.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class AppErrorComponent {
  constructor(public app: AppComponent) { }
}
