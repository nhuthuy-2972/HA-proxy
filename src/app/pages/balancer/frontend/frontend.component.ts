import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { CreateFrontendComponent } from "../create-frontend/create-frontend.component";
import {
  FORM_JSON_DEFAULT,
  getHearder,
  getTitle,
  FRONTEND_DB,
  parseToForm,
} from "./constants";
import {
  getFrontend,
  getAcl,
  getHaproxy,
  getbackendNames,
  deleteFrontend,
} from "./api";
import { ACTION_TYPE } from "../../../@share/constants";
import _cloneDeep from "lodash/cloneDeep";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";

@Component({
  selector: "ngx-frontend",
  templateUrl: "./frontend.component.html",
  styleUrls: ["./frontend.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class FrontendComponent implements OnInit {
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
    this.columnHeader = getHearder(FRONTEND_DB.FRONTEND.TITLE);
    console.log(this.columnHeader);
    this.arrTitle = getTitle(FRONTEND_DB.FRONTEND.TITLE);
    this.selected = false;
    this.searchText = "";
    this.perPage = 10;
    this.pageCurrent = 1;
    const { total, data } = await getFrontend(FRONTEND_DB.FRONTEND.TABLE_NAME, {
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
      const { total, data } = await getFrontend(
        FRONTEND_DB.FRONTEND.TABLE_NAME,
        {
          page,
          searchText: this.searchText,
        }
      );
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
        const { total, data } = await getFrontend(
          FRONTEND_DB.FRONTEND.TABLE_NAME,
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
      const acls = await getAcl();
      FORM_ADD.components[2].components[4].data.values = acls;
      FORM_ADD.components[3].components[0].data.values = await getbackendNames();
      FORM_ADD.components[3].components[3].data.values = acls;
      const dialogRef = this.dialogService.open(CreateFrontendComponent, {
        context: {
          typeAction: ACTION_TYPE.ADD,
          // typeContext: FRONTEND_DB.BACKEND.TABLE_NAME,
          title: this.arrTitle.ADD,
          formio: FORM_ADD,
        },
      });
      dialogRef.onClose.subscribe(async () => {
        const { total, data } = await getFrontend(
          FRONTEND_DB.FRONTEND.TABLE_NAME,
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
        const frontendobj = parseToForm(item);
        console.log(frontendobj);
        const FORM_UPDATE = _cloneDeep(FORM_JSON_DEFAULT);
        FORM_UPDATE.components[0].data.values = await getHaproxy();
        const acls = await getAcl();
        FORM_UPDATE.components[2].components[4].data.values = acls;
        FORM_UPDATE.components[3].components[0].data.values = await getbackendNames();
        FORM_UPDATE.components[3].components[3].data.values = acls;

        FORM_UPDATE.components[4].theme = "warning";
        FORM_UPDATE.components[4].label = "LUU THAY DOI";
        //FORM_UPDATE.components[3].hidden = true;
        const dialogRef = this.dialogService.open(CreateFrontendComponent, {
          context: {
            typeAction: ACTION_TYPE.EDIT,
            typeContext: FRONTEND_DB.FRONTEND.TABLE_NAME,
            title: this.arrTitle.DETAILS,
            formio: FORM_UPDATE,
            value: {
              data: frontendobj,
            },
          },
        });
        dialogRef.onClose.subscribe(async () => {
          const { total, data } = await getFrontend(
            FRONTEND_DB.FRONTEND.TABLE_NAME,
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

  async deleteRow(item) {
    try {
      if (this.selected) {
        const aclObj = {
          ...item,
        };
        console.log(aclObj);
        const res = await deleteFrontend(aclObj);
        console.log(res);
        const { total, data } = await getFrontend(
          FRONTEND_DB.FRONTEND.TABLE_NAME,
          {
            page: this.pageCurrent,
            searchText: this.searchText,
          }
        );
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
