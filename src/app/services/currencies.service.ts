import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MyDataService {
  private apiURL = 'https://v6.exchangerate-api.com/v6/a0c42001f1b3a7b35bb72555/latest/UAH';
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.apiURL)
  }
}
