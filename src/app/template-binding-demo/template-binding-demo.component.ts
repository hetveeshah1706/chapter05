import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-binding-demo',
  template:`
  <form>
    <div class="container">
      <div class="form-group">
        <label>NUMBER 1:</label>
        <input type="number" placeholder="Enter Number" #no1>
      </div>
      <div class="form-group">
        <label>NUMBER 2:</label>
        <input type="number" placeholder="Enter Number" #no2>
      </div>

      <button type="submit" class="btn btn-primary" (click)="onSubmit(no1.value,no2.value)">Submit</button>
      <h1>ANS IS::{{ans}}</h1>
  </div>

  </form>
`,
  styleUrls: ['./template-binding-demo.component.css']
})
export class TemplateBindingDemoComponent implements OnInit {
  ans:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(no1,no2){
    this.ans=parseInt(no1)+parseInt(no2)
  }

}
