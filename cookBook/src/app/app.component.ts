import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'app';

  private email;
  private password;
  private loggedIn = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.initializeTestData();
  }

  signin() {
    const body = {email: this.email, password: this.password};
    this.apiService.signin(body).subscribe(data => {
        // sign in
        const fullName = data['user']['firstName'] + ' ' + data['user']['lastName'];
        $('#helloUser').text('Hello ' + fullName + '!');
        $('#helloUser').show();
        $('#signin').hide();
        this.loggedIn = true;
        alert('ur in');
      },
        err => {
          // could not verifiy - bad request
          $('#signInError').text(err['error']['error']);
          $('#signInError').show();
        });
  }

  refresh() {
    // hide any error & reset input vals
    $('#signInError').hide();
    $('input').val('');
  }

  initializeTestData() {
    this.apiService.initializeTestData(null);
  }

}
