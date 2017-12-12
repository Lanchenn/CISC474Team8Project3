import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ApiService]
})
export class SignupComponent implements OnInit {

  private email;
  private password;
  private firstName;
  private lastName;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  signup(email, password, firstname, lastname) {
    console.log('called!');
    console.log('email is ' + email);
/*
    const body = {
      email, password, firstname, lastname };*/
    const body = {email: email, password: password, firstName: firstname, lastName: lastname};
    const parameter = JSON.stringify({email: email, password: password, firstName: firstname, lastName: lastname});
    //console.log(parameter);

    //console.log("this is body: "  + body.firstname);
    const temp = (this.apiService.register(body));
    console.log(temp);
  }

}
