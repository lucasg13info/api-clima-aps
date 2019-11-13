import { Injectable, EventEmitter } from "@angular/core";
import axios from "axios";
import { HttpClient } from "@angular/common/http";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  url = "http://localhost:8080/api";
  constructor(private http: HttpClient) {}
  data: Array<Object>;
  findCity = new EventEmitter();
  loader = new EventEmitter();

  find(id) {
    return this.http.get<any>(`${this.url}/find/${id}`);
  }

  getData(value) {
    /**
     * 455827 id da cidade de são paulo
     */
    if (!value) {
      value = 455827;
    }

    this.loader.emit(true);
    this.find(value).subscribe(data => {
      this.data = data;
      this.findCity.emit(data);
      this.loader.emit(false);
    });
  }
}
