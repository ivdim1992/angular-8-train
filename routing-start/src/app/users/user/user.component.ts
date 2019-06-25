import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this._route);
    this.user = {
      id: this._route.snapshot.params.id,
      name: this._route.snapshot.params.name
    };
    this.paramsSubscription = this._route.params.subscribe((params: Params) => {
      (this.user.id = params.id), (this.user.name = params.name);
    });
  }
  ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
  }
}
