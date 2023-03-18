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
displayText=false;
log:number[]=[]
getServerStatus(){
return(
  this.ServerStatus
)
}
  constructor() {
    this.ServerStatus=Math.random()>0.5?"online":"offline";
   }

  ngOnInit(): void {
  }
  tabClick(){
this.tabcontent=!this.tabcontent;
  }
  getColor(){
   return this.ServerStatus==="online"?"green":"red"
  }
  getDisplay(){
this.displayText=!this.displayText;
this.log.push(this.log.length +1)
  }
}
