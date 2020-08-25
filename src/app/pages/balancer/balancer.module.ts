import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";
import { shareModule } from "../../@share/share.module";
import { ThemeModule } from "../../@theme/theme.module";
import { BalancerRoutingModule } from "./balancer-routing.module";

import { BalancerComponent } from "./balancer.component";
import { BackendComponent } from "./backend/backend.component";
import { AccessControlListComponent } from './access-control-list/access-control-list.component';
@NgModule({
  imports: [
    shareModule,
    AgGridModule.withComponents([]),
    ThemeModule,
    BalancerRoutingModule,
  ],
  declarations: [BalancerComponent, BackendComponent, AccessControlListComponent],
  entryComponents: [],
})
export class BalancerModule {}
