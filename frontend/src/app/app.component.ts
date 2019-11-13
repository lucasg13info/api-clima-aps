import { Component, OnInit, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  NgForm,
  FormBuilder,
  FormsModule
} from "@angular/forms";

import { ApiService } from "./api.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  constructor(private api: ApiService, private formBuilder: FormBuilder) {}

  formFind: FormGroup;
  city_name: string = null;
  ngOnInit() {
    this.formFind = this.formBuilder.group({
      city_name: [null]
    });
    this.api.getData(null);
  }

  onFormSubmit(form: NgForm) {
    this.api.getData(form["city_name"]);
  }
}
