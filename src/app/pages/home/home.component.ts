import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
btnstate = false ;
name:string = 'john';
value:string = 'max';
isAdult = true;

color ='green';
istyping='';
imgsrc='https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  constructor() { }

  ngOnInit(): void {
    console.log(this.isAdult);
  }
  onBtnclick(){
    this.btnstate = true;
  }
  onTyping(evt:any){
    console.log(evt);
    this.istyping = evt.target.value;
  }
}
