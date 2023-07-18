import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  private secretKey: string = 'mbjvldjy';

  emailForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly httpClient: HttpClient,
    private router: Router,
    private app: AppComponent
  ) {}

  ngOnInit(): void {}

  sendEmail(name: string, email: string, message: string) {
    let url = 'https://formspree.io/f/' + this.secretKey;

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let error: string = '';

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: (data) => {
        console.log('email sent' + JSON.stringify(data));
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.app.display_content = 1;
        error = error;
      },
    });
  }
}
