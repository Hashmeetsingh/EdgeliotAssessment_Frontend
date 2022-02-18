import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  model:IUser={
    user: 0,
    userName: '',
    email: '',
    date: '',
    payload: ''
  };

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
   this.userService.addUserData(this.model).subscribe(
    data=>{
      form.resetForm();
      alert(data.message);
    },
    error=>{    
      alert(error.error.errors.userDetails[0]);
    }
   );
  }
}
