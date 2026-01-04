import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BackendService {
  private baseUrl = window.location.origin;
  constructor(private http: HttpClient) {}

  public sendContactMessage(contactMsg: any) : Observable<any> {
    let url = this.baseUrl + '/api/contact-message';
    return this.http.post(url, contactMsg);
  }

  public callPrivateRoute() {
    let url = this.baseUrl + '/private?pwd=aviram';
    this.http.get(url).subscribe((res) => {console.log(res)});
  }
}
