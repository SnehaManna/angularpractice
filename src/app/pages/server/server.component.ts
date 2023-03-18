import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
serverId:number=10;
ServerStatus="offline";
tabcontent=false;
getServerStatus(){
return(
  this.ServerStatus
)
}
  constructor() { }

  ngOnInit(): void {
  }
  tabClick(){
this.tabcontent=!this.tabcontent;
  }
}
