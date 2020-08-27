export const FORM_JSON_DEFAULT = {
  components: [
    {
      autofocus: false,
      input: true,
      tableView: true,
      label: "Physical Server",
      key: "haproxyId",
      placeholder: "Server physical",
      data: {
        values: [],
      },
      dataSrc: "values",
      valueProperty: "",
      defaultValue: "",
      refreshOn: "",
      filter: "",
      authenticate: false,
      template: "<span>{{ item.label }}</span>",
      multiple: false,
      protected: false,
      unique: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      validate: {
        required: true,
      },
      type: "select",
      labelPosition: "top",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: "",
      },
      properties: {},
      lockKey: true,
    },
    {
      clearOnHide: false,
      label: "Columns",
      input: false,
      tableView: false,
      key: "undefinedColumns",
      columns: [
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: "text",
              inputMask: "",
              label: "Name",
              key: "name",
              placeholder: "exam: innoria_https",
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
              inputType: "number",
              label: "Maxconn",
              key: "maxConn",
              placeholder: "exam: 1000",
              prefix: "",
              suffix: "",
              defaultValue: "",
              protected: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: false,
                min: "",
                max: "",
                step: "any",
                integer: "",
                multiple: "",
                custom: "",
              },
              type: "number",
              labelPosition: "top",
              tags: [],
              conditional: {
                show: "",
                when: null,
                eq: "",
              },
              properties: {},
              lockKey: true,
            },
          ],
          width: 6,
          offset: 0,
          push: 0,
          pull: 0,
        },
        {
          components: [
            {
              autofocus: false,
              input: true,
              tableView: true,
              inputType: "text",
              inputMask: "",
              label: "Bind",
              key: "bind",
              placeholder: "exam: 0.0.0.0:6969",
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
            },
            {
              autofocus: false,
              input: true,
              tableView: true,
              label: "Mode",
              key: "mode",
              placeholder: "",
              data: {
                values: [
                  {
                    value: "http",
                    label: "Http",
                  },
                  {
                    value: "tcp",
                    label: "Tcp",
                  },
                  {
                    value: "health",
                    label: "Health",
                  },
                ],
              },
              dataSrc: "values",
              valueProperty: "",
              defaultValue: "",
              refreshOn: "",
              filter: "",
              authenticate: false,
              template: "<span>{{ item.label }}</span>",
              multiple: false,
              protected: false,
              unique: false,
              persistent: true,
              hidden: false,
              clearOnHide: true,
              validate: {
                required: true,
              },
              type: "select",
              labelPosition: "top",
              tags: [],
              conditional: {
                show: "",
                when: null,
                eq: "",
              },
              properties: {},
            },
          ],
          width: 6,
          offset: 0,
          push: 0,
          pull: 0,
        },
      ],
      type: "columns",
      hideLabel: true,
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: "",
      },
      properties: {},
    },
    {
      autofocus: false,
      input: true,
      tree: true,
      components: [
        {
          autofocus: false,
          input: true,
          tableView: true,
          label: "Type",
          key: "redirectType",
          placeholder: "Redirect type",
          data: {
            values: [
              {
                value: "location",
                label: "Location",
              },
              {
                value: "schema",
                label: "Schema",
              },
            ],
          },
          dataSrc: "values",
          valueProperty: "",
          defaultValue: "",
          refreshOn: "",
          filter: "",
          authenticate: false,
          template: "<span>{{ item.label }}</span>",
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: true,
          },
          type: "select",
          inDataGrid: true,
          labelPosition: "top",
          tags: [],
          conditional: {
            show: "",
            when: null,
            eq: "",
          },
          properties: {},
          lockKey: true,
        },
        {
          autofocus: false,
          input: true,
          tableView: true,
          inputType: "text",
          inputMask: "",
          label: "Value",
          key: "value",
          placeholder: "exam: https://www.innoria.com",
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
          inDataGrid: true,
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
          label: "Condition",
          key: "condition",
          placeholder: "condition",
          data: {
            values: [
              {
                value: "if",
                label: "if",
              },
              {
                value: "unless",
                label: "unless",
              },
            ],
          },
          dataSrc: "values",
          valueProperty: "",
          defaultValue: "",
          refreshOn: "",
          filter: "",
          authenticate: false,
          template: "<span>{{ item.label }}</span>",
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
          },
          type: "select",
          inDataGrid: true,
          labelPosition: "top",
          tags: [],
          conditional: {
            show: "",
            when: null,
            eq: "",
          },
          properties: {},
          lockKey: true,
        },
        {
          autofocus: false,
          input: true,
          tableView: true,
          inputType: "text",
          inputMask: "",
          label: "Custom ACL",
          key: "customAcl",
          placeholder: "",
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
            required: false,
            minLength: "",
            maxLength: "",
            pattern: "",
            custom: "",
            customPrivate: false,
          },
          conditional: {
            show: "true",
            when: "condition",
            eq: "",
          },
          type: "textfield",
          inDataGrid: true,
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
          label: "ACL",
          key: "acl",
          placeholder: "Access control list",
          data: {
            values: [],
          },
          dataSrc: "values",
          valueProperty: "",
          defaultValue: "",
          refreshOn: "",
          filter: "",
          authenticate: false,
          template: "<span>{{ item.value.name }}</span>",
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: true,
          },
          type: "select",
          inDataGrid: true,
          labelPosition: "top",
          tags: [],
          conditional: {
            show: "false",
            when: "condition",
            eq: "",
          },
          properties: {},
          lockKey: true,
        },
      ],
      tableView: true,
      label: "Redirect",
      key: "redirectList",
      protected: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      type: "datagrid",
      addAnotherPosition: "bottom",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: "",
      },
      properties: {},
      lockKey: true,
      addAnother: "Add",
      customClass: "table-borderless",
    },
    {
      autofocus: false,
      input: true,
      tree: true,
      components: [
        {
          autofocus: false,
          input: true,
          tableView: true,
          label: "Backend name",
          key: "backendName",
          placeholder: "Backend name",
          data: {
            values: [],
          },
          dataSrc: "values",
          valueProperty: "",
          defaultValue: "",
          refreshOn: "",
          filter: "",
          authenticate: false,
          template: "<span>{{ item.label }}</span>",
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: true,
          },
          type: "select",
          inDataGrid: true,
          labelPosition: "top",
          tags: [],
          conditional: {
            show: "",
            when: null,
            eq: "",
          },
          properties: {},
          lockKey: true,
        },
        {
          autofocus: false,
          input: true,
          tableView: true,
          label: "Condition",
          key: "condition",
          placeholder: "condition",
          data: {
            values: [
              {
                value: "if",
                label: "if",
              },
              {
                value: "unless",
                label: "unless",
              },
            ],
          },
          dataSrc: "values",
          valueProperty: "",
          defaultValue: "",
          refreshOn: "",
          filter: "",
          authenticate: false,
          template: "<span>{{ item.label }}</span>",
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: false,
          },
          type: "select",
          inDataGrid: true,
          labelPosition: "top",
          tags: [],
          conditional: {
            show: "",
            when: null,
            eq: "",
          },
          properties: {},
          lockKey: true,
        },
        {
          autofocus: false,
          input: true,
          tableView: true,
          inputType: "text",
          inputMask: "",
          label: "Custom Condition",
          key: "customCondition",
          placeholder: "",
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
            required: false,
            minLength: "",
            maxLength: "",
            pattern: "",
            custom: "",
            customPrivate: false,
          },
          conditional: {
            show: "true",
            when: "condition",
            eq: "",
          },
          type: "textfield",
          inDataGrid: true,
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
          label: "ACL",
          key: "acl",
          placeholder: "Access control list",
          data: {
            values: [],
          },
          dataSrc: "values",
          valueProperty: "",
          defaultValue: "",
          refreshOn: "",
          filter: "",
          authenticate: false,
          template: "<span>{{ item.value.name }}</span>",
          multiple: false,
          protected: false,
          unique: false,
          persistent: true,
          hidden: false,
          clearOnHide: true,
          validate: {
            required: true,
          },
          type: "select",
          inDataGrid: true,
          labelPosition: "top",
          tags: [],
          conditional: {
            show: "false",
            when: "condition",
            eq: "",
          },
          properties: {},
          lockKey: true,
        },
      ],
      tableView: true,
      label: "Use Backend",
      key: "useBackendList",
      protected: false,
      persistent: true,
      hidden: false,
      clearOnHide: true,
      type: "datagrid",
      addAnotherPosition: "bottom",
      tags: [],
      conditional: {
        show: "",
        when: null,
        eq: "",
      },
      properties: {},
      lockKey: true,
      addAnother: "Add",
      customClass: "table-borderless",
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

