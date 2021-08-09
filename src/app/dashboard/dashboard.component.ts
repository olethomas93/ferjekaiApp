import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColormodeService } from '../services/colormode.service';
import { routeTransitionAnimations } from '../route-transition-animations';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[routeTransitionAnimations]
})
export class DashboardComponent implements OnInit {

  

  ngOnInit(): void {
  }
    /**
   * Prepares route
   * @param outlet will emit an activate event any time a new component is being instantiated,
   *               and a deactivate event when it is being destroyed
   * @returns true if route, false otherwise
   */
     prepareRoute(outlet: RouterOutlet): boolean {
      return (
        outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData["animationState"]
      );
    }

    constructor(
      private colormode: ColormodeService,
      private auth : AuthService
    ){

      this.colormode.load();
    }


    async getCred(){
      this.auth.getCred()
    }
    signout(){

      this.auth.signOut()
    }

}
