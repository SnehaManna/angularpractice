import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-appserver',
  templateUrl: './appserver.component.html',
  styleUrls: ['./appserver.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppserverComponent implements OnInit {
  serverElements: Array<{ type: string; name: string; content: string }> = [];
  constructor() {}

  ngOnInit(): void {
    this.serverElements = [
      // { type: 'server', name: 'TestServer', content: 'just A test' },
      // { type: 'server', name: 'TestServer', content: 'just A test' },
    ];
  }
  onServerAdded(serverData: {newServerName:string,newServerContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.newServerName,
      content: serverData.newServerContent,
    });
  }

  onBlueprintAddes(blueprintData: {newServerName:string,newServerContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.newServerName,
      content: blueprintData.newServerContent
    });
  }
}
