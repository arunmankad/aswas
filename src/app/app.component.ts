import { Component } from '@angular/core';


import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  electronServ: ElectronService;
  constructor(private _electronService: ElectronService) {

    this.electronServ = _electronService;

    //_electronService.ipcRenderer.send('open-error-dialog',2222);

    this.electronServ.ipcRenderer.on('insert-purchase-details', (evt, arg) => this.msgBack(evt, arg));

  }

  btnClick() {
    //this.electronServ.ipcRenderer.send('open-error-dialog', 'SELECT * FROM ipsum ');
    alert("ok")
    this.electronServ.ipcRenderer.send('insert-purchase-details', 'SELECT * FROM ipsum ');
  }
  synBtnClick() {
    const reply = this.electronServ.ipcRenderer.sendSync('sync-message', 3333);
    console.log("reply from sync-message =>" + reply);
    //alert(reply);
  }
  msgBack(event, arg) {
    console.log("msg back printing" + arg);
  }
}


