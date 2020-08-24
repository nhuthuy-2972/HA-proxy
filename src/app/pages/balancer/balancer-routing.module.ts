import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BalancerComponent } from "./balancer.component";
import { BackendComponent } from "./backend/backend.component";

const routes: Routes = [
  {
    path: "",
    component: BalancerComponent,
    children: [
      {
        path: "backend",
        component: BackendComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancerRoutingModule {}
