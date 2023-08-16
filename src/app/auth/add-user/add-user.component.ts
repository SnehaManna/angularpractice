import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cancomponentLeave } from '@project/guard/savedata.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit, cancomponentLeave {
  userform: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}
  canleave():boolean{
    if(this.userform.dirty){
      return window.confirm("paage save")
    } return true;
  }
}
