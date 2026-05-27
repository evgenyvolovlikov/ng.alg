import { Routes } from '@angular/router';
import { APP_ROUTES } from '@shared/config/routes.config';

export const appRoutes: Routes = [
	// PUBLIC
	{
		path: APP_ROUTES.ROOT,
		loadComponent: () =>
			import('../layouts/public-layout/public-layout.component').then(
				({ PublicLayoutComponent }) => PublicLayoutComponent,
			),
		children: [
			{
				path: APP_ROUTES.LANDING,
				loadComponent: () =>
					import('@pages/landing-page').then(
						({ LandingPageComponent }) => LandingPageComponent,
					),
			},
		],
	},

	// PRIVATE
	{
		path: APP_ROUTES.ROOT,
		loadComponent: () =>
			import('../layouts/private-layout/private-layout.component').then(
				({ PrivateLayoutComponent }) => PrivateLayoutComponent,
			),
		children: [
			{
				path: APP_ROUTES.DASHBOARD,
				loadComponent: () =>
					import('@pages/dashboard-page').then(
						({ DashboardPageComponent }) => DashboardPageComponent,
					),
			},
			{
				path: APP_ROUTES.TRACKS,
				loadComponent: () =>
					import('@pages/tracks-page').then(
						({ TracksPageComponent }) => TracksPageComponent,
					),
			},
			{
				path: APP_ROUTES.PROFILE,
				loadComponent: () =>
					import('@pages/profile-page').then(
						({ ProfilePageComponent }) => ProfilePageComponent,
					),
			},
		],
	},

	// NOT_FOUND
	{
		path: APP_ROUTES.NOT_FOUND,
		redirectTo: APP_ROUTES.LANDING,
		pathMatch: 'full',
	},
];
