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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    if (localStorage.getItem('loggedIn') === 'true') {
      $('#helloUser').text('Hello ' + localStorage.getItem('name') + '!');
      $('#helloUser').show();
      $('#logout').show();
      $('#signin').hide();
    }
    this.initializeTestData();
  }

  signin() {
    const body = {email: this.email, password: this.password};
    this.apiService.signin(body).subscribe(data => {
        // sign in
        const fullName = data['user']['firstName'] + ' ' + data['user']['lastName'];
        $('#helloUser').text('Hello ' + fullName + '!');
        $('#helloUser').show();
        $('#logout').show();
        $('#signin').hide();
        localStorage.setItem('name', fullName);
        localStorage.setItem('loggedIn', 'true');
        location.reload();
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

  logout() {
    localStorage.setItem('loggedIn', '');
    location.reload();
  }

  initializeTestData() {
    this.apiService.getRecipes().subscribe(data => {
      const length = Object.keys(data).length;
      if (length === 0) {
        // db is empty
        this.apiService.initializeTestData(null);
      }
    });
  }

}
