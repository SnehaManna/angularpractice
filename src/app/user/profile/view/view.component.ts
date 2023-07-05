import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
  }
}
