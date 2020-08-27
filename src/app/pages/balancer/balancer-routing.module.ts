import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BalancerComponent } from "./balancer.component";
import { BackendComponent } from "./backend/backend.component";
import { AccessControlListComponent } from "./access-control-list/access-control-list.component";
import { FrontendComponent } from "./frontend/frontend.component";
import { ServersComponent } from "./servers/servers.component";
import { from } from "rxjs";
const routes: Routes = [
  {
    path: "",
    component: BalancerComponent,
    children: [
      {
        path: "backends",
        component: BackendComponent,
      },
      {
        path: "acl",
        component: AccessControlListComponent,
      },
      {
        path: "frontends",
        component: FrontendComponent,
      },
      {
        path: "servers",
        component: ServersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancerRoutingModule {}
