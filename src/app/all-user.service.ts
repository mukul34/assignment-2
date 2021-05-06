import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllUserService {
  constructor() {}

  users: [{}]=[{
    name:'Xyz',
    email:'xyz@gmail.com',
    gender:'male',
    category:'General',
    technology:['c','c++'],
    mobile:9999999999
  }];
  addUser(user:Object){
    this.users.push(user);
  }

  showAllUser(){
    return this.users;
  }
}
