import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openPhoneMenu() {//fade in

    const menuBar = document.getElementById('menu');
    if (menuBar != null) {
      if (menuBar.style.opacity === '1') {//fade out
        menuBar.style.pointerEvents = "none";
        menuBar.style.opacity = '0';
      }
      else {//fade in
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