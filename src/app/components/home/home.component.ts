import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private url: ApiService,
    public form:FormBuilder,
    public router:Router
    ) {  }

  productForm !: FormGroup;

  ngOnInit(): void {
    this.productForm =this.form.group({
      productName: "",
      productId: uuidv4(),
      availableQuantity: '',
    })

  }
  submit() {
    {
      this.url.create(this.productForm.value).subscribe(res => {
        //this.productForm.reset();
        this.router.navigateByUrl('/products')
      })
    }
  }
}
