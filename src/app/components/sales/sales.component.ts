import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public products_auto_Fills = [];
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private _sanitizer: DomSanitizer, _productService: ProductService) {
    this.products_auto_Fills = _productService.getProductAutoFills();
  }
  // getter to get a reference to scheduleDetail form array in myForm form group
  get scheduleDetail(): FormArray {
    return <FormArray>this.myForm.get('scheduleDetail')
  }
  // add a new row, get reference to form array using getter method and push form group into it   
  addRow() {
    this.scheduleDetail.push(this.initItems());
    //this.products_auto_Fills = [];
  }
  // make a form for each row!
  initItems(): FormGroup {
    return this.fb.group({
      order_number: [null, Validators.required],
      product: [null, Validators.required],
      company: [null],
      batch: [null],
      expiry_date: [null],
      pack: [null],
      price_per_quantity: [null],
      quantity: [null],
      rate: [null],
      discount: [null],
      netrate: [null],
      amount: [null],
      mrp: [null],
      sales_rate: [null],
      free: [null]
    });
  }

  submit() {
    console.log(this.myForm.value)
    console.log(this.myForm.value.scheduleDetail.length);
    for (let i = 0; i < this.myForm.value.scheduleDetail.length; i++) {
      let productName = this.myForm.value.scheduleDetail[i].product
      if (typeof productName == 'object') {
        console.log("Existing Product in row -" + i + ", " + this.myForm.value.scheduleDetail[i].product.population);
      } else {
        console.log("New Product in row -" + i + ", " + this.myForm.value.scheduleDetail[i].product.population);
      }
    }
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      scheduleDetail: this.fb.array([this.initItems()])
    })
  }
  autocompleListFormatter = (data: any): SafeHtml => {
    let html = `<span>${data.product_name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  tryPatchValue() {
    console.log(this.myForm.controls['scheduleDetail']['controls'][0]['controls']['product'].patchValue({
      value: 'Pattambi'
    }));
  }
  handleClick(evt, index) {
    console.log("Hello" + evt + " - " + index)
    console.log(this.myForm.value.scheduleDetail[index].product);
    this.myForm.controls['scheduleDetail']['controls'][index]['controls']['company'].patchValue(
      this.myForm.value.scheduleDetail[index].product.company_name
    );
  }

}
