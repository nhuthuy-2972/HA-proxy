import { ACL_DB } from "./constants";
import _isEmpty from "lodash/isEmpty";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";
import { pointerFormat } from "../../../@share/formatTypeData";
import { async } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";

export async function getACl(className: string, query: any) {
  try {
    const page = query.page ? query.page : 1;
    const { perPage = 10, searchText } = query;
    const skipNumber = page * perPage - perPage;
    console.log("page : " + page + "skip : " + skipNumber);
    const acl = Parse.Object.extend(className);
    const aclQuery = new Parse.Query(acl);
    if (!_isEmpty(searchText)) {
      aclQuery.matches(ACL_DB.FIELD_NAME.ACL_NAME, searchText, "i");
    }
    aclQuery
      .limit(perPage)
      .skip(skipNumber)
      .descending(ACL_DB.FIELD_NAME.CREATED_AT);
    const total = await aclQuery.count();
    const arrACL = await aclQuery.includeAll().find();
    return {
      total,
      data: arrACL.map((acl) => {
        const aclObj = acl.toJSON();
        return {
          ...aclObj,
          createdAt: dateTimeFormat(aclObj.createdAt, "common"),
          updatedAt: dateTimeFormat(aclObj.updatedAt, "common"),
        };
      }),
    };
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

// export async function addBackend(object: any) {
//   try {
//     const Backend = Parse.Object.extend("Backend");
//     const BackendObj = new Backend();

//     BackendObj.set(BACKEND_DB.FIELD_NAME.BACKEND_NAME, object.name);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.HASERVER, object.serverHa);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.TIMEOUT, object.timeout);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.MODE, object.mode);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.BALANCE, object.balance);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.OPTION, object.option);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.ACL, object.acl);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.ACL_CUSTOM, object.aclCustom);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.HTTP_REQUEST, object.httpRequest);
//     BackendObj.set(BACKEND_DB.FIELD_NAME.SERVER, object.server);

//     const BEitem = await BackendObj.save();
//     return BEitem;
//   } catch (err) {
//     return err.message;
//   }
// }

// export async function updateBackend(object: any) {
//   try {
//     const backend = Parse.Object.extend("Backend");
//     const backendQuery = new Parse.Query(backend);
//     const backendItem = await backendQuery.get(object.objectId);
//     backendItem.set(BACKEND_DB.FIELD_NAME.BACKEND_NAME, object.name);
//     backendItem.set(BACKEND_DB.FIELD_NAME.HASERVER, object.serverHa);
//     backendItem.set(BACKEND_DB.FIELD_NAME.TIMEOUT, object.timeout);
//     backendItem.set(BACKEND_DB.FIELD_NAME.MODE, object.mode);
//     backendItem.set(BACKEND_DB.FIELD_NAME.BALANCE, object.balance);
//     backendItem.set(BACKEND_DB.FIELD_NAME.OPTION, object.option);
//     backendItem.set(BACKEND_DB.FIELD_NAME.ACL, object.acl);
//     backendItem.set(BACKEND_DB.FIELD_NAME.ACL_CUSTOM, object.aclCustom);
//     backendItem.set(BACKEND_DB.FIELD_NAME.HTTP_REQUEST, object.httpRequest);
//     backendItem.set(BACKEND_DB.FIELD_NAME.SERVER, object.server);
//     const BEitem = await backendItem.save();
//     return BEitem;
//   } catch (err) {
//     return err.message;
//   }
// }
