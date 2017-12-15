import { Component } from '@angular/core';
import { ApiService } from './api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'app';

  private email;
  private password;
  private loggedIn = false;
  constructor(private apiService: ApiService) { }

  signin() {

    const body = {email: this.email, password: this.password};
    const temp = (this.apiService.signin(body).subscribe(data => {
        console.log(JSON.stringify(data));
        const fullName = data['user']['firstName'] + ' ' + data['user']['lastName'];
        console.log(fullName);
        /*
          const tok = data['token'];
          localStorage.setItem('token', tok);
          console.log('my token is : ' + localStorage.getItem('token'));
        */
        $('#helloUser').text('Hello ' + fullName + '!');
        $('#helloUser').show();
        $('#signin').hide();
        this.loggedIn = true;
        alert('ur in');
      },
        err => {
          $('#error').text(err['error']['error']);
          $('#error').show();
        }));
  }
}
