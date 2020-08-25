import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { CreateBackendComponent } from "../create-backend/create-backend.component";
import {
  FORM_JSON_DEFAULT,
  getHearder,
  getTitle,
  BACKEND_DB,
  parseToForm,
} from "./constants";
import { getBackend, getHaproxy, getAcl } from "./api";
import { ACTION_TYPE } from "../../../@share/constants";
import _cloneDeep from "lodash/cloneDeep";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";

@Component({
  selector: "ngx-backend",
  templateUrl: "./backend.component.html",
  styleUrls: ["./backend.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BackendComponent implements OnInit {
  public rowData: any[];
  public columnHeader: any[];
  public selected: boolean;
  public selectedObject: any;
  public factoryAddForm: any;
  public searchText: string;
  public arrTitle: any;
  public totalRow: number;
  public perPage: number;
  public pageCurrent: number;
  public refeshPage: boolean;

  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) {}

  async ngOnInit() {
    this.columnHeader = getHearder(BACKEND_DB.BACKEND.TITLE);
    console.log(this.columnHeader);
    this.arrTitle = getTitle(BACKEND_DB.BACKEND.TITLE);
    this.selected = false;
    this.searchText = "";
    this.perPage = 10;
    this.pageCurrent = 1;
    const { total, data } = await getBackend(BACKEND_DB.BACKEND.TABLE_NAME, {
      searchText: this.searchText,
    });
    console.log("Data :", data);
    this.totalRow = total || 0;
    this.rowData = data || [];
    this.refeshPage = false;
  }

  async onChangePage(page) {
    console.log("Thay doi page gium cai");
    console.log(page);
    try {
      const { total, data } = await getBackend(BACKEND_DB.BACKEND.TABLE_NAME, {
        page,
        searchText: this.searchText,
      });
      console.log(data);
      this.totalRow = total;
      this.rowData = data;
      this.pageCurrent = page;
      this.selected = false;
      this.refeshPage = false;
    } catch (err) {
      this.toastrService.show(err.code, "LỖI", { status: "danger" });
    }
  }

  onChangeSelectedItem(event) {
    this.selectedObject = event;
    this.selected = true;
    console.log(this.selectedObject);
    const res = parseToForm(this.selectedObject);
    console.log(res);
  }

  async onSearch(event) {
    try {
      const { key, keyCode } = event;
      if (key === "Enter" || keyCode === 13) {
        this.searchText = event.target.value;
        const { total, data } = await getBackend(
          BACKEND_DB.BACKEND.TABLE_NAME,
          {
            searchText: this.searchText,
          }
        );
        this.totalRow = total;
        this.rowData = data;
        this.selected = false;
        this.pageCurrent = 1;
        this.refeshPage = true;
      }
    } catch (err) {
      this.toastrService.show(err.code, "LỖI", { status: "danger" });
    }
  }

  async onAddNewDataSetTap() {
    try {
      const FORM_ADD = _cloneDeep(FORM_JSON_DEFAULT);

      FORM_ADD.components[0].data.values = await getHaproxy();
      FORM_ADD.components[4].components[4].data.values = await getAcl();
      const dialogRef = this.dialogService.open(CreateBackendComponent, {
        context: {
          typeAction: ACTION_TYPE.ADD,
          // typeContext: BACKEND_DB.BACKEND.TABLE_NAME,
          title: this.arrTitle.ADD,
          formio: FORM_ADD,
        },
      });
      dialogRef.onClose.subscribe(async () => {
        const { total, data } = await getBackend(
          BACKEND_DB.BACKEND.TABLE_NAME,
          {
            page: this.pageCurrent,
            searchText: this.searchText,
          }
        );
        this.totalRow = total;
        this.rowData = data;
        this.selected = false;
        this.refeshPage = false;
      });
    } catch (err) {
      console.log(err);
      this.toastrService.show(err.code, "LỖI", { status: "danger" });
    }
  }

  async onGetDetails(item) {
    try {
      if (this.selected) {
        const backendobj = parseToForm(item);
        console.log(backendobj);
        const FORM_UPDATE = _cloneDeep(FORM_JSON_DEFAULT);
        FORM_UPDATE.components[0].data.values = await getHaproxy();
        FORM_UPDATE.components[4].components[4].data.values = await getAcl();
        //FORM_UPDATE.components[3].hidden = true;
        const dialogRef = this.dialogService.open(CreateBackendComponent, {
          context: {
            typeAction: ACTION_TYPE.EDIT,
            typeContext: BACKEND_DB.BACKEND.TABLE_NAME,
            title: this.arrTitle.DETAILS,
            formio: FORM_UPDATE,
            value: {
              data: backendobj,
            },
          },
        });
        dialogRef.onClose.subscribe(async () => {
          const { total, data } = await getBackend(
            BACKEND_DB.BACKEND.TABLE_NAME,
            {
              page: this.pageCurrent,
              searchText: this.searchText,
            }
          );
          this.totalRow = total;
          this.rowData = data;
          this.selected = false;
          this.refeshPage = false;
        });
      } else
        this.toastrService.show("Chọn công ty để xem chi tiết", "LỖI", {
          status: "danger",
        });
    } catch (err) {
      console.log(err);
    }
  }
}
