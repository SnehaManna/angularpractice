import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
loginStatuschange(status:string,name?:string){
  console.log('new status'+ status + name);
  
}

  constructor() { }
}
