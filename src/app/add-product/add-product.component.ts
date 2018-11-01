import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct = '';
  onAddProduct() {
    this.newProduct = 'The User\'s post';
  }
  
  constructor() { }

  ngOnInit() {
  }

}

