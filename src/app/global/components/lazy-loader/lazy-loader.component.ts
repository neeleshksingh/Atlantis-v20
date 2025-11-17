import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared.module';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
    selector: 'app-lazy-loader',
    imports: [SharedModule],
    templateUrl: './lazy-loader.component.html',
    styleUrl: './lazy-loader.component.scss'
})
export class LazyLoaderComponent {
  loading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.isLoading$;
  }
}
