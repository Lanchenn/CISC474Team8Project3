import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ApiService]
})
export class SignupComponent implements OnInit {

  private email;
  private password;
  private passwordConfirm;
  private firstName;
  private lastName;
  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    console.log(this.location.path());
  }

  signup() {
    // make sure all fields filled
    if (this.checkFilled()) {

      // make sure passwords match
      if (this.password === this.passwordConfirm) {
        const body = {email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName};
        this.apiService.register(body).subscribe(data => {
          console.log(data);
          console.log(JSON.stringify(data));
          const tok = data['token'];
          localStorage.setItem('token', tok);
          console.log('my token is : ' + localStorage.getItem('token'));
        },
          err => {console.log(err); });
        $('#signUpError').hide();
        $('input').val('');
        location.assign('/home');
      }
      else {
        $('#signUpError').text('Passwords do not match!');
        $('#signUpError').show();
      }
    }
    else {
      $('#signUpError').text('Please fill out all fields!');
      $('#signUpError').show();
    }
  }

  checkFilled() {
    return this.email != null && this.password != null && this.passwordConfirm != null
      && this.firstName != null && this.lastName != null;
  }

}
