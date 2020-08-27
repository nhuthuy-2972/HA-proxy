import { ACL_DB } from "./constants";
import _isEmpty from "lodash/isEmpty";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";
import { pointerFormat } from "../../../@share/formatTypeData";
import { async } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";

export async function getACL(className: string, query: any) {
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

export async function addACL(object: any) {
  try {
    const acl = Parse.Object.extend("ACLs");
    const aclObj = new acl();

    aclObj.set(ACL_DB.FIELD_NAME.ACL_NAME, object.name);
    aclObj.set(ACL_DB.FIELD_NAME.CRITERION, object.criterion);
    aclObj.set(ACL_DB.FIELD_NAME.CONDITON, object.conditions);

    const aclitem = await aclObj.save();
    return aclitem;
  } catch (err) {
    return err.message;
  }
}

export async function updateACL(object: any) {
  try {
    const acl = Parse.Object.extend("ACLs");
    const aclQuery = new Parse.Query(acl);
    const aclItem = await aclQuery.get(object.objectId);
    aclItem.set(ACL_DB.FIELD_NAME.ACL_NAME, object.name);
    aclItem.set(ACL_DB.FIELD_NAME.CRITERION, object.criterion);
    aclItem.set(ACL_DB.FIELD_NAME.CONDITON, object.conditions);
    const aclparse = await aclItem.save();
    return aclparse;
  } catch (err) {
    return err.message;
  }
}

export async function deleteACL(object: any) {
  try {
    const acl = Parse.Object.extend("ACLs");
    const aclQuery = new Parse.Query(acl);
    const aclItem = await aclQuery.get(object.objectId);
    const aclparse = await aclItem.destroy();
    return aclparse;
  } catch (err) {
    return err.message;
  }
}
