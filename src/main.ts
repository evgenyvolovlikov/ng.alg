import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/providers/app.config';

bootstrapApplication(AppComponent, appConfig).catch((e) => console.warn(e));
