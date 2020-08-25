import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BalancerComponent } from "./balancer.component";
import { BackendComponent } from "./backend/backend.component";
import { AccessControlListComponent } from "./access-control-list/access-control-list.component";
import { from } from "rxjs";
const routes: Routes = [
  {
    path: "",
    component: BalancerComponent,
    children: [
      {
        path: "backend",
        component: BackendComponent,
      },
      {
        path: "acl",
        component: AccessControlListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancerRoutingModule {}
