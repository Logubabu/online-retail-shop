import { Component } from '@angular/core';
import { storeData } from 'src/app/store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-retail-shop';

  getData: any = storeData;

  ngOnInit() {  }

  togNav(nav:any){
    if(nav.opened){
      nav.close();
    }
    else{
      nav.open();
    }

  }
}
