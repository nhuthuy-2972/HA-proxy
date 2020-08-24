import { BACKEND_DB } from "./constants";
import _isEmpty from "lodash/isEmpty";
import { dateTimeFormat } from "../../../@share/dateTimeFormat";
import { pointerFormat } from "../../../@share/formatTypeData";
import { async } from "@angular/core/testing";

export async function getBackend(className: string, query: any) {
  try {
    const page = query.page ? query.page : 1;
    const { perPage = 10, searchText } = query;
    const skipNumber = page * perPage - perPage;
    console.log("page : " + page + "skip : " + skipNumber);
    const Backend = Parse.Object.extend(className);
    const backendQuery = new Parse.Query(Backend);
    if (!_isEmpty(searchText)) {
      backendQuery.matches(BACKEND_DB.FIELD_NAME.BACKEND_NAME, searchText, "i");
    }

    const ha = await getHaproxy();
    console.log(ha);
    const acl = await getAcl();
    console.log(acl);
    backendQuery
      .limit(perPage)
      .skip(skipNumber)
      .descending(BACKEND_DB.FIELD_NAME.CREATED_AT);
    const total = await backendQuery.count();
    const arrBackend = await backendQuery
      .include(["serverHa", "acl.acl"])
      .find();
    return {
      total,
      data: arrBackend.map((backend) => {
        const backendObj = backend.toJSON();
        return {
          ...backendObj,
          createdAt: dateTimeFormat(backendObj.createdAt, "common"),
          updatedAt: dateTimeFormat(backendObj.updatedAt, "common"),
        };
      }),
    };
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

export async function addBackend(object: any) {
  try {
    const Backend = Parse.Object.extend("Backend");
    const BackendObj = new Backend();

    BackendObj.set(BACKEND_DB.FIELD_NAME.BACKEND_NAME, object.name);
    BackendObj.set(BACKEND_DB.FIELD_NAME.HASERVER, object.serverHa);
    BackendObj.set(BACKEND_DB.FIELD_NAME.TIMEOUT, object.timeout);
    BackendObj.set(BACKEND_DB.FIELD_NAME.MODE, object.mode);
    BackendObj.set(BACKEND_DB.FIELD_NAME.BALANCE, object.balance);
    BackendObj.set(BACKEND_DB.FIELD_NAME.OPTION, object.option);
    BackendObj.set(BACKEND_DB.FIELD_NAME.ACL, object.acl);
    BackendObj.set(BACKEND_DB.FIELD_NAME.ACL_CUSTOM, object.aclCustom);
    BackendObj.set(BACKEND_DB.FIELD_NAME.HTTP_REQUEST, object.httpRequest);
    BackendObj.set(BACKEND_DB.FIELD_NAME.SERVER, object.server);

    const BEitem = await BackendObj.save();
    return BEitem;
  } catch (err) {
    return err.message;
  }
}

// export async function updatePlace(className: string, object: any) {
//   try {
//     const Place = Parse.Object.extend(className);
//     const placeQuery = new Parse.Query(Place);
//     const placeItem = await placeQuery.get(object.objectId);
//     // GET REGIONAL
//     if (className === PLACES_DB.AREA.TABLE_NAME) {
//       const factoryPointer = pointerFormat(
//         PLACES_DB.FACTORY.TABLE_NAME,
//         object.regional
//       );
//       // const Factory = Parse.Object.extend(PLACES_DB.FACTORY.TABLE_NAME);
//       // const factoryQuery = new Parse.Query(Factory);
//       // const regionalItem = (await factoryQuery.get(object.regional)).toPointer();
//       placeItem.set(PLACES_DB.FIELD_NAME.FACTORY, factoryPointer);
//     }
//     if (className === PLACES_DB.WORKSHOP.TABLE_NAME) {
//       const Area = Parse.Object.extend(PLACES_DB.AREA.TABLE_NAME);
//       const areaQuery = new Parse.Query(Area);
//       const areaItem = await areaQuery.get(object.regional);
//       placeItem.set(PLACES_DB.FIELD_NAME.AREA, areaItem.toPointer());
//       placeItem.set(PLACES_DB.FIELD_NAME.FACTORY, areaItem.toJSON().factory);
//     }
//     // UPDATE PLACE
//     placeItem.set(PLACES_DB.FIELD_NAME.PLACE_ID, object.placeId);
//     placeItem.set(PLACES_DB.FIELD_NAME.PLACE_NAME, object.placeName);
//     placeItem.set(PLACES_DB.FIELD_NAME.DESCRIPTION, object.description);
//     placeItem.set(PLACES_DB.FIELD_NAME.VALIDITY, object.validity);
//     const result = await placeItem.save();
//     return result;
//   } catch (err) {
//     return err.message;
//   }
// }

// export async function getDataRegionalComponent(className: string) {
//   try {
//     const Place = Parse.Object.extend(className);
//     const placeQuery = new Parse.Query(Place);
//     placeQuery.limit(1000);
//     const arrPlace = await placeQuery.find();
//     return arrPlace.map((place) => ({
//       label: place.toJSON().placeName,
//       value: place.toJSON().objectId,
//       placeId: place.toJSON().placeId,
//     }));
//   } catch (err) {
//     return err.message;
//   }
// }

export async function getHaproxy() {
  try {
    const Haproxy = Parse.Object.extend("Haproxy");
    const Haproxyquery = new Parse.Query(Haproxy);
    Haproxyquery.limit(1000);
    const haArr = await Haproxyquery.find();

    const res = haArr.map((ha) => ({
      label: ha.toJSON().name,
      value: ha.toJSON().objectId,
      location: ha.toJSON().location,
    }));
    console.log(res);
    return res;
  } catch (err) {
    return err.message;
  }
}

export async function getAcl() {
  try {
    const acls = Parse.Object.extend("ACLs");
    const aclquery = new Parse.Query(acls);
    aclquery.limit(1000);
    const aclarr = await aclquery.find();
    return aclarr.map((acl) => ({
      //label: acl.toJSON().name,
      value: { objectId: acl.toJSON().objectId, name: acl.toJSON().name },
    }));
  } catch (err) {
    return err.message;
  }
}
