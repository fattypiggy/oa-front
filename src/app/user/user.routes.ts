import { RouterModule } from '@angular/router';

import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';

export const userRoutes=[
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:"login",
		component:UserLoginComponent
	},
	{
		path:'register',
        component:UserRegisterComponent
		// loadChildren:'./home/home.module#HomeModule'
	},
	{
		path:'**',//fallback router must in the last
        component:UserLoginComponent
		// loadChildren:'./home/home.module#HomeModule'
	}
];
