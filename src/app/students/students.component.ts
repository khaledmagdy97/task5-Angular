import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../Services/users-api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit
{
  students: any=[]

  constructor(private myCrud:UsersApiService)
  {

  }
  ngOnInit(): void {
    this.myCrud.GetAllUsers().subscribe
    ({
      next: (data) => {this.students=data },
      error:(error)=>{console.log(error)}
    })
  }
  Delete(id:any)
  {
    this.myCrud.DeleteUser(id).subscribe();
    window.location.reload();
  }
}
