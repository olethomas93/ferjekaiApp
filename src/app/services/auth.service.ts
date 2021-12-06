import { Injectable, NgZone } from '@angular/core';
import { User1 } from "../shared/services/user";
import  auth  from 'firebase';
import Auth from "@aws-amplify/auth";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of} from 'rxjs';
import { from } from 'rxjs';
import { catchError ,map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  public loggedIn!: BehaviorSubject<boolean>;
  constructor( // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    

    this.loggedIn = new BehaviorSubject<boolean>(false)
  }

    /** get authenticat state */
    public isAuthenticated(): Observable<boolean> {
      return from(Auth.currentAuthenticatedUser())
        .pipe(
          map(result => {

            

            localStorage.setItem('group',result.signInUserSession.idToken.payload['cognito:groups'][0])
           
            this.loggedIn.next(true);
            return true;
          }),
          catchError(error => {
            localStorage.setItem('group','')
            this.loggedIn.next(false);
            return of(false);
          })
        );
    }

  
    
    
    getCred(){

      Auth.currentCredentials().then((info:any) => {
        const cognitoIdentityId = info;
        console.log(cognitoIdentityId)
      });

      Auth.currentSession().then((info)=>{

        console.log(info)
      })

    }

    completeNewPassword(user:any,newPassword:any){
      const { requiredAttributes } = user.challengeParam;
      Auth.completeNewPassword(user,newPassword,requiredAttributes).then((data)=>{
        console.log(data)
        this.router.navigate(['/landing'])
      }).catch(e=>{
        console.log(e)
      })
    }

 
    /** signin */
    public signIn(email:any, password:any): Observable<any> {
      return from(Auth.signIn(email, password))
        .pipe(
          tap(() => this.loggedIn.next(true))
        );
    }

 

    




  // Returns true when user is looged in and email is verified
 

 

  public signOut() {
    from(Auth.signOut({global:true}))
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        (error)=> {
          console.log(error)
          Auth.signOut()
          this.router.navigate(['/login'])
        }
      );
  }
}


