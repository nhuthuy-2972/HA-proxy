export const ACL_DB = {
  ACL: {
    TABLE_NAME: "ACLs",
    TITLE: "ACL",
  },
  FIELD_NAME: {
    OBJECT_ID: "objectId",
    ACL_NAME: "name",
    CRITERION: "criterion",
    CONDITON: "conditions",
    CREATED_AT: "createdAt",
    UPDATED_AT: "updatedAt",
  },
};
export function getTitle(title: string) {
  return {
    ADD: `THÊM ${title.toUpperCase()}`,
    DETAILS: `CHI TIẾT ${title.toUpperCase()}`,
  };
}

export function getHearder(aclName: string) {
  return [
    { headerName: `TÊN ${aclName.toUpperCase()}`, field: "name" },
    {
      headerName: `CRITERION`,
      field: `criterion`,
    },
    {
      headerName: "CONDITON",
      field: "conditions",
    },
    { headerName: "NGÀY TẠO", field: "createdAt" },
    { headerName: "NGÀY CẬP NHẬT", field: "updatedAt" },
  ];
}

// export function parseToForm(parseOj: any) {
//   return {
//     objectId: parseOj.objectId,
//     haproxyId: parseOj.serverHa.objectId || null,
//     backendName: parseOj.name || null,
//     balance: parseOj.balance || null,
//     mode: parseOj.mode || null,
//     timeout:
//       parseOj.timeout != undefined ? parseOj.timeout.value.split(" ")[1] : null,
//     unitTimeOut: parseOj.timeout != undefined ? parseOj.timeout.unit : "m",
//     optionList: parseOj.option,
//     httpList: parseOj.httpRequest,
//     serverList: parseOj.server,
//   };
// }
