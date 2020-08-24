import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { shareModule } from "../../../@share/share.module";
import { CreateBackendComponent } from "./create-backend.component";
@NgModule({
  declarations: [CreateBackendComponent],
  imports: [CommonModule, shareModule],
})
export class CreateBackendModule {}