export const FRONTEND_DB = {
  FRONTEND: {
    TABLE_NAME: "Frontend",
    TITLE: "Frontend",
  },
  FIELD_NAME: {
    OBJECT_ID: "objectId",
    FRONTEND_NAME: "name",
    HASERVER: "serverHa",
    BIND: "bind",
    MAXCONN: "maxConn",
    ACL: "acl",
    ACL_CUSTOM: "customAcl",
    MODE: "mode",
    USE_BACKEND: "useBackend",
    REDIRECT: "redirect",
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

export function getHearder(backendName: string) {
  return [
    { headerName: `TÊN ${backendName.toUpperCase()}`, field: "name" },
    {
      headerName: `HA SERVER`,
      field: `serverHa.name`,
      // width: 150,
      // minWidth: 100,
      // maxWidth: 250,
    },
    {
      headerName: "Bind",
      field: "bind",
    },
    { headerName: "NGÀY TẠO", field: "createdAt" },
    { headerName: "NGÀY CẬP NHẬT", field: "updatedAt" },
  ];
}

export function parseToForm(parseOj: any) {
  return {
    ...parseOj,
    redirectList: parseOj.redirect,
    useBackendList: parseOj.useBackend,
    haproxyId: parseOj.serverHa.objectId,
  };
}
