import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatMenuModule } from '@angular/material/menu';
import { CasesComponent } from './components/cases/cases.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    CasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    //MatToolbarModule,
    //MatButtonModule,
    // MatSidenavModule,
    //MatIconModule,
    //MatListModule,
    // MatInputModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    // MatSnackBarModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token')
        }
      }
    }),
    // MatGridListModule,
    // MatMenuModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
