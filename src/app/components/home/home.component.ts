import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allItem=[
    {id:1,product:"shirt"}
  ];

  addItem(product: string) {
    if(product!=="")
    this.allItem.push({ id: this.allItem.length,product })
    console.warn(product)
  }
}
