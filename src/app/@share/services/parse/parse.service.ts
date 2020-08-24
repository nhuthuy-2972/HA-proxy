import { Injectable } from "@angular/core";
import * as Parse from "parse";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ParseService {
  constructor() {}
  public initParse() {
    Parse.initialize(environment.appId);
    (Parse as any).serverURL = environment.apiUrl;
    (window as any).Parse = Parse;
  }
}
