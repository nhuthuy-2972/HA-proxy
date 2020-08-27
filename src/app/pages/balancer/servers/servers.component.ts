import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { CreateServerComponent } from "../create-server/create-server.component";
import {
  FORM_JSON_DEFAULT,
  SERVER_DB,
  getHearder,
  getTitle,
} from "./constants";
import { getServer, deleteServer } from "./api";
import { ACTION_TYPE } from "../../../@share/constants";
import _cloneDeep from "lodash/cloneDeep";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";
import { get } from "https";

@Component({
  selector: "ngx-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ServersComponent implements OnInit {
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
    this.columnHeader = getHearder(SERVER_DB.SERVER.TITLE);
    console.log(this.columnHeader);
    this.arrTitle = getTitle(SERVER_DB.SERVER.TITLE);
    this.selected = false;
    this.searchText = "";
    this.perPage = 10;
    this.pageCurrent = 1;
    const { total, data } = await getServer(SERVER_DB.SERVER.TABLE_NAME, {
      searchText: this.searchText,
    });
    console.log("Data :", data);
    this.totalRow = total || 0;
    this.rowData = data || [];
    this.refeshPage = false;
  }

  async onChangePage(page) {
    console.log(page);
    try {
      const { total, data } = await getServer(SERVER_DB.SERVER.TABLE_NAME, {
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
  }

  async onSearch(event) {
    try {
      const { key, keyCode } = event;
      if (key === "Enter" || keyCode === 13) {
        this.searchText = event.target.value;
        const { total, data } = await getServer(SERVER_DB.SERVER.TABLE_NAME, {
          searchText: this.searchText,
        });
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
      const dialogRef = this.dialogService.open(CreateServerComponent, {
        context: {
          typeAction: ACTION_TYPE.ADD,
          // typeContext: BACKEND_DB.BACKEND.TABLE_NAME,
          title: this.arrTitle.ADD,
          formio: FORM_ADD,
        },
      });
      dialogRef.onClose.subscribe(async () => {
        const { total, data } = await getServer(SERVER_DB.SERVER.TABLE_NAME, {
          page: this.pageCurrent,
          searchText: this.searchText,
        });
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
        const serverObj = {
          ...item,
        };
        console.log(serverObj);
        const FORM_UPDATE = _cloneDeep(FORM_JSON_DEFAULT);
        const dialogRef = this.dialogService.open(CreateServerComponent, {
          context: {
            typeAction: ACTION_TYPE.EDIT,
            title: this.arrTitle.DETAILS,
            formio: FORM_UPDATE,
            value: {
              data: serverObj,
            },
          },
        });
        dialogRef.onClose.subscribe(async () => {
          const { total, data } = await getServer(SERVER_DB.SERVER.TABLE_NAME, {
            page: this.pageCurrent,
            searchText: this.searchText,
          });
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

  async deleteRow(item) {
    try {
      if (this.selected) {
        const serverObj = {
          ...item,
        };
        console.log(serverObj);
        const res = await deleteServer(serverObj);
        console.log(res);
        const { total, data } = await getServer(SERVER_DB.SERVER.TABLE_NAME, {
          page: this.pageCurrent,
          searchText: this.searchText,
        });
        this.totalRow = total;
        this.rowData = data;
        this.selected = false;
        this.refeshPage = false;
      } else
        this.toastrService.show("Chọn công ty để xem chi tiết", "LỖI", {
          status: "danger",
        });
    } catch (err) {
      console.log(err);
    }
  }
}
