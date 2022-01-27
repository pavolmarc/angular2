import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css']
})
export class ButtonDetailComponent implements OnInit {
  clickCounter = 0;
  log = [];
  secretHidden = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onShowDetails(event: Event) {
    this.clickCounter++;
    this.secretHidden = !this.secretHidden;
    this.log.push({counter: this.clickCounter, timestamp: event.timeStamp})
  }
  getColor(pass: boolean){
    if (pass){
      return "blue";
    }else {
      return "white";
    }
  }
}
