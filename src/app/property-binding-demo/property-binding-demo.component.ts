import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  template:`
    <form>
        <div class="container">
          <input [value]="str"><br><br>
          <input [value]="no"><br><br>
          <input [value]="nos_array"><br><br>
        </div>
    </form>
  `,
  styleUrls: ['./property-binding-demo.component.css']
})
export class PropertyBindingDemoComponent implements OnInit {
  str:string="Hello World";
  no:number=12000;
  nos_array=[1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
