import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule}from '@angular/material/input';
import { MatFormFieldModule}from '@angular/material/form-field';
import { MatButtonModule}from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { IndexPageComponent } from './components/index-page/index-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SoldeComponent } from './components/solde/solde.component';
import { AboutComponent } from './components/about/about.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
    IndexPageComponent,
    SoldeComponent,
    AboutComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    NgbModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
