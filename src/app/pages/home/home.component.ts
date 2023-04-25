import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

istyping='';

  constructor() { }

  ngOnInit(): void {
  
  }

  onTyping(evt:any){
    console.log(evt);
    this.istyping = evt.target.value;
  }
}
