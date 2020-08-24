import { NgModule } from "@angular/core";
import { AgGridTemplateComponent } from "./ag-grid.component";
import { AgGridModule } from "ag-grid-angular";
import { NbButtonModule, NbIconModule } from "@nebular/theme";

@NgModule({
    imports: [AgGridModule, NbButtonModule, NbIconModule],
    declarations: [AgGridTemplateComponent],
    exports: [AgGridTemplateComponent],
})
export class AgGridTemplateModule {}
