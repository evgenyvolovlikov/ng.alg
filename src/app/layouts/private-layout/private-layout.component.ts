import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-private-layout',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './private-layout.component.html',
	styleUrls: ['./private-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent {}
