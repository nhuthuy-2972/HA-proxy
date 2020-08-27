import { Component, OnDestroy, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { ACTION_TYPE, HANDLE_CLICK_BUTTON } from "../../../@share/constants";
import _isEmpty from "lodash/isEmpty";
import {
  addFrontend,
  updateFrontend,
  deleteFrontend,
  getbackendNames,
} from "../../balancer/frontend/api";

@Component({
  selector: "ngx-create-frontend",
  templateUrl: "./create-frontend.component.html",
  styleUrls: ["./create-frontend.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CreateFrontendComponent implements OnInit {
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
    let redirectL: Array<any> = [],
      acls: Array<any> = [],
      aclcs: Array<any> = [],
      useBackendL: Array<any> = [];
    const { type, data } = event;
    if (
      this.typeAction === ACTION_TYPE.ADD ||
      this.typeAction === ACTION_TYPE.EDIT
    ) {
      try {
        if (type === HANDLE_CLICK_BUTTON.ON_SAVE.event) {
          console.log(data);
          if (data.redirectList.length > 0) {
            //&& !_isEmpty(data.httpList[0].ruleOption)
            for (let redirect of data.redirectList) {
              let contain: boolean = true;
              if (
                redirect.condition == "if" ||
                redirect.condition == "unless"
              ) {
                for (let it of acls) {
                  if (it.objectId == redirect.acl.objectId) {
                    contain = false;
                    break;
                  }
                }
                if (contain) {
                  acls.push({
                    __type: "Pointer",
                    className: "ACLs",
                    objectId: redirect.acl.objectId,
                  });
                }
                if (redirect.customAcl) {
                  if (_isEmpty(redirect.customAcl)) {
                    delete redirect.customAcl;
                  }
                }
                redirectL.push(redirect);
              } else {
                let ac = redirect.customAcl.trim();
                if (!_isEmpty(redirect.customAcl)) {
                  //httpobj["aclc"] = ac;
                  for (let it of aclcs) {
                    if (it.customAcl == ac) {
                      contain = false;
                      break;
                    }
                  }
                  if (contain) {
                    aclcs.push({
                      customAcl: ac,
                    });
                  }
                } else {
                  delete redirect.customAcl;
                }
                redirectL.push(redirect);
              }
            }
          }
        }

        if (data.useBackendList.length > 0) {
          for (let useBackend of data.useBackendList) {
            let contain: boolean = true;
            if (
              useBackend.condition == "if" ||
              useBackend.condition == "unless"
            ) {
              for (let it of acls) {
                if (it.objectId == useBackend.acl.objectId) {
                  contain = false;
                  break;
                }
              }
              if (contain) {
                acls.push({
                  __type: "Pointer",
                  className: "ACLs",
                  objectId: useBackend.acl.objectId,
                });
              }
              if (useBackend.customAcl) {
                if (_isEmpty(useBackend.customAcl)) {
                  delete useBackend.customAcl;
                }
              }
              useBackendL.push(useBackend);
            } else {
              useBackendL.push(useBackend);
            }
          }
        }

        const fe = {
          name: data.name,
          serverHa: {
            __type: "Pointer",
            className: "Haproxy",
            objectId: data.haproxyId,
          },
          bind: data.bind,
          maxConn: data.maxConn,
          mode: data.mode,
          redirect: redirectL,
          useBackend: useBackendL,
          acl: acls,
          aclCustom: aclcs,
          objectId: data.objectId ? data.objectId : null,
        };
        console.log(fe);
        if (this.typeAction === ACTION_TYPE.ADD) {
          const res = await addFrontend(fe);
          console.log(res);
          this.dialogRef.close();
        } else {
          const res = await updateFrontend(fe);
          console.log(res);
          this.dialogRef.close();
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
