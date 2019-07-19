import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _userService: UserService) {}
  subscription: Subscription;
  userActivated = false;
  ngOnInit() {
    this.subscription = this._userService.activatedEmitter.subscribe(
      didActivate => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
