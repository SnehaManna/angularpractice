import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthServiceService) {}
  canActivate(e: any) {
    if (this.authservice.isloggedin()) {
      return true;
    } else {
      window.alert("permission denied")
      return false;
    }
  }
}
