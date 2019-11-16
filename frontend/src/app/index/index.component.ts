import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ApiService } from "../api.service";
import { EventEmitter } from "events";
@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  data: Array<Object>;
  loader: boolean;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loader = true;
    this.api.loader.subscribe(status => {
      this.loader = status;
    });

    this.api.findCity.subscribe(values => {
      this.data = values;
    });
  }
}
