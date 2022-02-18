import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }
  
  getUserData(){
    this.userService.getUserData().subscribe(
      data=>{
        this.userList=data.userdtls;
      },
      error=>{
        alert(error.statusText);
      }
    );

  }

}
