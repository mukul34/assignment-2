import { Component, OnInit } from '@angular/core';
import { AllUserService } from 'src/app/all-user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  data:[{}]
  data1={}

  headers=[
    {
      key:'name',label:'Name'
    },
    {
      key:'email',label:'Email'
    },
    {
      key:'mobile',label:'Mobile Number'
    },
    {
      key:'gender',label:'Gender'
    },
    {
      key:'category',label:'Category'
    },
    {
      key:'technology',label:'Technology'
    }
  ]
  constructor(private _AllUserService:AllUserService) { }

  ngOnInit(): void {
    this.data=this._AllUserService.showAllUser();
    
      
  }


}
