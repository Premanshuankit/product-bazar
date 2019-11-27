import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { User } from './user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'product-bazar';

  user: User;
  userSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    // this.userSubscription =
    this.authService.user.subscribe(user => (this.user = user));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    // throw new Error('Method Not Implemented');
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}










