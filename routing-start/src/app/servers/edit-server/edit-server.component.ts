import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";
import { CanComponenetDeactivate } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit, CanComponenetDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit: boolean = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    // console.log(this._route.snapshot.queryParams);
    // console.log(this._route.snapshot.fragment);
    console.log(this._route);
    this._route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params.allowEdit === "1" ? true : false;
    });
    this.server = this.serversService.getServer(
      +this._route.snapshot.params.id
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true;
    this._router.navigate(['../'],{relativeTo: this._route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.allowEdit){
          return true;
      }
      if(this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved) {
        return confirm('Do you want ot discard changes?')
      }else {
          return true;
      }
  }
}
