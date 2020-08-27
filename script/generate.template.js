const _ = require("lodash");

const usebackend_template = (object) => {
  return `use_backend ${object.name} ${
    _.isEmpty(object.condition) ? "" : `${object.condition} ${object.acl} `
  } ${_.isEmpty(object.aclc) ? "" : object.aclc}`;
};

const server_template = (name, value) => {
  return `server ${name} ${value}`;
};

const log_template = (value) => {
  return `log ${value}`;
};

const mode_template = (value) => {
  return `mode ${value}`;
};

const logFormat_template = (value) => {
  return `log-format ${value}`;
};

const option_template = (value) => {
  return `option ${value}`;
};

const timeout_template = (type, time, unit) => {
  return `timeout ${type} ${time}${unit}`;
};

const frontend_template = (name) => {
  return `frontend ${name}`;
};

const maxconn_template = (value) => {
  return `maxconn ${value}`;
};

const bind_template = (value) => {
  return `bind ${value}`;
};

const balance_tenmplate = (value) => {
  return `balance ${value}`;
};

const stats_template = (option, value) => {
  return `stats ${option} ${value ? value : ""}`;
};

const acl_template = (name, criterion, conditions) => {
  return `acl ${name} ${criterion} ${conditions ? conditions : ""}`;
};

const redirect_template = (option, value, condition, acl) => {
  return `redirect ${option} ${value} ${
    _.isEmpty(condition) ? "" : `${condition} ${acl}`
  }`;
};

const httprequest_template = (option, value, condition, acl) => {
  return `http-request ${option} ${value} ${
    _.isEmpty(condition) ? "" : `${condition} ${acl}`
  }`;
};
const res = httprequest_template(
  "add header",
  "X-Forwarded-Host %[req.hdr(Host)] if !{con cat ne}"
);
console.log(res);
