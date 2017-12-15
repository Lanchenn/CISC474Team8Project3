import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  signup() {
    // make sure passwords match
    if (this.password === this.passwordConfirm) {
      alert('good');

      const body = {email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName};
      console.log('ok ' + JSON.stringify(body));

      const temp = (this.apiService.register(body).subscribe(data => {
        console.log(data);
        console.log(JSON.stringify(data));
        const tok = data['token'];
        localStorage.setItem('token', tok);
        console.log('my token is : ' + localStorage.getItem('token'));
      },
        err => {console.log(err); }));
    }
    else {
      $('#pwdError').toggle();
      alert('bad');
    }
  }

}
