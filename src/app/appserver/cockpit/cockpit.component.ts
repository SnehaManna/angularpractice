import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{
    newServerName: string;
    newServerContent: string;
  }>();
  @Output('bpcreated') blueprintCreated = new EventEmitter<{
    newServerName: string;
    newServerContent: string;
  }>();
  @ViewChild('servercontent')
  servercontent!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverinput:HTMLInputElement) {
    console.log(serverinput.value)
    this.serverCreated.emit({
      newServerName: serverinput.value,
      // newServerContent: this.newServerContent,
      newServerContent:this.servercontent.nativeElement.value,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      newServerName: this.newServerName,
      // newServerContent: this.newServerContent,
      newServerContent:this.servercontent.nativeElement.value,
    });
  }
}
