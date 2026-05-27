import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-dashboard-page',
	imports: [],
	standalone: true,
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
