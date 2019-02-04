import { Component, OnInit } from '@angular/core';
import { RedirectService } from 'src/app/redirect.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private redirect: RedirectService) { }

  ngOnInit() {
  }

}
