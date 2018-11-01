import { NgSwitch } from "@angular/common";
import * as CanvasJS from "../../assets/canvasjs.min";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  title = 'Reports';
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
  constructor() { }

  ngOnInit() {
    this.getProducts();
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "change this"
      },
      data: [{
        type: "column",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { label: "Dettergents", y: 10 },
          { label: "Oil", y: 15 },
          { label: "tech", y: 25 },

        ]
      }]
    });

    chart.render();

  }

}
