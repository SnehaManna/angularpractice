import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometask1',
  templateUrl: './hometask1.component.html',
  styleUrls: ['./hometask1.component.scss'],
})
export class Hometask1Component implements OnInit {
  listArray: Array<{
    id: number;
    name: string;
    email: string;
    skills: string;
  }> = [
    {
      id: 0,
      name: 'sneha',
      email: 'snehamanna62@gmail.com',
      skills: 'dance',
    },
    {
      id: 1,
      name: 'Max',
      email: 'max@gmail.com',
      skills: 'poem',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
      skills: 'song',
    },
  ];
  listShow = -1;
  selectedUser: any;
  isdisable = -1;
  constructor() {}

  ngOnInit(): void {
    console.log(this.listArray);
  }
  OnShow(i: any = 0, user: any) {
    this.selectedUser = { ...user };
    console.log(this.selectedUser);
    this.listShow = i;
  }
  OnUpdate(i: any = 0) {
    this.listArray[i] = this.selectedUser;
    console.log(this.listArray);
    this.listShow = -1;
    this.isdisable = 1;
  }
  setUser(e: any) {
    console.log(e);
    let { name, value } = e.target;
    this.selectedUser[name] = value;
  }
  OnEdit(i: any = 0) {
    this.isdisable = i;
  }
}
