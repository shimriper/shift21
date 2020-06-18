import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.authService.getAllUsers().subscribe(users => {
      this.users = users
    });
  }
  disabledUser(user) {
    if(user.isDisabeld) {
      user.isDisabeld = false;
    }else {
      user.isDisabeld = true;
    }
    var userId = user._id;
    this.authService.UpdateUser(userId, user)
  }

}
