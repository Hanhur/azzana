// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/img/search.svg":[function(require,module,exports) {
module.exports = "/search.dca1606c.svg";
},{}],"src/img/cosh.svg":[function(require,module,exports) {
module.exports = "/cosh.9c55a7ab.svg";
},{}],"src/img/logo.png":[function(require,module,exports) {
module.exports = "/logo.a0487e91.png";
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/page/pageHeader/pageHeader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageHeader/pageHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageHeader = getPageHeader;
var _search = _interopRequireDefault(require("../../img/search.svg"));
var _cosh = _interopRequireDefault(require("../../img/cosh.svg"));
var _logo = _interopRequireDefault(require("../../img/logo.png"));
require("./pageHeader.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var headreArray_1 = ["Home ", "Necklaces", "Braceltes", "Rings"];
var headreArray_2 = ["Earrings", "Ankle Bracelets", "All", "Track My Oreder"];
function getPageHeader() {
  var header = document.createElement("header");
  header.className = "page-header";
  var headerDiv = document.createElement("div");
  headerDiv.className = "header-div";
  headerDiv.innerHTML = "\n        <p class=\"header-div-text\">CHRISTMAS SALE: 2 JEWELERY PURCHASED, THE 3rd FREE! / FREE DELIVERY FR</p>\n        <img class=\"header-div-img\" src=\"".concat(_search.default, "\">\n        <p class=\"header-div_text\">SEARCH</p>\n        <img class=\"header-div_img\" src=\"").concat(_cosh.default, "\">\n    ");
  var container = document.createElement("div");
  container.className = "container";
  var headerBlock = document.createElement("div");
  headerBlock.className = "header-block";
  var headerList_1 = document.createElement("ul");
  headerList_1.className = "header-list";
  headreArray_1.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "header-items";
    var link = document.createElement("a");
    link.className = "header-link";
    link.href = "#";
    headerList_1.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var headerList_2 = document.createElement("ul");
  headerList_2.className = "header-list";
  headreArray_2.forEach(function (item) {
    var items = document.createElement("li");
    items.className = "header-items";
    var link = document.createElement("a");
    link.className = "header-link";
    link.href = "#";
    headerList_2.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var headerImg = document.createElement("img");
  headerImg.className = "header-img";
  headerImg.src = _logo.default;
  headerImg.alt = "Azzana";
  header.append(headerDiv);
  header.append(container);
  container.append(headerBlock);
  headerBlock.append(headerList_1, headerImg, headerList_2);
  return header;
}
},{"../../img/search.svg":"src/img/search.svg","../../img/cosh.svg":"src/img/cosh.svg","../../img/logo.png":"src/img/logo.png","./pageHeader.css":"src/page/pageHeader/pageHeader.css"}],"src/components/main/sectionMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/main-bg.png":[["main-bg.13403173.png","src/img/main-bg.png"],"src/img/main-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/main/sectionMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionMain = getSectionMain;
require("./sectionMain.css");
function getSectionMain() {
  var section = document.createElement("section");
  section.className = "section-main";
  var container = document.createElement("div");
  container.className = "container";
  var sectionBlock = document.createElement("div");
  sectionBlock.className = "section-block";
  sectionBlock.innerHTML = "\n        <h1 class=\"section-block-title\">Black Friday</h1>\n        <p class=\"section-block-text\">2 Bijoux Achetes le 3eme Offert !</p>\n        <button class=\"section-block-btn\">Discover the Jewelry</button>\n    ";
  section.append(container);
  container.append(sectionBlock);
  return section;
}
},{"./sectionMain.css":"src/components/main/sectionMain.css"}],"src/img/bestsellers/images1.png":[function(require,module,exports) {
module.exports = "/images1.776f9379.png";
},{}],"src/img/bestsellers/images2.png":[function(require,module,exports) {
module.exports = "/images2.76cff5c1.png";
},{}],"src/img/bestsellers/images3.png":[function(require,module,exports) {
module.exports = "/images3.4e18b362.png";
},{}],"src/img/bestsellers/images4.png":[function(require,module,exports) {
module.exports = "/images4.5e4777da.png";
},{}],"src/img/bestsellers/images5.png":[function(require,module,exports) {
module.exports = "/images5.100013ee.png";
},{}],"src/img/bestsellers/images6.png":[function(require,module,exports) {
module.exports = "/images6.1f249f4d.png";
},{}],"src/img/bestsellers/images7.png":[function(require,module,exports) {
module.exports = "/images7.16711f54.png";
},{}],"src/img/bestsellers/images8.png":[function(require,module,exports) {
module.exports = "/images8.23444c22.png";
},{}],"src/img/bestsellers/images9.svg":[function(require,module,exports) {
module.exports = "/images9.f4feb621.svg";
},{}],"src/img/bestsellers/images10.svg":[function(require,module,exports) {
module.exports = "/images10.e4af1e8b.svg";
},{}],"src/img/bestsellers/ellipse.png":[function(require,module,exports) {
module.exports = "/ellipse.8d1232e1.png";
},{}],"src/components/bestsellers/bestsellers.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/bestsellers/heading_left.png":[["heading_left.217fc3d7.png","src/img/bestsellers/heading_left.png"],"src/img/bestsellers/heading_left.png"],"./../../img/bestsellers/heading_right.png":[["heading_right.7072f3d3.png","src/img/bestsellers/heading_right.png"],"src/img/bestsellers/heading_right.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/bestsellers/bestsellers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBestsellers = getBestsellers;
var _images = _interopRequireDefault(require("../../img/bestsellers/images1.png"));
var _images2 = _interopRequireDefault(require("../../img/bestsellers/images2.png"));
var _images3 = _interopRequireDefault(require("../../img/bestsellers/images3.png"));
var _images4 = _interopRequireDefault(require("../../img/bestsellers/images4.png"));
var _images5 = _interopRequireDefault(require("../../img/bestsellers/images5.png"));
var _images6 = _interopRequireDefault(require("../../img/bestsellers/images6.png"));
var _images7 = _interopRequireDefault(require("../../img/bestsellers/images7.png"));
var _images8 = _interopRequireDefault(require("../../img/bestsellers/images8.png"));
var _images9 = _interopRequireDefault(require("../../img/bestsellers/images9.svg"));
var _images10 = _interopRequireDefault(require("../../img/bestsellers/images10.svg"));
var _ellipse = _interopRequireDefault(require("../../img/bestsellers/ellipse.png"));
require("./bestsellers.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var bestsellersArray = [_images.default, _images2.default, _images3.default, _images4.default, _images5.default, _images6.default, _images7.default, _images8.default];
function getBestsellers() {
  var section = document.createElement("section");
  section.className = "section-bestsellers";
  var container = document.createElement("div");
  container.className = "container";
  var shippingBlock = document.createElement("div");
  shippingBlock.className = "shipping-block";
  shippingBlock.innerHTML = "\n        <p class=\"shipping-text\">FREE SHIPPING FR</p>\n        <h2 class=\"shipping-title\">The Bestsellers</h2>\n    ";
  var bestsellersBlock = document.createElement("div");
  bestsellersBlock.className = "bestsellers-block";
  var listItems = bestsellersArray.map(function (imageSrc) {
    return "\n       <ul class=\"bestsellers-list\">\n            <li class=\"bestsellers-item\">\n                <img class=\"bestsellers-ellipse\" src=\"".concat(_ellipse.default, "\">\n                <img class=\"bestsellers-img\" src=\"").concat(imageSrc, "\" alt=\"Person Image\">\n                <div class=\"bestsellers-box\">\n                    <h3 class=\"bestsellers-title\">NECKLACE \"MURATO\"</h3>\n                    <div class=\"bestsellers_box\">\n                        <span class=\"bestsellers-span\">$ 19.99</span>\n                        <span class=\"bestsellers_span\">$ 23.00</span>\n                    </div>\n                    <div class=\"bestsellers-box_img\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images9.default, "\">\n                        <img class=\"bestsellers_img\" src=\"").concat(_images10.default, "\">\n                    </div>\n                </div>\n            </li>\n       </ul>\n    ");
  }).join("");
  var bestsellersButton = document.createElement("button");
  bestsellersButton.className = "bestsellers-btn";
  bestsellersButton.textContent = "See All Jewelery";
  bestsellersBlock.innerHTML = listItems;
  section.append(container);
  container.append(shippingBlock, bestsellersBlock, bestsellersButton);
  return section;
}
},{"../../img/bestsellers/images1.png":"src/img/bestsellers/images1.png","../../img/bestsellers/images2.png":"src/img/bestsellers/images2.png","../../img/bestsellers/images3.png":"src/img/bestsellers/images3.png","../../img/bestsellers/images4.png":"src/img/bestsellers/images4.png","../../img/bestsellers/images5.png":"src/img/bestsellers/images5.png","../../img/bestsellers/images6.png":"src/img/bestsellers/images6.png","../../img/bestsellers/images7.png":"src/img/bestsellers/images7.png","../../img/bestsellers/images8.png":"src/img/bestsellers/images8.png","../../img/bestsellers/images9.svg":"src/img/bestsellers/images9.svg","../../img/bestsellers/images10.svg":"src/img/bestsellers/images10.svg","../../img/bestsellers/ellipse.png":"src/img/bestsellers/ellipse.png","./bestsellers.css":"src/components/bestsellers/bestsellers.css"}],"src/components/values/values.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/values-bg.png":[["values-bg.51bd731b.png","src/img/values-bg.png"],"src/img/values-bg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/values/values.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValues = getValues;
require("./values.css");
function getValues() {
  var section = document.createElement("section");
  section.className = "section-values";
  var container = document.createElement("div");
  container.className = "container";
  var valuesBlock = document.createElement("div");
  valuesBlock.className = "values-block";
  valuesBlock.innerHTML = "\n        <h2 class=\"values-title\">\n            OUR \n            <span class=\"values-span\">VALUES</span>\n        </h2>\n        <p class=\"values-text\">\n            At Azzana, we believe that you deserve the best, and that you\n            should not choose between quality, affordable prices,\n            and real values.\n        </p>\n        <p class=\"values-text\">\n            Quality has never been so affordable thanks to our collection of\n            more than 200 minimalist jewels, ready to accompany you\n            everywhere! :)\n        </p>\n    ";
  section.append(container);
  container.append(valuesBlock);
  return section;
}
},{"./values.css":"src/components/values/values.css"}],"src/img/vector.svg":[function(require,module,exports) {
module.exports = "/vector.cabdd857.svg";
},{}],"src/img/shippingBestsellers/images1.png":[function(require,module,exports) {
module.exports = "/images1.0af1a68c.png";
},{}],"src/img/shippingBestsellers/images2.png":[function(require,module,exports) {
module.exports = "/images2.81fcd651.png";
},{}],"src/img/shippingBestsellers/images3.png":[function(require,module,exports) {
module.exports = "/images3.18fb11a2.png";
},{}],"src/img/shippingBestsellers/images4.png":[function(require,module,exports) {
module.exports = "/images4.dfcf9524.png";
},{}],"src/img/shippingBestsellers/images5.png":[function(require,module,exports) {
module.exports = "/images5.80432cf0.png";
},{}],"src/components/shippingBestsellers/shippingBestsellers.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/shippingBestsellers/shippingBestsellers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShippingBestsellers = getShippingBestsellers;
var _vector = _interopRequireDefault(require("../../img/vector.svg"));
var _images = _interopRequireDefault(require("../../img/shippingBestsellers/images1.png"));
var _images2 = _interopRequireDefault(require("../../img/shippingBestsellers/images2.png"));
var _images3 = _interopRequireDefault(require("../../img/shippingBestsellers/images3.png"));
var _images4 = _interopRequireDefault(require("../../img/shippingBestsellers/images4.png"));
var _images5 = _interopRequireDefault(require("../../img/shippingBestsellers/images5.png"));
require("./shippingBestsellers.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var shippingBestsellersArray = [_images.default, _images2.default, _images4.default, _images5.default];
function getShippingBestsellers() {
  var section = document.createElement("section");
  section.className = "section-shipping-bestsellers";
  var container = document.createElement("div");
  container.className = "container";
  var blockInner = document.createElement("div");
  blockInner.className = "block-inner";
  var shippingBestsellersBlock = document.createElement("div");
  shippingBestsellersBlock.className = "shipping-bestsellers";
  shippingBestsellersBlock.innerHTML = "\n        <div class=\"shipping-bestsellers-block\">\n            <p class=\"shipping-bestsellers-text\">FREE SHIPPING FR</p>\n            <h2 class=\"shipping-bestsellers-title\">The Bestsellers</h2>\n            <p class=\"shipping-bestsellers_text\">\n                At Azzana, we believe that you deserve the best, and that you should\n                not choose between quality, affordable prices,and real values.At Azzana,\n                we believe that you deserve the best, and that you should not choose\n                between quality, affordable prices, and real values. At Azzana, we believe\n                that you deserve the best.\n            </p>\n            <div class=\"shipping-bestsellers-box\">\n                <span class=\"shipping-bestsellers-span\">VIEW</span>\n                <img class=\"shipping-bestsellers-img\" src=\"".concat(_vector.default, "\" width=\"30\">\n            </div>\n        </div>\n        <img class=\"shipping-bestsellers_img\" src=\"").concat(_images3.default, "\">\n        <div class=\"shipping__bestsellers\">\n            <p class=\"rings\">ear rings</p>\n            <button class=\"button\">Discover</button>\n        </div>\n    ");
  var BestsellersBlock = document.createElement("div");
  BestsellersBlock.className = "shipping-bestsellers_box";
  var listItems = shippingBestsellersArray.map(function (imageSrc) {
    return "\n        <img class=\"shipping-bestsellers__img\" src=\"".concat(imageSrc, "\" alt=\"Person Image\">\n    ");
  }).join("");
  BestsellersBlock.innerHTML = listItems;
  section.append(container);
  container.append(blockInner);
  blockInner.append(shippingBestsellersBlock, BestsellersBlock);
  return section;
}
},{"../../img/vector.svg":"src/img/vector.svg","../../img/shippingBestsellers/images1.png":"src/img/shippingBestsellers/images1.png","../../img/shippingBestsellers/images2.png":"src/img/shippingBestsellers/images2.png","../../img/shippingBestsellers/images3.png":"src/img/shippingBestsellers/images3.png","../../img/shippingBestsellers/images4.png":"src/img/shippingBestsellers/images4.png","../../img/shippingBestsellers/images5.png":"src/img/shippingBestsellers/images5.png","./shippingBestsellers.css":"src/components/shippingBestsellers/shippingBestsellers.css"}],"src/img/servic/images1.svg":[function(require,module,exports) {
module.exports = "/images1.85978f87.svg";
},{}],"src/img/servic/images2.svg":[function(require,module,exports) {
module.exports = "/images2.0493ea55.svg";
},{}],"src/img/servic/images3.svg":[function(require,module,exports) {
module.exports = "/images3.e75171ad.svg";
},{}],"src/img/servic/images4.svg":[function(require,module,exports) {
module.exports = "/images4.16b3f61d.svg";
},{}],"src/components/servic/servic.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../img/servic/bedrop.png":[["bedrop.0b429c44.png","src/img/servic/bedrop.png"],"src/img/servic/bedrop.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/servic/servic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServic = getServic;
var _images = _interopRequireDefault(require("../../img/servic/images1.svg"));
var _images2 = _interopRequireDefault(require("../../img/servic/images2.svg"));
var _images3 = _interopRequireDefault(require("../../img/servic/images3.svg"));
var _images4 = _interopRequireDefault(require("../../img/servic/images4.svg"));
require("./servic.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getServic() {
  var section = document.createElement("section");
  section.className = "section-servic";
  var container = document.createElement("div");
  container.className = "container";
  var servicBlock = document.createElement("div");
  servicBlock.className = "servic-block";
  servicBlock.innerHTML = "\n        <div class=\"servic-box\">\n            <img class=\"servic-img\" src=\"".concat(_images.default, "\">\n            <p class=\"servic-text\">FREE TRACKED DELIVERY</p>\n        </div>\n        <div class=\"servic-box\">\n            <img class=\"servic-img\" src=\"").concat(_images2.default, "\">\n            <p class=\"servic-text\">QUICK RETURNS AND EXCHANGES</p>\n        </div>\n        <div class=\"servic-box\">\n            <img class=\"servic-img\" src=\"").concat(_images3.default, "\">\n            <p class=\"servic-text\">24/7  CUSTOMER SERVICE</p>\n        </div>\n        <div class=\"servic-box\">\n            <img class=\"servic-img\" src=\"").concat(_images4.default, "\">\n            <p class=\"servic-text\">100% SECURE PAYMENT</p>\n        </div>\n    ");
  section.append(container);
  container.append(servicBlock);
  return section;
}
},{"../../img/servic/images1.svg":"src/img/servic/images1.svg","../../img/servic/images2.svg":"src/img/servic/images2.svg","../../img/servic/images3.svg":"src/img/servic/images3.svg","../../img/servic/images4.svg":"src/img/servic/images4.svg","./servic.css":"src/components/servic/servic.css"}],"src/page/pageMain/pageMain.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageMain/pageMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageMain = getPageMain;
var _sectionMain = require("../../components/main/sectionMain");
var _bestsellers = require("../../components/bestsellers/bestsellers");
var _values = require("../../components/values/values");
var _shippingBestsellers = require("../../components/shippingBestsellers/shippingBestsellers");
var _servic = require("../../components/servic/servic");
require("./pageMain.css");
function getPageMain() {
  var main = document.createElement("main");
  main.className = "main";
  var sectionMain = (0, _sectionMain.getSectionMain)();
  var bestsellers = (0, _bestsellers.getBestsellers)();
  var values = (0, _values.getValues)();
  var shippingBestsellers = (0, _shippingBestsellers.getShippingBestsellers)();
  var servic = (0, _servic.getServic)();
  main.append(sectionMain, bestsellers, values, shippingBestsellers, servic);
  return main;
}
},{"../../components/main/sectionMain":"src/components/main/sectionMain.js","../../components/bestsellers/bestsellers":"src/components/bestsellers/bestsellers.js","../../components/values/values":"src/components/values/values.js","../../components/shippingBestsellers/shippingBestsellers":"src/components/shippingBestsellers/shippingBestsellers.js","../../components/servic/servic":"src/components/servic/servic.js","./pageMain.css":"src/page/pageMain/pageMain.css"}],"src/img/facebook.svg":[function(require,module,exports) {
module.exports = "/facebook.64abde7d.svg";
},{}],"src/img/twitter.svg":[function(require,module,exports) {
module.exports = "/twitter.015fe60e.svg";
},{}],"src/img/linkedln.svg":[function(require,module,exports) {
module.exports = "/linkedln.d1374d04.svg";
},{}],"src/img/instagram.svg":[function(require,module,exports) {
module.exports = "/instagram.20737fa7.svg";
},{}],"src/components/footers/aboutShop/aboutShop.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/footers/aboutShop/aboutShop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAboutShop = getAboutShop;
var _facebook = _interopRequireDefault(require("../../../img/facebook.svg"));
var _twitter = _interopRequireDefault(require("../../../img/twitter.svg"));
var _linkedln = _interopRequireDefault(require("../../../img/linkedln.svg"));
var _instagram = _interopRequireDefault(require("../../../img/instagram.svg"));
require("./aboutShop.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getAboutShop() {
  var aboutShopBlock = document.createElement("div");
  aboutShopBlock.className = "shop-block";
  aboutShopBlock.innerHTML = "\n        <h2 class=\"shop-block-title\">ABOUT THE SHOP</h2>\n        <p class=\"shop-block-text\">\n            Lorem Ipsum is simply dummy text of the \n            printing and typesetting industry. Lorem\n            Ipsum has been the industry's standard \n            dummy text ever since the 1500s\n        </p>\n        <ul class=\"shop-block-list\">\n            <li class=\"shop-block-item\">\n                <a class=\"shop-block-link\">\n                    <img class=\"shop-block-img\" src=\"".concat(_facebook.default, "\">\n                </a>\n            </li>\n            <li class=\"shop-block-item\">\n                <a class=\"shop-block-link\">\n                    <img class=\"shop-block-img twitter\" src=\"").concat(_twitter.default, "\">\n                </a>\n            </li>\n            <li class=\"shop-block-item\">\n                <a class=\"shop-block-link\">\n                    <img class=\"shop-block-img\" src=\"").concat(_linkedln.default, "\">\n                </a>\n            </li>\n            <li class=\"shop-block-item\">\n                <a class=\"shop-block-link\">\n                    <img class=\"shop-block-img\" src=\"").concat(_instagram.default, "\">\n                </a>\n            </li>\n        </ul>\n    ");
  return aboutShopBlock;
}
},{"../../../img/facebook.svg":"src/img/facebook.svg","../../../img/twitter.svg":"src/img/twitter.svg","../../../img/linkedln.svg":"src/img/linkedln.svg","../../../img/instagram.svg":"src/img/instagram.svg","./aboutShop.css":"src/components/footers/aboutShop/aboutShop.css"}],"src/components/footers/menu/menu.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/footers/menu/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenu = getMenu;
require("./menu.css");
function getMenu() {
  var menuBlock = document.createElement("div");
  menuBlock.className = "menu-block";
  menuBlock.innerHTML = "\n        <h2 class=\"menu-block-title\">MENU</h2>\n        <ul class=\"menu-block-list\">\n            <li class=\"menu-block-item\">\n                <a class=\"menu-block-link\">Home</a>\n            </li>\n            <li class=\"menu-block-item\">\n                <a class=\"menu-block-link\">Necklaces</a>\n            </li>\n            <li class=\"menu-block-item\">\n                <a class=\"menu-block-link\">Braceltes</a>\n            </li>\n            <li class=\"menu-block-item\">\n                <a class=\"menu-block-link\">Rings</a>\n            </li>\n            <li class=\"menu-block-item\">\n                <a class=\"menu-block-link\">Earrings</a>\n            </li>\n            <li class=\"menu-block-item\">\n                <a class=\"menu-block-link\">Ankle Bracelets</a>\n            </li>\n        </ul>\n    ";
  return menuBlock;
}
},{"./menu.css":"src/components/footers/menu/menu.css"}],"src/components/footers/support/support.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/footers/support/support.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupport = getSupport;
require("./support.css");
function getSupport() {
  var supportBlock = document.createElement("div");
  supportBlock.className = "support-block";
  supportBlock.innerHTML = "\n        <h2 class=\"support-block-title\">SUPPORT</h2>\n        <ul class=\"support-block-list\">\n            <li class=\"support-block-item\">\n                <a class=\"support-block-link\">Frequently Asked Questions</a>\n            </li>\n            <li class=\"support-block-item\">\n                <a class=\"support-block-link\">Returns and Refunds</a>\n            </li>\n            <li class=\"support-block-item\">\n                <a class=\"support-block-link\">CGV</a>\n            </li>\n            <li class=\"support-block-item\">\n                <a class=\"support-block-link\">Legal Notice</a>\n            </li>\n            <li class=\"support-block-item\">\n                <a class=\"support-block-link\">Track my order</a>\n            </li>\n        </ul>\n    ";
  return supportBlock;
}
},{"./support.css":"src/components/footers/support/support.css"}],"src/components/footers/reachable/reachable.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/footers/reachable/reachable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReachable = getReachable;
require("./reachable.css");
function getReachable() {
  var reachableBlock = document.createElement("div");
  reachableBlock.className = "reachable-block";
  reachableBlock.innerHTML = "\n        <h2 class=\"reachable-block-title\">REACHABLE 24/7</h2>\n        <p class=\"reachable-block-text\">\n            A question ? We can be reached by \n            email 7/7, do not hesitate to send us a \n            message for any request.\n        </p>\n        <address class=\"reachable-block-address\">\n            <a class=\"reachable-block-email\" href=\"mailto:info@azzanabijoux.fr\">info@azzanabijoux.fr</a>\n        </address>\n    ";
  return reachableBlock;
}
},{"./reachable.css":"src/components/footers/reachable/reachable.css"}],"src/page/pageFooter/pageFooter.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/page/pageFooter/pageFooter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageFooter = getPageFooter;
var _aboutShop = require("../../components/footers/aboutShop/aboutShop");
var _menu = require("../../components/footers/menu/menu");
var _support = require("../../components/footers/support/support");
var _reachable = require("../../components/footers/reachable/reachable");
require("./pageFooter.css");
function getPageFooter() {
  var footer = document.createElement("footer");
  footer.className = "footer";
  var container = document.createElement("div");
  container.className = "container";
  var footerBlock = document.createElement("div");
  footerBlock.className = "footer-block";
  var shop = (0, _aboutShop.getAboutShop)();
  var menu = (0, _menu.getMenu)();
  var support = (0, _support.getSupport)();
  var reachable = (0, _reachable.getReachable)();
  footer.append(container);
  container.append(footerBlock);
  footerBlock.append(shop, menu, support, reachable);
  return footer;
}
},{"../../components/footers/aboutShop/aboutShop":"src/components/footers/aboutShop/aboutShop.js","../../components/footers/menu/menu":"src/components/footers/menu/menu.js","../../components/footers/support/support":"src/components/footers/support/support.js","../../components/footers/reachable/reachable":"src/components/footers/reachable/reachable.js","./pageFooter.css":"src/page/pageFooter/pageFooter.css"}],"src/img/visa.svg":[function(require,module,exports) {
module.exports = "/visa.995f34f2.svg";
},{}],"src/img/mastercard.svg":[function(require,module,exports) {
module.exports = "/mastercard.c1a40876.svg";
},{}],"src/img/americanexpress.svg":[function(require,module,exports) {
module.exports = "/americanexpress.851af243.svg";
},{}],"src/img/paypal.svg":[function(require,module,exports) {
module.exports = "/paypal.c348333d.svg";
},{}],"src/components/creditCarts/creditCarts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/creditCarts/creditCarts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCreditCarts = getCreditCarts;
var _visa = _interopRequireDefault(require("../../img/visa.svg"));
var _mastercard = _interopRequireDefault(require("../../img/mastercard.svg"));
var _americanexpress = _interopRequireDefault(require("../../img/americanexpress.svg"));
var _paypal = _interopRequireDefault(require("../../img/paypal.svg"));
require("./creditCarts.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getCreditCarts() {
  var carts = document.createElement("div");
  carts.className = "carts";
  var container = document.createElement("div");
  container.className = "container";
  var creaditCartsBlock = document.createElement("div");
  creaditCartsBlock.className = "credit-carts";
  creaditCartsBlock.innerHTML = "\n        <p class=\"credit-carts-title\">\xA9 AZZANA - MINIMALIST JEWELRY 2018-2020</p>\n        <div class=\"credit-carts-box\">\n            <a class=\"credit-carts-link\">\n                <img class=\"credit-carts-img\" src=\"".concat(_visa.default, "\">\n            </a>\n             <a class=\"credit-carts-link\">\n                <img class=\"credit-carts-img\" src=\"").concat(_mastercard.default, "\">\n            </a>\n             <a class=\"credit-carts-link\">\n                <img class=\"credit-carts-img\" src=\"").concat(_americanexpress.default, "\">\n            </a>\n             <a class=\"credit-carts-link\">\n                <img class=\"credit-carts-img\" src=\"").concat(_paypal.default, "\">\n            </a>\n        </div>\n    ");
  carts.append(container);
  container.append(creaditCartsBlock);
  return carts;
}
},{"../../img/visa.svg":"src/img/visa.svg","../../img/mastercard.svg":"src/img/mastercard.svg","../../img/americanexpress.svg":"src/img/americanexpress.svg","../../img/paypal.svg":"src/img/paypal.svg","./creditCarts.css":"src/components/creditCarts/creditCarts.css"}],"index.js":[function(require,module,exports) {
"use strict";

var _pageHeader = require("./src/page/pageHeader/pageHeader");
var _pageMain = require("./src/page/pageMain/pageMain");
var _pageFooter = require("./src/page/pageFooter/pageFooter");
var _creditCarts = require("./src/components/creditCarts/creditCarts");
var app = document.querySelector("#app");
var header = (0, _pageHeader.getPageHeader)();
var main = (0, _pageMain.getPageMain)();
var footer = (0, _pageFooter.getPageFooter)();
var creditCarts = (0, _creditCarts.getCreditCarts)();
app.append(header, main, footer, creditCarts);
},{"./src/page/pageHeader/pageHeader":"src/page/pageHeader/pageHeader.js","./src/page/pageMain/pageMain":"src/page/pageMain/pageMain.js","./src/page/pageFooter/pageFooter":"src/page/pageFooter/pageFooter.js","./src/components/creditCarts/creditCarts":"src/components/creditCarts/creditCarts.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44911" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Azzana.e31bb0bc.js.map