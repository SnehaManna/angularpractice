import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
addservers=false;
servercreationstatus="no surver is created";
username="";
servername="";
  constructor() {
    setTimeout(()=>{
      this.addservers=true
    },2000);
  
   }

  ngOnInit(): void {
  }
getServerstatus(){
  this.servercreationstatus="surver is created " + this.servername;
}
updateServername(event:any){
this.servername=event.target.value;
}
onReset(){
  this.username=""
}
}
