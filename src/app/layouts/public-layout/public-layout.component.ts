import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-public-layout',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './public-layout.component.html',
	styleUrls: ['./public-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayoutComponent {}
