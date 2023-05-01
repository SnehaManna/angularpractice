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
  getuser: Array<any>=[];
  constructor(private userinfo: UserdataService) {
    let userdatainfo = this.userinfo.userdata(
      'https://reqres.in/api/users?page=2'
    );
    userdatainfo.subscribe((res:any) => {
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
}
