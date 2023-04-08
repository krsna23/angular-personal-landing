import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  emailForm= new FormGroup({
    name: new FormControl('', [
      Validators.email
    ])
  });

  constructor() {}
  
  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  
  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit(){
    console.log("form submitted.");
    const email= this.emailForm.value;
    console.log(email);
  }

}