import { Component, OnDestroy, ViewEncapsulation, OnInit } from "@angular/core";
import { NbDialogRef, NbToastrService } from "@nebular/theme";
import { ACTION_TYPE, HANDLE_CLICK_BUTTON } from "../../../@share/constants";
import _isEmpty from "lodash/isEmpty";
import { addBackend } from "../../balancer/backend/api";
// import { addPlace, updatePlace } from "../backend/api";

@Component({
  selector: "createBackend",
  templateUrl: "./create-backend.component.html",
  styleUrls: ["./create-backend.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CreateBackendComponent implements OnInit, OnDestroy {
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
    let optionl: Array<any> = [],
      httpL: Array<any> = [],
      acls: Array<any> = [],
      aclcs: Array<any> = [],
      serverL: Array<any> = [];
    const { type, data } = event;
    if (this.typeAction === ACTION_TYPE.ADD) {
      try {
        if (type === HANDLE_CLICK_BUTTON.ON_SAVE.event) {
          console.log(data);
          if (data.httpList.length > 0) {
            //&& !_isEmpty(data.httpList[0].ruleOption)
            for (let http of data.httpList) {
              let contain: boolean = true;
              if (http.condition == "if" || http.condition == "unless") {
                for (let it of acls) {
                  if (it.acl.objectId == http.acl.objectId) {
                    contain = false;
                    break;
                  }
                }
                if (contain) {
                  acls.push({
                    acl: {
                      __type: "Pointer",
                      className: "ACLs",
                      objectId: http.acl.objectId,
                    },
                  });
                }
                let httpobj = {
                  value:
                    http.value + " " + http.condition + " " + http.acl.name,
                  aclID: http.acl.objectId,
                  option: http.ruleOption,
                };
                httpL.push(httpobj);
              } else {
                let ac = http.customAcl.trim();
                if (!_isEmpty(http.customAcl)) {
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
                }
                let httpobj = {
                  value: http.value,
                  option: http.ruleOption,
                };
                httpL.push(httpobj);
              }
            }
          }

          if (data.serverList.length > 0) {
            data.serverList.forEach((s) => {
              serverL.push({
                name: s.serverName,
                value: s.serverValue,
              });
            });
          }

          for (let op of data.optionList) {
            if (!_isEmpty(op.optionName)) {
              optionl.push(op.optionName);
            }
          }
          const be = {
            name: data.backendName,
            serverHa: {
              __type: "Pointer",
              className: "Haproxy",
              objectId: data.haproxyId,
            },
            timeout: data.timeout
              ? { value: "server " + data.timeout, unit: data.unitTimeOut }
              : null,
            mode: data.mode ? data.mode : null,
            balance: data.balance ? data.balance : null,
            option: optionl,
            acl: acls,
            aclCustom: aclcs,
            httpRequest: httpL,
            server: serverL,
          };
          console.log(be);
          const res = await addBackend(be);
          console.log(res);
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
