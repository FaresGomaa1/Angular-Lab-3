import { Component } from '@angular/core';
import { IProduct } from '../Model/iproduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  renderProduct(x :IProduct){
    
  }
}
