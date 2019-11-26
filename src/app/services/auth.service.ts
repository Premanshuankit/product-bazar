import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface User {
  email: string;
  fullname: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = Subject<User>();
  constructor() { }

  // user authentication -- either user is old or not
  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('login credentials', loginCredentials);
    // return of( { email, password });
    return of( loginCredentials);
  }

  get user() {
    this.user$.asObservable();
  }

  register(user: any) {
    this.user$.next(user);
    return of(user);
  }
}
