import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  url = "http://localhost:3000/users";
  constructor(private client: HttpClient) { }

  GetAllUsers() {
    return this.client.get(this.url);
  }
  GetUserById(id: any) {
    return this.client.get(this.url + '/' +id);
  }
  CreateUser(user: any) {
    console.log(user)
    return this.client.post(this.url,user);
  }
  UpdateUser(id: any, user: any) {
    return this.client.put(this.url + '/' +id, user);
  }
  DeleteUser(id: any)
  {
    return this.client.delete(this.url+'/'+id);
  }

}
