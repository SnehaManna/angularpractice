import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.scss']
})
export class ServerelementComponent implements OnInit {
@Input('srvElement') element: { type: string; name: string; content: string; } | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
