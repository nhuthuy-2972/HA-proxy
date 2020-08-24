import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { AgGridModule } from "ag-grid-angular";
import { shareModule } from "../@share/share.module";
import { BalancerModule } from "./balancer/balancer.module";
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    shareModule,
    AgGridModule,
    DashboardModule,
    BalancerModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
