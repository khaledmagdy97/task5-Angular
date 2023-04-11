import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersApiService } from '../Services/users-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private myCrud:UsersApiService)
  {

  }

  formValidation = new FormGroup({
    name: new FormControl("", [Validators.maxLength(25), Validators.minLength(3), Validators.required])
    , age: new FormControl("", [Validators.max(35), Validators.min(15), Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^0(11||12||10)\d{8}$/)]),
    courses: new FormControl("", [Validators.required]),
  });

  getValues() {
    console.log(this.formValidation.valid)
    console.log(this.formValidation.controls["email"].valid)
    console.log(this.formValidation.controls["name"].valid)
    console.log(this.formValidation.controls["age"].valid)
  }

  validName() {
    return this.formValidation.controls["name"].valid
  }
  validAge() {
    return this.formValidation.controls["age"].valid
  }
  validEmail() {
    return this.formValidation.controls["email"].valid
  }
  validPhone() {
    return this.formValidation.controls["phone"].valid
  }
  validCourses() {
    return this.formValidation.controls["courses"].valid
  }
  id: any;
  Name: string = '';
  Age: string = '';
  Email: string = '';
  phone: string = '';
  courses: string = '';
  user: {id:any,Name: string, Age: string, Email: string, phone: string, courses: string }
    = {id:0, Name: " ", Age: " ", Email: " ", phone: "", courses: "" };

  AddStudent(name: any, age: any, email: any, phone: any, courses: any)
  {
    if (this.validName() && this.validEmail() && this.validAge() && this.validPhone() && this.validCourses())
    {

      this.Name = name;
      this.Age = age;
      this.Email = email;
      this.phone = phone;
      this.courses = courses;
      this.user = {id:0, Name: name, Age: age, Email: email, phone: phone, courses: courses }

      this.myCrud.CreateUser(this.user).subscribe();
      alert(`student ${this.Name} with age ${this.Age} and email ${this.Email} added succefully`)
    }
  }
}
