import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalfired = new EventEmitter<number>();
  interval;
  lastnumber: number = 0;
  constructor() {}

  ngOnInit(): void {}
  onstartgame() {
    this.interval = setInterval(() => {
      this.intervalfired.emit(this.lastnumber + 1);
      this.lastnumber++;
    }, 1000);
  }
  onpausegame() {
    clearInterval(this.interval);
  }
}
