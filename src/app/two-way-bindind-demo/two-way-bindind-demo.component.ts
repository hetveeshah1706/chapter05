import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindind-demo',
  template:`
  <form>
    <div class="container">
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" name="emailId"  class="form-control" placeholder="Enter email" [(ngModel)]="emailId">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" name="password" class="form-control" placeholder="Password" [(ngModel)]="password">
      </div>
      <button type="submit" class="btn btn-primary" (click)="onSubmit()">Submit</button>
  </div>

  </form>
`,
  styleUrls: ['./two-way-bindind-demo.component.css']
})
export class TwoWayBindindDemoComponent implements OnInit {
  emailId:string="abc@gmail.com";
  password:string="1234";
  constructor() { }
  ngOnInit(): void {}
  onSubmit(){
    alert("E-MAIL ID IS::"+this.emailId+" "+"PASSWORD IS::"+this.password)
  }

}
