import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColormodeService } from './services/colormode.service';
import { routeTransitionAnimations } from './route-transition-animations';
import { Subscription } from 'rxjs';
import { AwsiotService } from './services/awsiot.service';
import { IMqttMessage } from "ngx-mqtt";
import { AuthService } from './services/auth.service';
import { PubSub } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routeTransitionAnimations]
})
export class AppComponent {
  title = 'ferjekai';
  events!: any[];
  private deviceId!: string;
  subscription_Mqtt!: Subscription;
  subscription_login!: Subscription;
  public loggedIn!: boolean;
  public createForm: FormGroup | undefined;


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
      private readonly eventMqtt: AwsiotService,
      public auth: AuthService,
     
      
    ){

      this.colormode.load();
    }


    ngOnInit() {
      this.subscribeToTopic();
      this.subscription_login = this.auth.isAuthenticated()
      .subscribe(result => {
        console.log(result)
        this.loggedIn = result;
      });


      PubSub.subscribe('1.5.0/Ferjekai/TagValues').subscribe({
        next: data => console.log('Message received', data),
        error: error => console.error(error)
        
    });

 



  }

  ngOnDestroy(): void {
    if (this.subscription_Mqtt) {
        this.subscription_Mqtt.unsubscribe();
    }

    this.subscription_login.unsubscribe();
}

  private subscribeToTopic() {
    this.subscription_Mqtt = this.eventMqtt.topic(this.deviceId)
        .subscribe((data: IMqttMessage) => {
            let item = JSON.parse(data.payload.toString());
            this.events.push(item);
        });
}


}
