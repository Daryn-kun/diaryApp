import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "../app.module";
import {ResolveGuardService} from "../guards/resolve-guard.service";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'create', component: UserComponent},
  {path: 'group', component: GroupComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [AdminComponent, UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [AdminComponent, UserComponent, GroupComponent, DashboardComponent, RouterModule]
})
export class AdminModule { }
