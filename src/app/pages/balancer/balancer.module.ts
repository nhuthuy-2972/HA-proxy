import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";
import { shareModule } from "../../@share/share.module";
import { ThemeModule } from "../../@theme/theme.module";
import { BalancerRoutingModule } from "./balancer-routing.module";

import { BalancerComponent } from "./balancer.component";
import { BackendComponent } from "./backend/backend.component";
import { AccessControlListComponent } from './access-control-list/access-control-list.component';
import { CreateAclComponent } from './create-acl/create-acl.component';
import { FrontendComponent } from './frontend/frontend.component';
import { CreateFrontendComponent } from './create-frontend/create-frontend.component';
import { ServersComponent } from './servers/servers.component';
import { CreateServerComponent } from './create-server/create-server.component';
@NgModule({
  imports: [
    shareModule,
    AgGridModule.withComponents([]),
    ThemeModule,
    BalancerRoutingModule,
  ],
  declarations: [BalancerComponent, BackendComponent, AccessControlListComponent, CreateAclComponent, FrontendComponent, CreateFrontendComponent, ServersComponent, CreateServerComponent],
  entryComponents: [],
})
export class BalancerModule {}
