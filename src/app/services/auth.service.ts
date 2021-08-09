import { Injectable, NgZone } from '@angular/core';
import { User1 } from "../shared/services/user";
import  auth  from 'firebase';
import { Auth } from 'aws-amplify';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
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
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
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
           
            this.loggedIn.next(true);
            return true;
          }),
          catchError(error => {
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
    from(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['login']);
        },
        error => console.log(error)
      );
  }
}


