import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    activeUsers:string[] = [];
    inactiveUsers:string[]= [];

    constructor(private _userService: UserService) {}

    ngOnInit() {
        this.activeUsers = this._userService.activeUsers;
        this.inactiveUsers = this._userService.inactiveUsers;
    }

}
