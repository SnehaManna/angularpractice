import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '@project/services/auth-service/auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(private authservice:AuthServiceService){

  }

  canActivateChild(){
    if(this.authservice.isloggedin()){
      return true
    } else{
      window.alert("permission denied gaming")
      return false;
    }
  }

  
}
