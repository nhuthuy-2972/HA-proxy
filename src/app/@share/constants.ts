import { environment } from "../../environments/environment";

export const ACTION_TYPE = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
};

export const HANDLE_CLICK_BUTTON = {
  ON_SAVE: {
    key: "saveButton",
    event: "onSave",
    label: "LƯU",
    theme: "primary",
  },
  ON_DISABLE: {
    key: "disableButton",
    event: "onDisable",
    label: "VÔ HIỆU HÓA",
    theme: "danger",
  },
  ON_SEARCH: {
    key: "searchButton",
    event: "onSearchbar",
    label: "TÌM KIẾM",
    theme: "primary",
  },
};

export const CONFIG_AG_GRID = {
  flex: 1,
  autoHeight: true,
  sortable: true,
  resizable: true,
  suppressSizeToFit: false,
};

export const LOADING_AG_GRID = `<div class='ag-loading-template'><span>Đang tải dữ liệu...</span></div>`;
export const NO_ROWS_AG_GRID = `<div class='ag-loading-template'><span>Không có dữ liệu...</span></div>`;

export const VALIDITY = {
  true: {
    name: "Có hiệu lực",
    value: true,
  },
  false: {
    name: "Vô hiệu hóa",
    value: false,
  },
};

export const PARSE_REQUEST_HEADER = [
  {
    key: "X-Parse-Application-Id",
    value: environment.appId,
  },
  {
    key: "X-Parse-Master-Key",
    value: "12038d977e3c0f2b53a5939973f48acd",
  },
];
