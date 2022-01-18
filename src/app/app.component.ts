import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';

  onUserReset(){
    this.userName = '';
  }

  isUserNameSet(){
    if(this.userName != '') return true;
  }


}
