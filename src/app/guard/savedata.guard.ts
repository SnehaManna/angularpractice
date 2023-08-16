import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AddUserComponent } from '@project/auth/add-user/add-user.component';
import { Observable } from 'rxjs';

// to  make it reusable
export interface cancomponentLeave{
  canleave:()=> boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SavedataGuard implements CanDeactivate<cancomponentLeave> {
  canDeactivate(component: cancomponentLeave) {
    if(component.canleave){
    return component.canleave();
    } 
      return true;
    
  }

  
}
