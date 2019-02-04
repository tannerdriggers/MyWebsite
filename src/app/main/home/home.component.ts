import { Component, OnInit, ElementRef } from '@angular/core';
import { RedirectService } from 'src/app/redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private redirect: RedirectService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.backgroundImage("modern-desk-dark-optimized.jpg");
  }

  backgroundImage(imageName: string) {
    this.elementRef.nativeElement.ownerDocument.body.style.background = `url('./assets/${imageName}') center center fixed`;
  }

}
