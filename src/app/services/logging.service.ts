import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
loginStatuschange(status:string){
  console.log('new status'+ status);
  
}

  constructor() { }
}
