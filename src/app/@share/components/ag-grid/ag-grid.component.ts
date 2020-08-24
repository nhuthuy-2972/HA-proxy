import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import {
  CONFIG_AG_GRID,
  LOADING_AG_GRID,
  NO_ROWS_AG_GRID,
} from "../../constants";

@Component({
  selector: "ag-grid-template",
  templateUrl: "./ag-grid.component.html",
  styleUrls: ["./ag-grid.component.scss"],
})
export class AgGridTemplateComponent implements OnInit {
  @Input() columnHeader: any[];
  @Input() rowData: any[];
  @Input() perPage: number;
  @Input() totalRow: number;
  @Input() refeshPage: boolean;
  @Input() frameworkComponents: any;
  @Output() changePage = new EventEmitter<number>();
  @Output() selectedItem = new EventEmitter<object>();

  public agConfig: any;
  public loadingTemplate: string;
  public noRowsTemplate: string;
  public page: number;
  public totalPage: number;
  public disabledPreviousPage: boolean;
  public disabledNextPage: boolean;
  public agGridApi: any;
  public selectedObject: any;
  public selectionType: string;

  constructor(private dialogService: NbDialogService) {}

  ngOnInit() {
    this.agConfig = CONFIG_AG_GRID;
    this.loadingTemplate = LOADING_AG_GRID;
    this.noRowsTemplate = NO_ROWS_AG_GRID;
    this.page = 1;
    this.disabledPreviousPage = true;
    this.disabledNextPage = false;
    this.selectionType = "single";
  }

  ngOnChanges() {
    console.log("DO onchange ");
    this.disabledNextPage = this.rowData && this.rowData.length < this.perPage;
    this.totalPage = Math.ceil(this.totalRow / this.perPage);
    if (this.refeshPage) {
      this.page = 1;
      console.log("d0 refesh");
    }
    if (this.totalRow === 0) {
      this.page = 0;
    } // else this.page = 1;
  }

  handleFirstPage() {
    this.page = 1;
    this.disabledPreviousPage = true;
    this.disabledNextPage = false;
    this.changePage.emit(this.page);
  }

  handlePreviousPage() {
    this.disabledPreviousPage = this.page - 1 <= 1;
    this.page -= 1;
    this.disabledNextPage = false;
    this.changePage.emit(this.page);
  }

  handleNextPage() {
    console.log("ON NEXT PAGE");
    console.log(this.page);
    this.page += 1;

    console.log("Tong Trang : " + this.totalPage);
    this.disabledNextPage = this.page >= this.totalPage;
    this.disabledPreviousPage = false;
    console.log(this.page);
    this.changePage.emit(this.page);
  }

  handleLastPage() {
    this.page = this.totalPage;
    this.disabledNextPage = true;
    this.disabledPreviousPage = false;
    this.changePage.emit(this.page);
  }

  agGridReady(event) {
    this.agGridApi = event.api;
  }

  handleSelectionChanged() {
    const selectedRow = this.agGridApi.getSelectedRows();
    this.selectedObject = selectedRow[0];
    this.selectedItem.emit(this.selectedObject);
  }
}
