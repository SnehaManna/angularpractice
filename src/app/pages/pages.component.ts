import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
 loadedfeature:string='recipe'
  constructor() { }

  ngOnInit(): void {
  }
  onNavigate(feature:string){
this.loadedfeature=feature;
  }
}
