import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColormodeService } from './services/colormode.service';
import { routeTransitionAnimations } from './route-transition-animations';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { APIService } from './API.service';
import { UUID } from 'angular2-uuid';
import Amplify,{PubSub} from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import { HttpclientService } from './services/httpclient.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routeTransitionAnimations]
})
export class AppComponent implements OnInit {

  
  title = 'ferjekai';
  events!: any[];
  private deviceId!: string;
  subscription_login!: Subscription;
  public loggedIn!: boolean;
  public createForm: FormGroup | undefined;
  data!:Array<any>

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
      public auth: AuthService,
      private api: APIService,
      private httpclient:HttpclientService
      
     
      
    ){

      
const uuid =UUID.UUID();







      this.colormode.load();
    }


    ngOnInit() {
      //this.subscribeToTopic();
      this.subscription_login = this.auth.isAuthenticated()
      .subscribe(result => {
        console.log(result)
        this.loggedIn = result;
      });

    
      this.httpclient.authenticate().subscribe((data)=>{

        this.httpclient.setToken(data.access_token)
      })

     

        


      


 

  }

  ngOnDestroy(): void {
    
}


}
