export const FORM_JSON_DEFAULT = {
  components: [
    {
      autofocus: false,
      input: true,
      tableView: true,
      inputType: "text",
      inputMask: "",
      label: "Name",
      key: "name",
      placeholder: "Name",
      prefix: "",
      suffix: "",
      multiple: false,
      defaultValue: "",
      protected: false,
      unique: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      spellcheck: true,
      validate: {
        required: true,
        minLength: "",
        maxLength: "",
        pattern: "",
        custom: "",
        customPrivate: false,
      },
      conditional: {
        show: "",
        when: null,
        eq: "",
      },
      type: "textfield",
      labelPosition: "top",
      inputFormat: "plain",
      tags: [],
      properties: {},
      lockKey: true,
    },
    {
      autofocus: false,
      input: true,
      tableView: true,
      inputType: "text",
      inputMask: "",
      label: "Location",
      key: "location",
      placeholder: "location",
      prefix: "",
      suffix: "",
      multiple: false,
      defaultValue: "",
      protected: false,
      unique: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      spellcheck: true,
      validate: {
        required: true,
        minLength: "",
        maxLength: "",
        pattern: "",
        custom: "",
        customPrivate: false,
      },
      conditional: {
        show: "",
        when: null,
        eq: "",
      },
      type: "textfield",
      labelPosition: "top",
      inputFormat: "plain",
      tags: [],
      properties: {},
      lockKey: true,
    },
    {
      type: "button",
      theme: "success",
      disableOnInvalid: true,
      action: "event",
      rightIcon: "",
      leftIcon: "",
      size: "md",
      key: "saveButton",
      tableView: false,
      label: "Save",
      input: true,
      event: "onSave",
    },
  ],
  display: "form",
  page: 0,
};

export const SERVER_DB = {
  SERVER: {
    TABLE_NAME: "Haproxy",
    TITLE: "HAPROXY",
  },
  FIELD_NAME: {
    OBJECT_ID: "objectId",
    SERVER_NAME: "name",
    LOCATION: "location",
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
      headerName: `LOCATION`,
      field: `location`,
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
