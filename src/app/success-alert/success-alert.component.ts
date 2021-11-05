import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    //   styleUrls: ['./success-alert.component.css']
    styles: [`
.fancy{
    color: greenyellow;
    background-color: saddlebrown;
}
`]

})
export class SuccessAlertComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}