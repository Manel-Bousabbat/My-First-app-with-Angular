import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
 // <app-server></app-server>`
 // ,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false ;
ServerCreationStatus = 'No Server was  created!';
serverName = '';
serverCreated = false;
servers = ['TestServer', 'TestServer2' ] ;
  constructor() {
    setTimeout (() => { this.allowNewServer = true;
    } ,
      5000) ;
  }

  // tslint:disable-next-line:typedef
 onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.ServerCreationStatus = 'The server was created ! Name is' + this.serverName ;
}
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event ){
  // @ts-ignore
    this.serverName = (event.target.value as HTMLInputElement);
  }
}
