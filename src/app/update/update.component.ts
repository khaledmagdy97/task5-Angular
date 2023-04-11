import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersApiService } from '../Services/users-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class updateComponent implements OnInit {

  id: Number=0;
  constructor(myActivate:ActivatedRoute,private myCrud:UsersApiService)
  {
    this.id = myActivate.snapshot.params["id"];
  }
  user: any = {};
  ngOnInit(): void {
     this.myCrud.GetUserById(this.id).subscribe({
       next: (data) => {
         console.log(data);
         this.user = data
       }
    });
  }

  Name: string = '';
  Age: string = '';
  Email: string = '';
  phone: string = '';
  courses: string = '';


  formValidation = new FormGroup({
    name: new FormControl('', [Validators.maxLength(25), Validators.minLength(3), Validators.required])
    , age: new FormControl('', [Validators.max(35), Validators.min(15), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^0(11||12||10)\d{8}$/)]),
    courses: new FormControl('', [Validators.required]),
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


  UpdateStudent(name: any, age: any, email: any, phone: any, courses: any)
  {
    if (this.validName() && this.validEmail() && this.validAge() && this.validPhone() && this.validCourses())
    {

      this.Name = name;
      this.Age = age;
      this.Email = email;
      this.phone = phone;
      this.courses = courses;
      this.user = {id:0, Name: name, Age: age, Email: email, phone: phone, courses: courses }

      this.myCrud.UpdateUser(this.id,this.user).subscribe();
      alert(`student ${this.Name} with age ${this.Age} and email ${this.Email} updated succefully`)
    }
  }
}
