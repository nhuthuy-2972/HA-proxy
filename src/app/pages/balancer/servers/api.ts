import { SERVER_DB } from "./constants";
import _isEmpty from "lodash/isEmpty";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";
// import { pointerFormat } from "../../../@share/formatTypeData";
// import { async } from "@angular/core/testing";
// import { ActivatedRoute } from "@angular/router";

export async function getServer(className: string, query: any) {
  try {
    const page = query.page ? query.page : 1;
    const { perPage = 10, searchText } = query;
    const skipNumber = page * perPage - perPage;
    console.log("page : " + page + "skip : " + skipNumber);
    const server = Parse.Object.extend(className);
    const serverQuery = new Parse.Query(server);
    if (!_isEmpty(searchText)) {
      serverQuery.matches(SERVER_DB.FIELD_NAME.SERVER_NAME, searchText, "i");
    }
    serverQuery
      .limit(perPage)
      .skip(skipNumber)
      .descending(SERVER_DB.FIELD_NAME.CREATED_AT);
    const total = await serverQuery.count();
    const arrServer = await serverQuery.includeAll().find();
    return {
      total,
      data: arrServer.map((acl) => {
        const serverObj = acl.toJSON();
        return {
          ...serverObj,
          createdAt: dateTimeFormat(serverObj.createdAt, "common"),
          updatedAt: dateTimeFormat(serverObj.updatedAt, "common"),
        };
      }),
    };
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

export async function addServer(object: any) {
  try {
    const server = Parse.Object.extend("Haproxy");
    const serverObj = new server();

    serverObj.set(SERVER_DB.FIELD_NAME.SERVER_NAME, object.name);
    serverObj.set(SERVER_DB.FIELD_NAME.LOCATION, object.location);

    const serveritem = await serverObj.save();
    return serveritem;
  } catch (err) {
    return err.message;
  }
}

export async function updateServer(object: any) {
  try {
    const server = Parse.Object.extend("Haproxy");
    const serverQuery = new Parse.Query(server);
    const serverObj = await serverQuery.get(object.objectId);
    serverObj.set(SERVER_DB.FIELD_NAME.SERVER_NAME, object.name);
    serverObj.set(SERVER_DB.FIELD_NAME.LOCATION, object.location);
    const serverparse = await serverObj.save();
    return serverparse;
  } catch (err) {
    return err.message;
  }
}

export async function deleteServer(object: any) {
  try {
    const server = Parse.Object.extend("Haproxy");
    const serverQuery = new Parse.Query(server);
    const serverObj = await serverQuery.get(object.objectId);
    const serverparse = await serverObj.destroy();
    return serverparse;
  } catch (err) {
    return err.message;
  }
}
