import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-tracks-page',
	imports: [],
	standalone: true,
	templateUrl: './tracks-page.component.html',
	styleUrl: './tracks-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TracksPageComponent {}
