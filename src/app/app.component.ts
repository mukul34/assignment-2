import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    openNav=false;
    toggleNavbar(){
      this.openNav=!this.openNav;
    }
}
