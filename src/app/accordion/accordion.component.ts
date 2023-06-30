import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit{

  myFormObj : FormGroup | any;
 
  myFormArray : any = [];

  ngOnInit(): void {
    this.myFormObj = new FormGroup({
      secHeader : new FormControl('', Validators.required),
      secDetails : new FormControl('', Validators.required)
    })
  }
  
  onAddSection(){
    console.log(this.myFormObj.value)
    this.myFormArray.push(this.myFormObj.value);
  }
}
