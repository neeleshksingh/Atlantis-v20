import { Component, OnInit } from '@angular/core';
import { ConfigService } from './demo/service/app.config.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent implements OnInit {

    menuMode = 'sidebar';

    layout = 'blue';

    theme = 'blue';

    ripple: boolean = true;

    colorScheme = 'dark';

    constructor(private configService: ConfigService) { }

    ngOnInit() {
        this.ripple = true;

        console.log('App initializing with colorScheme:', this.colorScheme);

        // Set initial dark mode for PrimeNG 20
        this.applyTheme();

        // Update the config service to match the initial state
        this.configService.updateConfig({
            theme: this.theme,
            dark: this.colorScheme === 'dark',
            inputStyle: '',
            ripple: this.ripple
        });

        console.log('App initialization complete');
    }

    applyTheme() {
        const isDark = this.colorScheme === 'dark';

        // Remove existing classes first to ensure clean state
        document.documentElement.classList.remove('p-dark');
        document.body.classList.remove('p-dark');

        // Apply classes for dark mode
        if (isDark) {
            document.documentElement.classList.add('p-dark');
            document.body.classList.add('p-dark');
        }

        console.log('AppComponent theme applied:', this.colorScheme, 'isDark:', isDark);
    }
}
