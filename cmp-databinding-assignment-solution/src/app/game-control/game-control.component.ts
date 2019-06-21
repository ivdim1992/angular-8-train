import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() numberToEmit = new EventEmitter();
  number: number = 0;
  interval;
  constructor() {}

  ngOnInit() {}

  startGame() {
    this.interval = setInterval(() => {
      this.numberToEmit.emit(this.number + 1);
      this.number++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
