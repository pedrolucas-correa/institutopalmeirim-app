import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

//   {
//     path: 'home',
//     canActivate: [AuthGuard],
//     // component: FullLayoutComponent,
//     children: [
//       {
//         path: '',
//         // component: HomeComponent,
//       },
//     ],
//   },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: `**`, redirectTo: '/home', pathMatch: 'full' },
];
