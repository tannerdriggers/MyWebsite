import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  navbarOpen = false;

  constructor(private router: Router) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  disableNavbar() {
    this.navbarOpen = false;
  }

  homeRedirect() {
    this.router.navigate(['']);
  }

  portfolioRedirect() {
    this.router.navigate(['/portfolio']);
  }

  aboutRedirect() {
    this.router.navigate(['/about']);
  }

  resumeRedirect() {
    this.router.navigate(['/resume']);
  }

  contactRedirect() {
    this.router.navigate(['/contact']);
  }
}
