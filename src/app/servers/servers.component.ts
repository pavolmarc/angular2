import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created!';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TEstserver', 'Sinking server']
  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)

  }

  ngOnInit(): void {
  }

  onServerCreate(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
