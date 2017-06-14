import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
    },
    {
        path: "employee",
        component: EmployeeComponent
    },
    {
        path: 'home',
        component: HomeComponent
        // loadChildren:'./home/home.module#HomeModule'
    },
    {
        path: 'login',
        component: UserLoginComponent,
        // loadChildren:'./user/user.module#UserModule'
    },
    {
        path: 'register',
        // loadChildren:'./user/user.module#UserModule'
        component: UserRegisterComponent
    },
    {
        path: '**',//fallback router must in the last
        component: EmployeeComponent
        // loadChildren:'./home/home.module#HomeModule'
    }
];
