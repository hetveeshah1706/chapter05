import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  template:`
    <form>
      <div class="container">
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" (click)="onSubmit()">Submit</button>
    </div>

    </form>
  `,
  styleUrls: ['./event-binding-demo.component.css']
})
export class EventBindingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("Button Clicked!!")
  }

}
