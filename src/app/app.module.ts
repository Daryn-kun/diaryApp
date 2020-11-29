import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {GetstartedComponent} from './getstarted/getstarted.component';
import {DiaryComponent} from './diary/diary.component';
import {DiaryEditComponent} from './diary-edit/diary-edit.component';
import {FormComponent} from './form/form.component';
import {FormsModule} from "@angular/forms";
import {ViewAllComponent} from './view-all/view-all.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NaturalPipe} from "./custompipe/natural.pipe";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GetstartedComponent,
    DiaryComponent,
    DiaryEditComponent,
    FormComponent,
    ViewAllComponent,
    NaturalPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [],
  exports: [
    NaturalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
