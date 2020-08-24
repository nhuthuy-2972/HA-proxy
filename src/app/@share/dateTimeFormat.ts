import * as moment from "moment/moment";

const FORMAT_TYPE = {
  common: "DD-MM-YYYY hh:mm",
};

export function dateTimeFormat(value: any, type: string = "common") {
  return moment(value).format(FORMAT_TYPE[type]);
}
