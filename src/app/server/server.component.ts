import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white
    }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = (Math.random() > 0.5) ? 'sinking' : 'online';

    getColor(){
        return this.serverStatus === 'sinking' ? 'red' : 'green';
    }
}