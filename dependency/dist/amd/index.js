define(["exports", "./dependency", "events"], function (exports, _dependency, _events) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  console.log(_events);
  console.log(_dependency.value, "in ./index");
  console.log(_dependency.nested, "in ./index");

  exports.value = _dependency.value;
  exports.nested = _dependency.nested;
});
//# sourceMappingURL=index.js.map