import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth/auth.service";
import {promisify} from "util";
@Injectable()
export class ADminGuard implements CanActivate{
  constructor(private authService: AuthService)  {  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean>
  {
    let self = this;
    return new Promise<boolean> (function (resolve, reject) {
        self.authService.getUser().then((user)=>
        { resolve( user.isAdmin ===true); });
      });
  }

}
