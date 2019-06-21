import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  //   newServerName = "";
  //   newServerContent = "";
  @ViewChild("serverContentInputRef", { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(inputRef) {
    this.serverCreated.emit({
      serverName: inputRef.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(inputRef) {
    this.blueprintCreated.emit({
      serverName: inputRef.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
