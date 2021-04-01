import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private fireAuth: AngularFireAuth,
    private snackService: SnackService){}

   async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      let user = await this.fireAuth.currentUser;
      let isLoggedIn = !!user;
      if(!isLoggedIn){
        this.snackService.notifyAuthError();
      }
      return isLoggedIn;
  }
  
}
