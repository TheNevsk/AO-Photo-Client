import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BackendService {
  private baseUrl = window.location.origin;
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  public callPrivateRoute() {
    let url = this.baseUrl + '/private?pwd=aviram';
    this.http.get(url).subscribe((res) => {console.log(res)});
  }
}
