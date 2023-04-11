import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { UsersApiService } from './Services/users-api.service';
import { updateComponent } from './update/update.component';
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "students", component: StudentsComponent },
  { path: "student/:id", component: DetailsComponent },
  { path: "update/:id", component: updateComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    DetailsComponent,
    HomeComponent,
    StudentsComponent,
    updateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
