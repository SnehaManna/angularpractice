import { Component, OnInit } from '@angular/core';
import { UserdataService } from '@project/services/UserData/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  istyping = '';
  changeColor = '';
  Drop: boolean = false;
  bgColor = 'no';
  counter = 20;
  getuser: Array<any> = [];
  aaccArrays: Array<number> = [-3, 2, 5];
  aaccArraysTwo: number[] = [];
  constructor(private userinfo: UserdataService) {
    this.userinfo.userdata().subscribe((res: any) => {
      this.getuser = res.data;
      console.log('res', res.data);
    });
  }

  ngOnInit(): void {}

  onTyping(evt: any) {
    console.log(evt);
    this.istyping = evt.target.value;
  }
  onColor(e: any) {
    this.changeColor = e;
  }
  ondrop() {
    this.Drop = !this.Drop;
  }
  onBgChange(e: any) {
    this.bgColor = e;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  Onasccending() {
    for (var i = 0; i < this.aaccArrays.length; i++) {
      this.aaccArraysTwo.push(this.aaccArrays[i] * this.aaccArrays[i]);
    }
    let sorting = this.aaccArraysTwo.sort(function (a, b) {
      return a - b;
    });
    console.log(sorting, 'hi');
  }
}
