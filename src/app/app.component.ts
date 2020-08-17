import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // // title = 'forms1';

  // registrationForm=new FormGroup({
  //   userName:new FormControl('Vishwas'),
  //   password:new FormControl(''),
  //   confirmpassword:new FormControl('')


  // });

  a=[];
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit(){
   let p=this.profileForm.value;
    console.log(this.profileForm.value);
    this.a.push(p);

  }

  delete(obj){
    // this.a.splice(this.a.indexOf(name),1);
    this.a=this.a.filter(s=>s.firstName!=obj.firstName);
  }
}
