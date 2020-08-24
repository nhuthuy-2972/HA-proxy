import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbListModule,
} from "@nebular/theme";

import { NbDialogService } from "@nebular/theme";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { ThemeModule } from "../@theme/theme.module";
import { FormioModule } from "angular-formio";
import { AgGridModule } from "ag-grid-angular";
import { ParseService } from "./services";
import { AgGridTemplateModule } from "./components/ag-grid/ag-grid.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    ThemeModule,
    FormioModule,
    ngFormsModule,
    AgGridModule.withComponents([]),
    AgGridTemplateModule,
  ],
  exports: [
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
    ThemeModule,
    FormioModule,
    ngFormsModule,
    AgGridModule,
    AgGridTemplateModule,
  ],
  providers: [NbDialogService, ParseService],
})
export class shareModule {}
