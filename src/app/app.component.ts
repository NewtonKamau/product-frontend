import { Component } from '@angular/core';
import { NgSwitch } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey wassup';
  products = [];

   getProducts() {
  fetch("http://localhost:8080/api/getProducts")
    .then(response => {
      // console.log(response.json());
     return response.json()
    }).then(data => {
      this.products = [...data]
      console.log(this.products);
      
      console.log(data);

    }).catch(error => {
      console.log(error);
      
    })

}

ngOnInit() {

  this.getProducts();
}
  
};





