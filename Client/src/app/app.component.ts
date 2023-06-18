import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }


  openPhoneMenu() {//fade in
    const menuBar = document.getElementById('menu');
    if (menuBar != null) {
      if (menuBar.style.opacity === '1') {//fade out
        menuBar.style.pointerEvents = "none";
        menuBar.style.opacity = '0';
      }
      else {//fade in
        this.router.navigate(['']);
        menuBar.style.pointerEvents = "auto";
        menuBar.style.opacity = '1';
      }
    }
  }

  closeMenu() {

    const menuBar = document.getElementById('menu');
    if (menuBar != null) {
      if (menuBar.style.opacity === '1') {//fade out
        menuBar.style.pointerEvents = "none";
        menuBar.style.opacity = '0';
      }
    }
  }

  

}