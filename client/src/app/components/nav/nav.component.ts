import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;

  myUserRule;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.myUserRule = this.authService.getMyRule();
      });

    // if(this.userIsAuthenticated){
    //   this.getPrivUser();
    // }else{
    //   this.myUserRule = null;
    // }
  }
  onLogout() {
    this.myUserRule = null;
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  // getPrivUser() {
  //   this.authService.getUserById().subscribe(data => {
  //     this.myUserRule = data[0].role;
  //   });
  // }
}
