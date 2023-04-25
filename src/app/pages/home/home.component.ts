import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

istyping='';
changeColor='';
Drop:boolean=false;
bgColor='no';
  constructor() { }

  ngOnInit(): void {
  
  }

  onTyping(evt:any){
    console.log(evt);
    this.istyping = evt.target.value;
  }
  onColor(e:any){
this.changeColor = e;
  }
  ondrop(){
this.Drop=!this.Drop;
  }
  onBgChange(e:any){
this.bgColor=e;
  }
}
