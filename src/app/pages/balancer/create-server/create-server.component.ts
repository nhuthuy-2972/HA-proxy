import { Component, OnDestroy, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { ACTION_TYPE, HANDLE_CLICK_BUTTON } from "../../../@share/constants";
import _isEmpty from "lodash/isEmpty";
import { addServer, updateServer } from "../../balancer/servers/api";

@Component({
  selector: "ngx-create-server",
  templateUrl: "./create-server.component.html",
  styleUrls: ["./create-server.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CreateServerComponent implements OnInit {
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
          const serverObj = {
            name: data.name,
            location: data.location,
            objectId: data.objectId ? data.objectId : null,
          };

          if (this.typeAction === ACTION_TYPE.ADD) {
            const res = await addServer(serverObj);
            console.log(res);
            this.dialogRef.close();
          } else {
            const res = await updateServer(serverObj);
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
