import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UserService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private _countService: CountService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this._countService.incrementCount();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this._countService.incrementCount();
  }
}
