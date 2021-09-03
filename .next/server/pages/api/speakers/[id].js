(function() {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import speakerData from '../../../src/SpeakerData';



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(speakerData,null,2));
  const method = req === null || req === void 0 ? void 0 : req.method;
  const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);
  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");

  switch (method) {
    case "POST":
      await postMethod();
      break;

    case "PUT":
      await putMethod();
      break;

    case "DELETE":
      await deleteMethod();
      break;

    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newSpeakersArray = speakers.map(function (rec) {
          return rec.id == id ? recordFromBody : rec;
        });
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`PUT /api/speakers/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`PUT /api/speakers/${id}  status: 500 unexpected error`);
      console.log(`PUT /api/speakers/${id}  status: 200`, e);
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newSpeakersArray = speakers.filter(function (rec) {
          return rec.id != id;
        });
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(speakers.find(rec => rec.id == id), null, 2));
        console.log(`DELETE /api/speakers/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`DELETE /api/speakers/${id}  status: 500 unexpected error`);
      console.log(`DELETE /api/speakers/${id}  status: 200`, e);
    }
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const idNew = speakers.reduce((accumulator, currentValue) => {
          const idCurrent = parseInt(currentValue.id);
          return idCurrent > accumulator ? idCurrent : accumulator;
        }, 0) + 1;

        const newSpeakerRec = _objectSpread(_objectSpread({}, recordFromBody), {}, {
          id: idNew.toString()
        });

        const newSpeakersArray = [newSpeakerRec, ...speakers];
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newSpeakerRec, null, 2));
        console.log(`POST /api/speakers/${id}  status: 200`);
      }
    } catch (e) {
      res.status(500).send(`POST /api/speakers/${id}  status: 500 unexpected error`);
      console.log(`POST /api/speakers/${id}  status: 200`, e);
    }
  }
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbHVyYWxzaWdodC5jb20vLi9wYWdlcy9hcGkvc3BlYWtlcnMvW2lkXS5qcyIsIndlYnBhY2s6Ly9wbHVyYWxzaWdodC5jb20vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL3BsdXJhbHNpZ2h0LmNvbS9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9wbHVyYWxzaWdodC5jb20vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJ3cml0ZUZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsInJlY29yZEZyb21Cb2R5IiwiYm9keSIsImpzb25GaWxlIiwicGF0aCIsInBvc3RNZXRob2QiLCJwdXRNZXRob2QiLCJkZWxldGVNZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInJlYWRGaWxlRGF0YSIsInNwZWFrZXJzIiwiSlNPTiIsInBhcnNlIiwibmV3U3BlYWtlcnNBcnJheSIsIm1hcCIsInJlYyIsInN0cmluZ2lmeSIsInNldEhlYWRlciIsImUiLCJmaWx0ZXIiLCJmaW5kIiwiaWROZXciLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImN1cnJlbnRWYWx1ZSIsImlkQ3VycmVudCIsIm5ld1NwZWFrZXJSZWMiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFnQkMsbUJBQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csb0RBQUQsQ0FBMUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLFNBQVMsQ0FBQ0cscURBQUQsQ0FBM0I7O0FBQ0EsTUFB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cUJYLEVBQUcsZ0NBRmpDO0FBR0FZLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLHNCQUFxQmIsRUFBRyxlQUFyQyxFQUFxRHVCLENBQXJEO0FBQ0Q7QUFDRjtBQUNGLEM7Ozs7Ozs7Ozs7O0FDN0hELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9zcGVha2Vycy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vLi4vLi4vc3JjL1NwZWFrZXJEYXRhJztcclxuXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCB3cml0ZUZpbGUgPSBwcm9taXNpZnkoZnMud3JpdGVGaWxlKTtcclxuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShzcGVha2VyRGF0YSxudWxsLDIpKTtcclxuXHJcbiAgY29uc3QgbWV0aG9kID0gcmVxPy5tZXRob2Q7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXE/LnF1ZXJ5LmlkKTtcclxuICBjb25zdCByZWNvcmRGcm9tQm9keSA9IHJlcT8uYm9keTtcclxuICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZShcIi4vXCIsIFwiZGIuanNvblwiKTtcclxuXHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGF3YWl0IHBvc3RNZXRob2QoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgIGF3YWl0IHB1dE1ldGhvZCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgYXdhaXQgZGVsZXRlTWV0aG9kKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg1MDEpLnNlbmQoYE1ldGhvZCAke21ldGhvZH0gbm90IGltcGxlbWVudGVkYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBNZXRob2QgJHttZXRob2R9IG5vdCBpbXBsZW1lbnRlZGApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcHV0TWV0aG9kKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICAgIGlmICghc3BlYWtlcnMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdTcGVha2Vyc0FycmF5ID0gc3BlYWtlcnMubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgIHJldHVybiByZWMuaWQgPT0gaWQgPyByZWNvcmRGcm9tQm9keSA6IHJlYztcclxuICAgICAgICB9KTtcclxuICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICBqc29uRmlsZSxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXkgfSwgbnVsbCwgMilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHJlY29yZEZyb21Cb2R5LCBudWxsLCAyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBVVCAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDIwMGApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoNTAwKVxyXG4gICAgICAgIC5zZW5kKGBQVVQgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiA1MDAgdW5leHBlY3RlZCBlcnJvcmApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUFVUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVNZXRob2QoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XHJcbiAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgICBjb25zdCBzcGVha2VycyA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICAgICAgaWYgKCFzcGVha2Vycykge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDA0XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG5ld1NwZWFrZXJzQXJyYXkgPSBzcGVha2Vycy5maWx0ZXIoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlYy5pZCAhPSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICBqc29uRmlsZSxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXkgfSwgbnVsbCwgMilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHNwZWFrZXJzLmZpbmQoKHJlYykgPT4gcmVjLmlkID09IGlkKSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYERFTEVURSAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDIwMGApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoNTAwKVxyXG4gICAgICAgIC5zZW5kKGBERUxFVEUgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiA1MDAgdW5leHBlY3RlZCBlcnJvcmApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgREVMRVRFIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBwb3N0TWV0aG9kKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICAgIGlmICghc3BlYWtlcnMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBpZE5ldyA9XHJcbiAgICAgICAgICBzcGVha2Vycy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWRDdXJyZW50ID0gcGFyc2VJbnQoY3VycmVudFZhbHVlLmlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlkQ3VycmVudCA+IGFjY3VtdWxhdG9yID8gaWRDdXJyZW50IDogYWNjdW11bGF0b3I7XHJcbiAgICAgICAgICB9LCAwKSArIDE7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NwZWFrZXJSZWMgPSB7IC4uLnJlY29yZEZyb21Cb2R5LCBpZDogaWROZXcudG9TdHJpbmcoKSB9O1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTcGVha2Vyc0FycmF5ID0gW25ld1NwZWFrZXJSZWMsIC4uLnNwZWFrZXJzXTtcclxuICAgICAgICB3cml0ZUZpbGUoXHJcbiAgICAgICAgICBqc29uRmlsZSxcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXkgfSwgbnVsbCwgMilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KG5ld1NwZWFrZXJSZWMsIG51bGwsIDIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgUE9TVCAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDIwMGApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoNTAwKVxyXG4gICAgICAgIC5zZW5kKGBQT1NUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogNTAwIHVuZXhwZWN0ZWQgZXJyb3JgKTtcclxuICAgICAgY29uc29sZS5sb2coYFBPU1QgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiAyMDBgLCBlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=