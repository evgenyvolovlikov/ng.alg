import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	imports: [],
	standalone: true,
	templateUrl: './landing-page.component.html',
	styleUrl: './landing-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {}
