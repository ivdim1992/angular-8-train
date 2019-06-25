import { Component, Input } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountService } from "../accounts.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private _loggingService: LoggingService,
    private _accountsService: AccountService
  ) {}

  onSetTo(status: string) {
    this._accountsService.updateStatus(this.id, status);
  }
}
