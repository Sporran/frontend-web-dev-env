"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _open = _interopRequireDefault(require("open"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* var express = require ('express'); */

/* var path = require ('path'); */

/* var open = require ('open'); */

/* eslint-disable no-console */
var port = 3000;
var app = (0, _express.default)();
app.get('/', function (req, res) {
  res.sendFile(_path.default.join(__dirname, '../src/index.html'));
});
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    (0, _open.default)('http://localhost:' + port);
  }
});