(function() {
  'use strict'

  function cssModulesClassNames(styles) {
    var classes = '';

    for (var i = 1; i < arguments.length; i++) {
      var arg = arguments[i]

      if (!arg) continue

      var argType = typeof arg

      if ('string' === argType && styles[arg]) {
        classes += ' ' + styles[arg]
      } else if (Array.isArray(arg)) {
        classes += ' ' + styleset.bind(null, styles).apply(null, arg);
      } else if ('object' === argType) {
        classes += ' ' + Object.keys(arg).filter(function(c) {
          return arg[c] && styles[c]
        }).map(function(c) { return styles[c] })
      }
    }

    return classes.substr(1);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssModulesClassNames;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
    // AMD. Register as an anonymous module.
    define(function () {
      return cssModulesClassNames;
    });
  } else {
    window.cssModulesClassNames = cssModulesClassNames;
  }
}())