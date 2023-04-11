import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersApiService } from '../Services/users-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  Id: Number = 0;
  user: any;

  constructor(myActivate: ActivatedRoute, private myCrud: UsersApiService)
  {
    this.Id = myActivate.snapshot.params["id"];
  }

  ngOnInit(): void
  {
    this.myCrud.GetUserById(this.Id).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data)},
    error: (err) => { console.log(err); }
  });
  }



}
