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
serverName = 'Testserver';
  constructor() {
    setTimeout (() => { this.allowNewServer = true;
    } ,
      5000) ;
  }

  // tslint:disable-next-line:typedef
 onCreateServer() {
    this.ServerCreationStatus = 'The server was created !' ;
}
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event ){
  // @ts-ignore
    this.serverName = (event.target.value as HTMLInputElement);
  }
}
