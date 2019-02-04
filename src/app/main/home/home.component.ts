import { Component, OnInit, Renderer2 } from '@angular/core';
import { RedirectService } from 'src/app/redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private redirect: RedirectService, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundImage("modern-desk-dark-optimized.jpg");
  }

  backgroundImage(imageName: string) {
    this.renderer.setStyle(document.body, 'background', `url('./assets/${imageName}') center center fixed`);
  }

}
