import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { AuthGuard } from './features/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/register/register/register.module#RegisterModule' },
  { path: 'user', loadChildren: './pages/user/user/user.module#UserModule' },
  {
    path: 'admin',
    loadChildren: './pages/administration/administration/administration.module#AdministrationModule',
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
