import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';


import {Router} from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseForm:FormGroup;
  // items = [0,1,2,3,4];
  constructor(private router: Router, private _formBuilder:FormBuilder) { }
  formSubmited(){
    console.log("Clicked Form submitted.....")
    
    this.router.navigateByUrl('');
    
  }
  tableClicked(event){
      console.log(event.target.id)
      let itemsLength = 4// this.items.length;
      let stringTobeCompared = 'vs' + (itemsLength - 1);

      if(event.target.id == stringTobeCompared) {
          // this.items.push(itemsLength)
          this.buildPurchaseForm()
      }
  }
  handleClick(event, myTable){
    
    //let ele = document.getElementById('vs0');
    console.log(myTable.innerText);
  }
  ngOnInit() {
    this.purchaseForm = this._formBuilder.group({
      items: this._formBuilder.array([this.buildPurchaseForm()])
    })
  }

  buildPurchaseForm():FormGroup{
    return this._formBuilder.group({
      order_number: [],
      product: [],
      company:[],
      batch: [],
      expiry_date:[],
      pack:[],
      price_per_quantity:[],
      quantity:[],
      rate:[],
      discount:[],
      netrate:[],
      amount:[],
      mrp:[],
      sales_rate:[],
      free:[]
    })
  }

  

}
