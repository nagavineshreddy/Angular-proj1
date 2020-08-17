import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
@Input() public parentdata;
  ngOnInit(): void {
  }

  delete(obj){

    
    // this.a.splice(this.a.indexOf(name),1);
    this.parentdata=this.parentdata.filter(s=>s.firstName!=obj.firstName);
  }

}
