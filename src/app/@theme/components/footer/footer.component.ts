import { Component } from "@angular/core";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by">
      Powered by
      <b><a href="https://innoria.com" target="_blank">INNORIA</a></b> 2020
    </span>
    <div class="socials">
      <a
        href="https://github.com/thodinh/angkor-haproxy"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `,
})
export class FooterComponent {}
