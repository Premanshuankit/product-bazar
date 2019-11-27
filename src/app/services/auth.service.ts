import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<User>();
  constructor() { }

  // user authentication -- either user is old or not
  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('login credentials', loginCredentials);
    // return of( { email, password });
    return of( loginCredentials);
  }

  logout() {
    // remove user from subject
    this.setUser(null);
    console.log('successfully logout');
  }

  get user() {
    return this.user$.asObservable();
  }

  register(user: any) {
    // make a api call to save user in DB
    // update the user subject
    this.setUser(user);
    console.log('registered user successfully', user);
    return of(user);
  }

  private setUser(user) {
    this.user$.next(user);
  }
}
