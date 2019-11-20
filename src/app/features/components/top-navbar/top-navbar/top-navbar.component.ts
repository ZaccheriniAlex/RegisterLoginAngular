import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  navbarOpen: boolean;
  // userLogged: boolean;

  constructor(
    private router: Router,
    // private currentUser: CurrentUserService,
  ) { }

  ngOnInit() {
    // this.userLogged = this.currentUser.isLogged();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
