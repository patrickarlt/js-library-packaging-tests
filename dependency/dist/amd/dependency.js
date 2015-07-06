define(['exports', './nested-dependency'], function (exports, _nestedDependency) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _nested = _interopRequire(_nestedDependency);

  var value = 'Dependency';

  console.log(value, 'in ./dependency');
  console.log(_nested, 'in ./dependency');

  exports.value = value;
  exports.nested = _nested;
});
//# sourceMappingURL=dependency.js.map