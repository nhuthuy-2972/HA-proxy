/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { SeoService } from "./@core/utils/seo.service";
import { ParseService } from "./@share/services/parse/parse.service";
@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private parseService: ParseService
  ) {}

  ngOnInit(): void {
    this.parseService.initParse();
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
