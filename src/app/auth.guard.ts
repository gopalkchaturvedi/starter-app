import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      let usrData=localStorage.getItem("userData");
      console.log("user data in view "+usrData);
      
           return usrData?true:false;
    
      }
  
}
