import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth/auth.service";
@Injectable()
export class ADminGuard implements CanActivate{
  constructor(private authService: AuthService)  { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean>{
    return new Promise<boolean> (function (resolve, reject) {
        this.authService.getUser().then((user)=>resolve( user.isAdmin ===true));
      });
      }
}
