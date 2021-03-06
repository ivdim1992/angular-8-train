import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
      this._route.data.subscribe(
          (data:Data) => {
              this.server = data.server;
          }
      )
    // const id = +this._route.snapshot.params.id;

    // this._route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params.id);
    // });
  }
  onEdit() {
      console.log(this._route)
    this._router.navigate(["edit"], {relativeTo: this._route, queryParamsHandling: 'preserve'});
  }
}
