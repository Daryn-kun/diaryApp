import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DiaryEditComponent} from './diary-edit/diary-edit.component';
import {FormComponent} from './form/form.component';
import {ViewAllComponent} from './view-all/view-all.component';
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'diary-edit', component: DiaryEditComponent},
  {path: 'form', component: FormComponent},
  {path: 'view-all', component: ViewAllComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
