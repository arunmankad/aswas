import { Injectable } from '@angular/core';
import {ElectronService} from 'ngx-electron';

@Injectable()
export class ProductService {
  electronServ:ElectronService;
  constructor(private _electronService: ElectronService) { 
    this.electronServ = _electronService;
    //_electronService.ipcRenderer.send('open-error-dialog',2222);
    this.electronServ.ipcRenderer.on('insert-purchase-details', (evt, arg)=>this.msgBack(evt,arg));
  }

  getProductAutoFills(){
   /* return [{
      id: 1,
      name: 'Asia',
      population: '4,157,300,000'
    }, {
      id: 2,
      name: 'Africa',
      population: '1,030,400,000'
    }, {
      id: 3,
      name: 'Europe',
      population: '738,600, 000'
    }, {
      id: 4,
      name: 'North America',
      population: '461,114,000'
    }, {
      id: 5,
      name: 'South America',
      population: '390,700,000'
    }, {
      id: 6,
      name: 'Australia',
      population: '36,700,000'
    }, {
      id: 7,
      name: 'Antartica',
      population: 0
    }
    ]; */
    const reply = this.electronServ.ipcRenderer.sendSync('autofill-products', 3333);
    console.log("reply from sync-message =>" +JSON.stringify(reply));
    return reply;
  }
  msgBack(event, arg){
    console.log("msg BAck printing =>"+JSON.stringify(arg[0]))
  }
}
