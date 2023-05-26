import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
bootstrapApplication(AppComponent, { providers: [...appRouting] });
