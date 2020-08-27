import { FRONTEND_DB } from "./constants";
import _isEmpty from "lodash/isEmpty";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";
import { pointerFormat } from "../../../@share/formatTypeData";
import { async } from "@angular/core/testing";

export async function getFrontend(className: string, query: any) {
  try {
    const page = query.page ? query.page : 1;
    const { perPage = 10, searchText } = query;
    const skipNumber = page * perPage - perPage;
    console.log("page : " + page + "skip : " + skipNumber);
    const frontend = Parse.Object.extend(className);
    const frontendQuery = new Parse.Query(frontend);
    if (!_isEmpty(searchText)) {
      frontendQuery.matches(
        FRONTEND_DB.FIELD_NAME.FRONTEND_NAME,
        searchText,
        "i"
      );
    }

    frontendQuery
      .limit(perPage)
      .skip(skipNumber)
      .descending(FRONTEND_DB.FIELD_NAME.CREATED_AT);
    const total = await frontendQuery.count();
    const arrFrontend = await frontendQuery.include(["serverHa", "acl"]).find();
    return {
      total,
      data: arrFrontend.map((frontend) => {
        const frontendObj = frontend.toJSON();
        return {
          ...frontendObj,
          createdAt: dateTimeFormat(frontendObj.createdAt, "common"),
          updatedAt: dateTimeFormat(frontendObj.updatedAt, "common"),
        };
      }),
    };
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

export async function addFrontend(object: any) {
  try {
    const Frontend = Parse.Object.extend("Frontend");
    const FrontendObj = new Frontend();
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.FRONTEND_NAME, object.name);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.HASERVER, object.serverHa);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.MODE, object.mode);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.BIND, object.bind);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.MAXCONN, object.maxConn);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.ACL, object.acl);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.ACL_CUSTOM, object.aclCustom);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.REDIRECT, object.redirect);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.USE_BACKEND, object.useBackend);
    const FEitem = await FrontendObj.save();
    return FEitem;
  } catch (err) {
    return err.message;
  }
}

export async function updateFrontend(object: any) {
  try {
    const frontend = Parse.Object.extend("Frontend");
    const frontendQuery = new Parse.Query(frontend);
    const FrontendObj = await frontendQuery.get(object.objectId);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.FRONTEND_NAME, object.name);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.HASERVER, object.serverHa);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.MODE, object.mode);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.BIND, object.bind);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.MAXCONN, object.maxConn);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.ACL, object.acl);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.ACL_CUSTOM, object.aclCustom);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.REDIRECT, object.redirect);
    FrontendObj.set(FRONTEND_DB.FIELD_NAME.USE_BACKEND, object.useBackend);
    const FEitem = await FrontendObj.save();
    return FEitem;
  } catch (err) {
    return err.message;
  }
}

export async function getHaproxy() {
  try {
    const Haproxy = Parse.Object.extend("Haproxy");
    const Haproxyquery = new Parse.Query(Haproxy);
    const haArr = await Haproxyquery.find();

    const res = haArr.map((ha) => ({
      label: ha.toJSON().name,
      value: ha.toJSON().objectId,
      location: ha.toJSON().location,
    }));
    // console.log(res);
    return res;
  } catch (err) {
    return err.message;
  }
}

export async function getAcl() {
  try {
    const acls = Parse.Object.extend("ACLs");
    const aclquery = new Parse.Query(acls);
    const aclarr = await aclquery.find();
    return aclarr.map((acl) => ({
      //label: acl.toJSON().name,
      value: { objectId: acl.toJSON().objectId, name: acl.toJSON().name },
    }));
  } catch (err) {
    return err.message;
  }
}

export async function getbackendNames() {
  try {
    const backend = Parse.Object.extend("Backend");
    const backendquery = new Parse.Query(backend);
    const BEarr = await backendquery.find();
    return BEarr.map((be) => ({
      label: be.toJSON().name,
      value: be.toJSON().name,
    }));
  } catch (err) {
    return err.message;
  }
}

export async function deleteFrontend(object: any) {
  try {
    const frontend = Parse.Object.extend("Frontend");
    const frontendQuery = new Parse.Query(frontend);
    const frontendItem = await frontendQuery.get(object.objectId);
    const frontendParse = await frontendItem.destroy();
    return frontendParse;
  } catch (err) {
    return err.message;
  }
}
