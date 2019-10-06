import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth/auth.service";
import {promisify} from "util";
@Injectable()
export class ADminGuard implements CanActivate{
  constructor(authService: AuthService)  { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean> | boolean{
    return true;
    return new Promise<boolean> (function (resolve, reject) {
      if (this.authService === undefined)
      {
        console.log("AuthService is indefinded!!!");
        reject(false);
      }
        this.authService.getUser().then((user)=>resolve( user.isAdmin ===true));
      });
      }
}
