import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

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
