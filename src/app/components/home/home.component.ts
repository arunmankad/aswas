import { Component, OnInit } from '@angular/core';

import {ElectronService} from 'ngx-electron';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  electronServ:ElectronService;
  constructor(private _electronService: ElectronService) { 
    this.electronServ = _electronService;
     //_electronService.ipcRenderer.send('open-error-dialog',2222);
     this.electronServ.ipcRenderer.on('insert-purchase-details', (evt, arg)=>this.msgBack(evt,arg));
  }
  btnClick(){
    this.electronServ.ipcRenderer.send('insert-purchase-details','SELECT * FROM ipsum ');
  }
  synBtnClick(){
    const reply = this.electronServ.ipcRenderer.sendSync('sync-message', 3333);
    console.log("reply from sync-message =>" +JSON.stringify(reply));
    //alert(reply);
  }
  msgBack(event, arg){
    console.log("msg BAck printing =>"+JSON.stringify(arg[0]))
  }
  productFillClick(){
    console.log('PRDUCT FILL CLICKED')
    const reply = this.electronServ.ipcRenderer.sendSync('autofill-products', 3333);
    console.log("reply from autofill-products =>" +JSON.stringify(reply));
  }
  ngOnInit() {
  }

}
