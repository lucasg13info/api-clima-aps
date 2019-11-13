
import { ApiService } from "./api.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { HttpClientModule } from "@angular/common/http";

import {
  FormBuilder,
  ReactiveFormsModule
} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {}
