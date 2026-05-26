import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [],
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	protected readonly title = signal('ngalg');
}
