import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:"employee",
		component:EmployeeComponent
	},
	{
		path:'home',
        component:HomeComponent
		// loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'**',//fallback router must in the last
        component:HomeComponent
		// loadChildren:'./home/home.module#HomeModule'
	}
];
