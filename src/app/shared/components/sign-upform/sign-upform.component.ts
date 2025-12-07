import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-upform',
  templateUrl: './sign-upform.component.html',
  styleUrls: ['./sign-upform.component.scss']
})
export class SignUpformComponent implements OnInit {

  isFocused: boolean = false;

  @ViewChild('signUpform') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSignUp() {
    console.log(this.form);
  }
}
