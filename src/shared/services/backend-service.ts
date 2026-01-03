import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BackendService {
  private baseUrl = window.location.origin;
  constructor(private http: HttpClient) {}

  public sendContactMessage(contactMsg: any) {
    let url = this.baseUrl + '/api/contact-message';
    this.http.post(url, contactMsg).subscribe({error: err => {console.log(err.message)}});
  }

  public callPrivateRoute() {
    let url = this.baseUrl + '/private?pwd=aviram';
    this.http.get(url).subscribe((res) => {console.log(res)});
  }
}
