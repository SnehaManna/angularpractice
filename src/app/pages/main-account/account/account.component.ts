import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '@project/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers:[LoggingService]
})
export class AccountComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() account?: {name: string, status: string};
  @Input()
  id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logginservice : LoggingService) { }
  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.logginservice.loginStatuschange(status)
  }
}
