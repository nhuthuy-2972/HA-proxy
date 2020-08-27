import { Component, OnDestroy, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { ACTION_TYPE, HANDLE_CLICK_BUTTON } from "../../../@share/constants";
import _isEmpty from "lodash/isEmpty";
import { addACL, updateACL } from "../../balancer/access-control-list/api";

@Component({
  selector: "ngx-create-acl",
  templateUrl: "./create-acl.component.html",
  styleUrls: ["./create-acl.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CreateAclComponent implements OnInit {
  public typeAction: string;
  public typeContext: string;
  public title: string;
  public value: any;
  public formio: any;

  constructor(
    private dialogRef: NbDialogRef<any>,
    private toastrService: NbToastrService
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialogRef.close();
  }

  async handleEvent(event) {
    const { type, data } = event;
    if (
      this.typeAction === ACTION_TYPE.ADD ||
      this.typeAction === ACTION_TYPE.EDIT
    ) {
      try {
        if (type === HANDLE_CLICK_BUTTON.ON_SAVE.event) {
          console.log(data);
          const aclObj = {
            name: data.name,
            criterion: data.criterion,
            conditions: data.conditions ? data.conditions : null,
            objectId: data.objectId ? data.objectId : null,
          };

          if (this.typeAction === ACTION_TYPE.ADD) {
            const res = await addACL(aclObj);
            console.log(res);
            this.dialogRef.close();
          } else {
            const res = await updateACL(aclObj);
            console.log(res);
            this.dialogRef.close();
          }
        }
      } catch (err) {
        console.log(err);
        this.toastrService.show(err, "LỖI", { status: "danger" });
      }
    }
  }

  ngOnDestroy() {
    this.formio = {};
    this.value = {};
    this.title = "";
    this.typeAction = "";
    this.typeContext = "";
  }
}
