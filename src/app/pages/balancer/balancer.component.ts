import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-balancer",
  template: `<router-outlet></router-outlet>`,
  styleUrls: ["./balancer.component.scss"],
})
export class BalancerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
