(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("next-core-utilities"), require("presentation-decorator"), require("presentation-dom"), require("presentation-models"), require("presentation-request"));
	else if(typeof define === 'function' && define.amd)
		define("presentation-table", ["next-core-utilities", "presentation-decorator", "presentation-dom", "presentation-models", "presentation-request"], factory);
	else if(typeof exports === 'object')
		exports["presentation-table"] = factory(require("next-core-utilities"), require("presentation-decorator"), require("presentation-dom"), require("presentation-models"), require("presentation-request"));
	else
		root["presentation-table"] = factory(root["next-core-utilities"], root["presentation-decorator"], root["presentation-dom"], root["presentation-models"], root["presentation-request"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_next_core_utilities__, __WEBPACK_EXTERNAL_MODULE_presentation_decorator__, __WEBPACK_EXTERNAL_MODULE_presentation_dom__, __WEBPACK_EXTERNAL_MODULE_presentation_models__, __WEBPACK_EXTERNAL_MODULE_presentation_request__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/autoTable.js":
/*!**************************!*\
  !*** ./src/autoTable.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextCoreUtilities = __webpack_require__(/*! next-core-utilities */ "next-core-utilities");

var _presentationDecorator = __webpack_require__(/*! presentation-decorator */ "presentation-decorator");

var _buildTable = __webpack_require__(/*! ./functions/buildTable.js */ "./src/functions/buildTable.js");

var _messages = __webpack_require__(/*! ./functions/messages.js */ "./src/functions/messages.js");

var _messages2 = _interopRequireDefault(_messages);

var _presentationRequest = __webpack_require__(/*! presentation-request */ "presentation-request");

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

var _presentationModels = __webpack_require__(/*! presentation-models */ "presentation-models");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const DEFAULT_KEY = "augmented.localstorage.autotable.key";
const DEFAULT_SORT_TYPE = "client";
const DEFAULT_THEME = "material";

/**
 * AutomaticTable<br/>
 * Creates a table automatically via a schema for defintion and a uri/json for data
 * @extends DecoratorView
 * @memberof Component
 * @example
 * const at = new AutomaticTable({
 *     schema: schema,
 *     el: "#autoTable",
 *     crossOrigin: false,
 *     sortable: true,
 *     lineNumbers: true,
 *     editable: true,
 *     uri: "/example/data/table.json"
 * });
 */
class AutomaticTable extends _presentationDecorator.DecoratorView {
  constructor(options) {
    super(options);

    const style = this.style ? this.style + " " : "";

    if (options && options.theme) {
      this.theme = `${style}${options.theme}`;
    } else {
      this.theme = `${style}${DEFAULT_THEME}`;
    }

    if (options && options.linkable) {
      this.linkable = options.linkable;
    } else {
      this.linkable = false;
    }

    if (options && options.links) {
      this.links = options.links;
    } else {
      this.links = {
        wholeRow: true,
        column: "",
        link: "rowLink"
      };
    }

    if (options && options.selectable) {
      this.selectable = options.selectable;
    } else {
      this.selectable = false;
    }

    if (options && options.sortable) {
      this.sortable = options.sortable;
    } else {
      this.sortable = false;
    }

    if (options && options.sortStyle) {
      this.sortStyle = options.sortStyle;
    } else {
      this.sortStyle = DEFAULT_SORT_TYPE;
    }

    if (options && options.sortKey) {
      this.sortKey = options.sortKey;
    } else {
      this.sortKey = null;
    }

    if (options && options.display) {
      this.display = options.display;
    } else {
      this.display = null;
    }

    if (options && options.pagination) {
      this.renderPaginationControl = options.pagination;
    } else {
      this.renderPaginationControl = false;
    }

    if (options && options.paginationAPI) {
      this.paginationAPI = options.paginationAPI;
    } else {
      this.paginationAPI = null;
    }

    if (options && options.description) {
      this.description = options.description;
    } else {
      this.description = "";
    }

    if (options && options.localStorage) {
      this.localStorage = options.localStorage;
    } else {
      this.localStorage = false;
    }

    if (options && options.localStorageKey) {
      this.localStorageKey = options.localStorageKey;
    } else {
      this.localStorageKey = DEFAULT_KEY;
    }

    if (options && options.editable) {
      this.editable = options.editable;
    } else {
      this.editable = false;
    }

    if (options && options.crossOrigin) {
      this.crossOrigin = options.crossOrigin;
    } else {
      this.crossOrigin = false;
    }

    if (options && options.lineNumbers) {
      this.lineNumbers = options.lineNumbers;
    } else {
      this.lineNumbers = false;
    }

    if (options && options.uri) {
      this.uri = options.uri;
    } else {
      this.uri = false;
    }

    if (options && options.data) {
      this.data = options.data;
    } else {
      this.data = [];
    }

    this._columns = {};
    this.isInitalized = false;
    this.pageControlBound = false;

    if (!this.model) {
      this.model = new _presentationModels.Model();
    }

    if (this.collection) {
      this.collection.reset();
    }

    if (!this.collection && this.paginationAPI) {
      this.collection = _presentationModels.PaginationFactory.getPaginatedCollection(this.paginationAPI);
      this.paginationAPI = this.collection.paginationAPI;
      this.localStorage = false;
    } else if (!this.collection && this.localStorage) {
      this.collection = new _presentationModels.LocalStorageCollection();
    } else if (!this.collection) {
      this.collection = new _presentationModels.Collection();
    }

    if (options && options.schema) {
      // check if this is a schema vs a URI to get a schema
      if ((0, _nextCoreUtilities.isObject)(options.schema)) {
        this.schema = options.schema;
      } else {
        // is a URI?
        let parsedSchema = null;
        try {
          parsedSchema = JSON.parse(options.schema);
          if (parsedSchema && (0, _nextCoreUtilities.isObject)(parsedSchema)) {
            this.schema = parsedSchema;
          }
        } catch (e) {
          //_logger.warn("AUGMENTED: AutoTable parsing string schema failed.  URI perhaps?");
        }
        if (!this.schema) {
          this.retrieveSchema(options.schema);
          this.isInitalized = false;
        }
      }
    } else {
      this.schema = null;
    }

    if (this.uri && this.collection) {
      this.collection.uri = options.uri;
    }

    if (this.data && Array.isArray(this.data)) {
      this.populate(this.data);
    }

    if (options && options.localStorageKey && !options.uri) {
      this.localStorageKey = options.localStorageKey;
      this.uri = null;
    }

    if (this.collection && this.uri) {
      this.collection.uri = this.uri;
    }
    if (this.collection) {
      this.collection.crossOrigin = this.crossOrigin;
    }

    if (this.schema) {
      if ((!this.name || this.name === "") && this.schema.title) {
        this.name = this.schema.title;
        this.name.split(" ").join("");
      }

      if ((!this.description || this.description === "") && this.schema.description) {
        this.description = this.schema.description;
      }

      if (!this.isInitalized) {
        this._columns = this.schema.properties;
        this.collection.schema = this.schema;
        this.isInitalized = true;
      }
    } else {
      this.isInitalized = false;
    }
  }

  /**
   * The theme property - The theme of this table (default is 'material')
   * @property {string} theme The theme of this table
   */

  /**
   * The linkable property - enable links in a row (only works in non-editable tables)
   * @property {boolean} linkable enable/disable linking a row
   */

  /**
   * The selectable property - enable selecting a row in table
   * @property {boolean} selectable enable/disable selecting a row
   */

  /**
   * The sortable property - enable sorting in table
   * @property {boolean} sortable enable sorting in the table
   */

  /**
   * The sortStyle property - setup the sort API
   * @property {string} sortStyle setup the sort API
   */

  /**
   * The sortKey property
   * @property {string} sortKey sorted key
   * @private
   */

  /**
   * The links property - setup linking structure for links in a row
   * @property {boolean} linkable enable/disable linking a row
   * @example links: {
   * wholeRow: false, // link whole row vs column
   * column: "name", // name of column
   *	link: "rowLink" // callback
   * }
   */

  /**
   * The localStorage property - enables localStorage
   * @property {boolean} localStorage The localStorage property
   */

  /**
   * The localStorageKey property - set the key for use in storage
   * @property {string} localStorageKey The localStorage key property
   */

  /**
   * The editable property - enables editing of cells
   * @property {boolean} editable The editable property
   */

  /**
   * Fields to display - null will display all
   * @property {array} display Fields to display
   */

  // pagination
  /**
   * The renderPaginationControl property - render the pagination control
   * @property {boolean} renderPaginationControl render the pagination control
   */

  /**
   * The paginationAPI property - setup the paginatin API to use
   * @property {Augmented.PaginationFactory.type} paginationAPI the pagination API to use
   */

  /**
   * The name property
   * @property {string} name The name of the table
   */

  /**
   * The description property
   * @property {string} description The description of the table
   */

  /**
   * The crossOrigin property - enables cross origin fetch
   * @property {boolean} crossOrigin The crossOrigin property
   */

  /**
   * The lineNumber property - turns on line numbers
   * @property {boolean} lineNumbers The lineNumbers property
   */

  /**
   * The columns property
   * @property {object} columns The columns property
   * @private
   */

  /**
   * The URI property
   * @property {string} uri The URI property
   */

  /**
   * The data property
   * @property {array} data The data property
   * @private
   */

  /**
   * The collection property
   * @property {Augmented.PaginatedCollection} collection The collection property
   * @private
   */

  /**
   * The initialized property
   * @property {boolean} isInitalized The initialized property
   */

  /**
   * The theme of the table
   * @param {string} theme name of the theme
   */
  setTheme(theme) {
    const el = _presentationDom2.default.selector(this.el); //((typeof this.el === 'string') ? document.querySelector(this.el) : this.el),
    if (el) {
      let e = el.querySelector("table");
      if (e) {
        e.setAttribute("class", theme);
      }
    }
    this.theme = theme;
  }

  /**
   * The default rowlink function callback called by row to format a link
   * @param {array} row The row data
   * @returns {string} Returns the link uri
   */
  rowLink(row) {
    return "";
  }

  /**
   * Sort the tabe by a key (sent via a UI Event)
   * @param {string} key The key to sort by
   */
  sortBy(key) {
    if (key && (this.editable || !this.editable && this.sortKey !== key)) {
      this.sortKey = key;
      this.collection.sortByKey(key);
      this.refresh();
    }
  }

  /**
   * Return the current page number
   * @returns {number} The current page number
   */
  currentPage() {
    return this.collection.currentPage;
  }

  /**
   * Return the total pages
   * @returns {number} The total pages
   */
  totalPages() {
    return this.collection.totalPages;
  }

  /**
   * Advance to the next page
   */
  nextPage() {
    this.collection.nextPage();
    this.refresh();
  }

  /**
   * Return to the previous page
   */
  previousPage() {
    this.collection.previousPage();
    this.refresh();
  }

  /**
   * Go to a specific page
   * @param {number} page The page to go to
   */
  goToPage(page) {
    this.collection.goToPage(page);
    this.refresh();
  }

  /**
   * Return to the first page
   */
  firstPage() {
    this.collection.firstPage();
    this.refresh();
  }

  /**
   * Advance to the last page
   */
  lastPage() {
    this.collection.lastPage();
    this.refresh();
  }

  /**
   * Edit a cell at the row and column specified
   * @param {number} row The row
   * @param {number} col The column
   * @param {any} value The value to set
   */
  editCell(row, col, value) {
    if (row && col) {
      let model = this.collection.at(row),
          name = this.columns[col];
      if (model && name) {
        model.set(name, value);
      }
    }
  }

  /**
   * Copy a cell at the row and column  to another
   * @param {number} row1 The 'from' row
   * @param {number} col1 The 'from' column
   * @param {number} row2 The 'to' row
   * @param {number} col2 The 'to' column
   */
  copyCell(row1, col1, row2, col2) {
    if (row1 && col1 && row2 && col2) {
      let model1 = this.collection.at(row1),
          name1 = this.columns[col1],
          model2 = this.collection.at(row);
      if (model1 && name1 && model2) {
        model2.set(name1, value1);
      }
    }
  }
  /**
   * Clear a cell at the row and column specified
   * @param {number} row The row
   * @param {number} col The column
   */
  clearCell(row, col) {
    this.editCell(row, col, null);
  }

  /**
   * Render the table
   * @returns {object} Returns the view context ('this')
   */
  render() {
    //console.log("render");
    if (!this.isInitalized) {
      //console.warn("AUGMENTED: AutoTable Can't render yet, not initialized!");
      return this;
    }
    let e;
    if (this.template) {
      // refresh the table body only
      //console.log("set progress.");
      this.showProgressBar(true);
      if (this.el) {
        e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
        //console.log("my el", e);
        if (e) {
          let tbody = e.querySelector("tbody"),
              thead = e.querySelector("thead");
          if (this.sortable) {
            this._unbindSortableColumnEvents();
          }
          if (this.editable) {
            this._unbindCellChangeEvents();
          }
          if (this._columns && Object.keys(this._columns).length > 0) {
            while (thead.hasChildNodes()) {
              thead.removeChild(thead.lastChild);
            }
            (0, _buildTable.directDOMTableHeader)(thead, this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable);
          } else {
            if (thead) {
              while (thead.hasChildNodes()) {
                thead.removeChild(thead.lastChild);
              }
            }
          }
          if (this.collection && this.collection.length > 0 && tbody) {
            while (tbody.hasChildNodes()) {
              tbody.removeChild(tbody.lastChild);
            }
            if (this.editable) {
              // links not supported
              (0, _buildTable.directDOMEditableTableBody)(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name);
            } else {
              (0, _buildTable.directDOMTableBody)(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name, this.linkable, this.links, this[this.links.link]);
            }
          } else {
            while (tbody.hasChildNodes()) {
              tbody.removeChild(tbody.lastChild);
            }
          }
        }
      } else {
        //console.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
      }
    } else {
      //console.debug("no template");
      this.template = "notused";
      this.showProgressBar(true);

      if (this.el) {
        //console.debug("no template with el " + this.el);
        e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
        if (e) {
          e.innerHTML = "";
          // progress bar
          let n = document.createElement("progress"),
              t = document.createTextNode("Please wait.");
          n.appendChild(t);
          e.appendChild(n);

          const isMaterial = this._style.includes("material");

          // the table
          (0, _buildTable.directDOMTableCompile)(e, this.name, this.description, this._columns, this.collection.toJSON(), this.lineNumbers, this.sortKey, this.editable, this.display, this.selectable, this.linkable, this.links, this[this.links.link], isMaterial);

          // pagination control
          if (this.renderPaginationControl) {
            (0, _buildTable.directDOMPaginationControl)(e, this.currentPage(), this.totalPages());
          }

          // message
          n = document.createElement("p");
          n.classList.add("message");
          e.appendChild(n);
        }
      } else {
        //console.warn("AUGMENTED: AutoTable no element anchor, not rendering.");
      }

      if (this.renderPaginationControl) {
        this._bindPaginationControlEvents();
      }
    }
    this.delegateEvents();

    if (this.sortable) {
      this._bindSortableColumnEvents();
    }

    if (this.editable) {
      this._bindCellChangeEvents();
    }

    this.showProgressBar(false);
    this.setTheme(this.theme);

    return this;
  }

  /**
   * Fetch the schema from the source URI
   * @param uri {string} the URI to fetch from
   */
  retrieveSchema(uri) {
    const that = this;
    let schema = null;

    // TODO: make a fetch
    (0, _presentationRequest.request)({
      url: uri,
      contentType: "application/json",
      dataType: "json",
      success: (data, status) => {
        if (typeof data === "string") {
          schema = JSON.parse(data);
        } else {
          schema = data;
        }
        const options = { "schema": schema };
        that.initialize(options);
      },
      error: (data, status) => {
        this.showMessage("AutomaticTable Failed to fetch schema!!");
      }
    });
  }

  /**
   * Fetch the data from the source URI
   */
  fetch() {
    // TODO: should be a promise
    this.showProgressBar(true);

    const view = this;

    const successHandler = function () {
      view.showProgressBar(false);
      view.sortKey = null;
      view.populate(view.collection.toJSON());
      view.refresh();
    };

    const failHandler = function () {
      view.showProgressBar(false);
      view.showMessage("AutomaticTable fetch failed!");
    };

    if (this.uri) {

      this.collection.uri = this.uri;
    }

    this.collection.fetch({
      reset: true,
      success() {
        successHandler();
      },
      error() {
        failHandler();
      }
    });
  }

  /**
   * Save the data to the source
   * This only functions if the table is editable
   * @param {boolean} override Save even if not editable
   * @returns Returns true if succesfull
   */
  save(override) {
    if (this.editable || override) {
      this.showProgressBar(true);

      const view = this;

      const successHandler = function () {
        view.showProgressBar(false);
        return true;
      };

      const failHandler = function () {
        view.showProgressBar(false);
        view.showMessage("AutomaticTable save failed!");
        //_logger.warn("AUGMENTED: AutomaticTable save failed!");
        return false;
      };

      this.collection.save({
        reset: true,
        success() {
          successHandler();
        },
        error() {
          failHandler();
        }
      });
    }
    return false;
  }

  /**
   * Populate the data in the table
   * @param {array} source The source data array
   */
  populate(source) {
    if (source && Array.isArray(source)) {
      this.sortKey = null;
      this.data = source;
      this.collection.reset(this.data);
    }
  }

  /**
   * Clear all the data in the table
   */
  clear() {
    this.sortKey = null;
    this.data = [];
    this.collection.reset(null);
  }

  /**
   * Refresh the table (Same as render)
   * @returns {object} Returns the view context ('this')
   * @see AutomaticTable.render
   */
  refresh() {
    return this.render();
  }

  /**
   * Save Cell Event
   * @private
   */
  saveCell(event) {
    const key = event.target,
          model = this.collection.at(parseInt(key.getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.INDEX)));
    let value = key.value;
    if (key.getAttribute("type") === "number") {
      value = parseInt(key.value);
    }
    model.set(key.getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.NAME), value);
  }

  /**
   * @private
   */
  _bindCellChangeEvents() {
    let myEl = typeof this.el === 'string' ? this.el : this.el.localName;
    let cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
    let i = 0,
        l = cells.length;
    for (i = 0; i < l; i++) {
      cells[i].addEventListener("change", this.saveCell.bind(this), false);
    }
    // bind the select boxes as well
    cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
    i = 0;
    l = cells.length;
    for (i = 0; i < l; i++) {
      cells[i].addEventListener("change", this.saveCell.bind(this), false);
    }
  }

  /**
   * @private
   */
  _unbindCellChangeEvents() {
    let myEl = typeof this.el === 'string' ? this.el : this.el.localName;
    let cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
    let i = 0,
        l = cells.length;
    for (i = 0; i < l; i++) {
      cells[i].removeEventListener("change", this.saveCell, false);
    }
    // unbind the select boxes as well
    cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
    i = 0;
    l = cells.length;
    for (i = 0; i < l; i++) {
      cells[i].removeEventListener("change", this.saveCell, false);
    }
  }

  /**
   * Export the table data in requested format
   * @param {string} type The type requested (csv or html-default)
   * @returns {string} The table data in requested format
   */
  exportTo(type) {
    let e = "";
    if (type === "csv") {
      e = (0, _buildTable.csvTableCompile)(this.name, this.description, this._columns, this.collection.toJSON());
    } else if (type === "tsv") {
      e = (0, _buildTable.tsvTableCompile)(this.name, this.description, this._columns, this.collection.toJSON());
    } else {
      // html
      e = (0, _buildTable.defaultTableCompile)(this.name, this.description, this._columns, this.collection.toJSON(), false, null);
    }
    return e;
  }

  /**
   * @private
   */
  _unbindPaginationControlEvents() {
    if (this.pageControlBound) {
      let myEl = typeof this.el === 'string' ? this.el : this.el.localName;
      let first = document.querySelector(myEl + " div.paginationControl span.first");
      let previous = document.querySelector(myEl + " div.paginationControl span.previous");
      let next = document.querySelector(myEl + " div.paginationControl span.next");
      let last = document.querySelector(myEl + " div.paginationControl span.last");
      if (first) {
        first.removeEventListener("click", this.firstPage, false);
      }
      if (previous) {
        previous.removeEventListener("click", this.previousPage, false);
      }
      if (next) {
        next.removeEventListener("click", this.nextPage, false);
      }
      if (last) {
        last.removeEventListener("click", this.lastPage, false);
      }
      this.pageControlBound = false;
    }
  }

  /**
   * @private
   */
  _bindPaginationControlEvents() {
    if (!this.pageControlBound) {
      let myEl = typeof this.el === 'string' ? this.el : this.el.localName;
      let first = document.querySelector(myEl + " div.paginationControl span.first");
      let previous = document.querySelector(myEl + " div.paginationControl span.previous");
      let next = document.querySelector(myEl + " div.paginationControl span.next");
      let last = document.querySelector(myEl + " div.paginationControl span.last");
      if (first) {
        first.addEventListener("click", this.firstPage.bind(this), false);
      }
      if (previous) {
        previous.addEventListener("click", this.previousPage.bind(this), false);
      }
      if (next) {
        next.addEventListener("click", this.nextPage.bind(this), false);
      }
      if (last) {
        last.addEventListener("click", this.lastPage.bind(this), false);
      }
      this.pageControlBound = true;
    }
  }

  /**
   * @private
   */
  _deriveEventTarget(event) {
    let key = null;
    if (event) {
      key = event.target.getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.NAME);
    }
    return key;
  }

  /**
   * @private
   */
  _sortByHeaderEvent(event) {
    let key = this._deriveEventTarget(event);
    this.sortBy(key);
  }

  /**
   * @private
   */
  _unbindSortableColumnEvents() {
    if (this.el && this.sortable) {
      let list;
      if (typeof this.el === 'string') {
        list = document.querySelectorAll(this.el + " table tr th");
      } else {
        list = document.querySelectorAll(this.el.localName + " table tr th");
      }
      let i = 0,
          l = list.length;
      for (i = 0; i < l; i++) {
        list[i].removeEventListener("click", this._sortByHeaderEvent, false);
      }
    }
  }

  /**
   * @private
   */
  _bindSortableColumnEvents() {
    if (this.el && this.sortable) {
      let list;
      if (typeof this.el === 'string') {
        list = document.querySelectorAll(this.el + " table tr th");
      } else {
        list = document.querySelectorAll(this.el.localName + " table tr th");
      }
      let i = 0,
          l = list.length;
      for (i = 0; i < l; i++) {
        if (list[i].getAttribute(_buildTable.TABLE_DATA_ATTRIBUTES.NAME) === "lineNumber") {
          // Do I need to do something?
        } else {
          list[i].addEventListener("click", this._sortByHeaderEvent.bind(this), false);
        }
      }
    }
  }

  /**
   * An overridable template compile
   * @returns {string} Returns the template
   */
  compileTemplate() {
    return "";
  }

  /**
   * Sets the URI
   * @param {string} uri The URI
   */
  setURI(uri) {
    if (uri) {
      this.uri = uri;
      this.collection.uri = uri;
    }
  }

  /**
   * Sets the schema
   * @param {object} schema The JSON schema of the dataset
   */
  setSchema(schema) {
    this.schema = schema;
    this._columns = schema.properties;
    this.collection.reset();
    this.collection.schema = schema;

    if (this.uri) {
      this.collection.uri = this.uri;
    }
  }

  /**
   * Enable/Disable the progress bar
   * @param {boolean} show Show or Hide the progress bar
   */
  showProgressBar(show) {
    if (this.el) {
      let e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
      if (e) {
        let p = e.querySelector("progress");
        if (p) {
          p.style.display = show ? "block" : "none";
          p.style.visibility = show ? "visible" : "hidden";
        }
      }
    }
  }

  /**
   * Show a message related to the table
   * @param {string} message Some message to display
   */
  showMessage(message) {
    if (this.el && message) {
      let e = typeof this.el === 'string' ? document.querySelector(this.el) : this.el;
      let p = e.querySelector("p[class=message]");
      if (p) {
        p.innerHTML = message;
      }
    }
  }
  /**
    * Validate the table
   * @returns {boolean} Returns true on success of validation
   */
  validate() {
    let messages = this.collection ? this.collection.validate() : null;
    if (!this.collection.isValid() && messages && messages.messages) {
      this.showMessage((0, _messages2.default)(messages.messages));
    } else {
      this.showMessage("");
    }
    return messages;
  }

  /**
   * Is the table valid
   * @returns {boolean} Returns true if valid
   */
  isValid() {
    return this.collection ? this.collection.isValid() : true;
  }

  /**
   * Remove the table and all binds
   * @returns Returns the context (this)
   */
  remove() {
    /* off to unbind the events */
    this.undelegateEvents();
    this.off();
    this.stopListening();
    if (this.el) {
      const el = _presentationDom2.default.selector(this.el);
      if (el) {
        el.innerHTML = "";
      } else {
        //console.debug("no el selected to remove " + this.el);
      }
    } else {
        //console.debug("no el to remove");
      }
    _presentationDom2.default.empty(this.el);

    return this;
  }
  /**
   * Gets the selected models
   * @returns {Array} Returns array of selected rows (models)
   * @param {boolean} json convert to array of objects
   */
  getSelected(json) {
    const keys = Object.keys(this.model._attributes),
          l = keys.length,
          selected = [];
    let i = 0;
    for (i = 0; i < l; i++) {
      if (keys[i].includes("row-") && this.model._attributes[keys[i]] === true) {
        const n = Number(keys[i].substring(4));
        const model = this.collection.at(n);
        if (json) {
          selected.push(model.toJSON());
        } else {
          selected.push(model);
        }
      }
    }
    return selected;
  }

  /**
   * Gets the selected models as JSON
   * @returns {Array} Returns array of selected rows (JSON Objects)
   */
  getSelectedAsJSON() {
    return this.getSelected(true);
  }

  /**
   * Gets the selected row indexes
   * @returns {Array} Returns array of selected rows (indexes)
   */
  getSelectedIndex() {
    const keys = Object.keys(this.model._attributes),
          l = keys.length,
          selected = [];
    let i = 0;
    for (i = 0; i < l; i++) {
      if (keys[i].includes("row-") && this.model._attributes[keys[i]] === true) {
        selected.push(Number(keys[i].substring(4)));
      }
    }
    return selected;
  }

  /**
   * Removes the models
   * @param {Array} rows Models of the rows to remove
   */
  removeRows(rows) {
    return this.collection.remove(rows);
    /*const l = rows.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      const model = rows[i];
      if (!model.uri) {
        model.uri = this.uri + "/" + model.id;
      }
      this.collection.remove(n);
      model.destroy();
    }
     return l;*/
  }

  /**
   * Removes the selected models
   */
  removeSelectedRows() {
    return this.removeRows(this.getSelected());
  }
};

exports.default = AutomaticTable;

/***/ }),

/***/ "./src/bigDataTable.js":
/*!*****************************!*\
  !*** ./src/bigDataTable.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Instance class preconfigured for sorting and pagination
 * @extends AutomaticTable
 * @memberof Component
 */
class BigDataTable extends _autoTable2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    super(options);
    this.renderPaginationControl = true;
  }
};

exports.default = BigDataTable;

/***/ }),

/***/ "./src/editableBigTable.js":
/*!*********************************!*\
  !*** ./src/editableBigTable.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Instance class preconfigured for sorting and pagination
 * @extends AutomaticTable
 * @memberof Component
 */
class EditableBigDataTable extends _autoTable2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    options.editable = true;
    super(options);
    this.renderPaginationControl = true;
  }
};

exports.default = EditableBigDataTable;

/***/ }),

/***/ "./src/editableLocalStorageTable.js":
/*!******************************************!*\
  !*** ./src/editableLocalStorageTable.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
* Instance class preconfigured for editing, sorting, from local storage
* @extends AutomaticTable
* @memberof Component
*/
class EditableLocalStorageTable extends _autoTable2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    options.editable = true;
    options.localStorage = true;
    super(options);
    this.renderPaginationControl = true;
  }
};

exports.default = EditableLocalStorageTable;

/***/ }),

/***/ "./src/editableTable.js":
/*!******************************!*\
  !*** ./src/editableTable.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Instance class preconfigured for editing
 * @extends AutomaticTable
 * @memberof Component
 */
class EditableTable extends _autoTable2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.editable = true;
    super(options);
  }
};

exports.default = EditableTable;

/***/ }),

/***/ "./src/functions/buildTable.js":
/*!*************************************!*\
  !*** ./src/functions/buildTable.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Tables and Grids

const TABLE_DATA_ATTRIBUTES = exports.TABLE_DATA_ATTRIBUTES = {
  "NAME": "data-name",
  "TYPE": "data-type",
  "DESCRIPTION": "data-description",
  "INDEX": "data-index",
  "LABEL": "data-label",
  "SORT_CLASS": "sorted"
};

const csvTableCompile = exports.csvTableCompile = (name, desc, columns, data, del) => {
  let csv = "";
  if (!del) {
    del = ",";
  }
  if (columns) {
    let key, obj;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        obj = columns[key];
        csv = csv + key + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }

  let i, d, dkey, dobj, t;
  const l = data.length;
  for (i = 0; i < l; i++) {
    d = data[i];
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = typeof dobj;
        csv = csv + dobj + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }
  return csv;
};

const tsvTableCompile = exports.tsvTableCompile = (name, desc, columns, data) => {
  return csvTableCompile(name, desc, columns, data, "\t");
};

const defaultTableCompile = exports.defaultTableCompile = (name, desc, columns, data, lineNumbers, sortKey, editable, display) => {
  let html = `<table ${TABLE_DATA_ATTRIBUTES.NAME}="${name}" ${TABLE_DATA_ATTRIBUTES.DESCRIPTION}="${desc}">`;
  if (name) {
    html = html + "<caption";
    if (desc) {
      html = html + ` title="${desc}"`;
    }
    html = html + `>${name}</caption>`;
  }
  html = html + "<thead>";
  html = html + defaultTableHeader(columns, lineNumbers, sortKey, display);
  html = html + "</thead><tbody>";
  if (data) {
    if (editable) {
      html = html + editableTableBody(data, columns, lineNumbers, sortKey, display);
    } else {
      html = html + defaultTableBody(data, columns, lineNumbers, sortKey, display);
    }
  }
  html = html + "</tbody></table>";
  return html;
};

const defaultTableHeader = exports.defaultTableHeader = (columns, lineNumbers, sortKey, display) => {
  let html = "";
  if (columns) {
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + `<th ${TABLE_DATA_ATTRIBUTES.NAME}="lineNumber">#</th>`;
    }
    let key, obj;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        obj = columns[key];
        html = html + `<th ${TABLE_DATA_ATTRIBUTES.NAME}="${key}" ${TABLE_DATA_ATTRIBUTES.DESCRIPTION}="${obj.description}" ${TABLE_DATA_ATTRIBUTES.TYPE}="${obj.type}"`;
        if (sortKey === key) {
          html = html + " class=\"" + TABLE_DATA_ATTRIBUTES.SORT_CLASS + "\"";
        }
        html = html + ">" + key + "</th>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

const defaultTableBody = exports.defaultTableBody = (data, columns, lineNumbers, sortKey, display) => {
  let i,
      d,
      dkey,
      dobj,
      html = "",
      l = data.length,
      t;
  for (i = 0; i < l; i++) {
    d = data[i];
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + "<td class=\"label number\">" + (i + 1) + "</td>";
    }
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = typeof dobj;
        html = html + "<td " + TABLE_DATA_ATTRIBUTES.TYPE + "=\"" + t + "\" class=\"" + t;
        if (sortKey === dkey) {
          html = html + " " + TABLE_DATA_ATTRIBUTES.SORT_CLASS;
        }
        html = html + "\">" + dobj + "</td>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

const directDOMTableCompile = exports.directDOMTableCompile = (el, name, desc, columns, data, lineNumbers, sortKey, editable, display, selectable, linkable, linksConfig, linkCallback, isMaterial) => {
  const table = document.createElement("table"),
        thead = document.createElement("thead"),
        tbody = document.createElement("tbody");
  let n, t;

  // Binding
  table.setAttribute("data-" + name, name);

  table.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, name);
  table.setAttribute(TABLE_DATA_ATTRIBUTES.DESCRIPTION, desc);
  if (desc) {
    n = document.createElement("caption");
    if (name) {
      n.setAttribute("title", name);
    }
    t = document.createTextNode(desc);
    n.appendChild(t);
    table.appendChild(n);
  }
  directDOMTableHeader(thead, columns, lineNumbers, sortKey, display, selectable, isMaterial);
  table.appendChild(thead);
  table.appendChild(tbody);
  if (data) {
    if (editable) {
      directDOMEditableTableBody(tbody, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback);
    } else {
      directDOMTableBody(tbody, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback);
    }
  }
  el.appendChild(table);
};

const directDOMTableHeader = exports.directDOMTableHeader = (el, columns, lineNumbers, sortKey, display, selectable, isMaterial) => {
  if (columns && el) {
    const tr = document.createElement("tr");
    let n, t, key, obj;
    if (selectable) {
      n = document.createElement("th");
      n.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "select");
      if (isMaterial) {
        n.innerHTML = `<i class="material-icons">check_box_outline_blank</i>`;
      } else {
        t = document.createTextNode("\u274f");
        n.appendChild(t);
      }
      tr.appendChild(n);
    }

    if (lineNumbers) {
      n = document.createElement("th");
      n.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "lineNumber");
      t = document.createTextNode("#");
      n.appendChild(t);
      tr.appendChild(n);
    }

    for (key in columns) {
      let displayCol = true;
      if (display !== null) {
        displayCol = display.indexOf(key) !== -1;
      }

      if (displayCol && columns.hasOwnProperty(key)) {
        obj = columns[key];

        n = document.createElement("th");
        n.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, key);
        n.setAttribute(TABLE_DATA_ATTRIBUTES.DESCRIPTION, obj.description);
        n.setAttribute(TABLE_DATA_ATTRIBUTES.TYPE, obj.type);
        if (sortKey === key) {
          n.classList.add(TABLE_DATA_ATTRIBUTES.SORT_CLASS);
        }

        t = document.createTextNode(key);
        n.appendChild(t);
        tr.appendChild(n);
      }
    }
    el.appendChild(tr);
  }
};

const directDOMTableBody = exports.directDOMTableBody = (el, data, columns, lineNumbers, sortKey, display, selectable, name, linkable, linksConfig, linkCallback) => {
  const l = data.length;
  let i, d, dkey, dobj, t, td, tn, tr, cobj;

  for (i = 0; i < l; i++) {
    d = data[i];
    tr = document.createElement("tr");

    if (selectable) {
      td = document.createElement("td");
      td.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "select");
      tn = document.createElement("input");
      tn.type = "checkbox";
      tn.name = String(i);
      tn.value = String(i);
      // Binding
      tn.setAttribute("data-" + name, "row-" + i);

      td.appendChild(tn);
      td.classList.add("label", "select");
      tr.appendChild(td);
    }

    if (lineNumbers) {
      td = document.createElement("td");
      tn = document.createTextNode(String(i + 1));
      td.appendChild(tn);
      td.classList.add("label", "number");
      tr.appendChild(td);
    }
    for (dkey in columns) {
      let displayCol = true;
      if (display !== null) {
        displayCol = display.indexOf(dkey) !== -1;
      }
      if (displayCol && d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = typeof dobj;
        td = document.createElement("td");
        tn = document.createTextNode(dobj);

        if (linkable && linksConfig && linkCallback && (linksConfig.column === dkey || linksConfig.wholeRow)) {
          const a = document.createElement("a");
          //a.title = "my title text";
          a.href = linkCallback(d);
          a.appendChild(tn);
          td.appendChild(a);
        } else {
          td.appendChild(tn);
        }

        td.classList.add(t);
        if (sortKey === dkey) {
          td.classList.add(TABLE_DATA_ATTRIBUTES.SORT_CLASS);
        }
        td.setAttribute(TABLE_DATA_ATTRIBUTES.TYPE, t);
        td.setAttribute(TABLE_DATA_ATTRIBUTES.LABEL, dkey);
        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};

const directDOMEditableTableBody = exports.directDOMEditableTableBody = (el, data, columns, lineNumbers, sortKey, display, selectable, name) => {
  const l = data.length,
        ln = lineNumbers;
  let i, d, dkey, dobj, t, td, tn, tr, input, cobj;
  for (i = 0; i < l; i++) {
    d = data[i];
    tr = document.createElement("tr");

    if (selectable) {
      td = document.createElement("td");
      td.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, "select");
      tn = document.createElement("input");
      tn.type = "checkbox";
      tn.name = String(i);
      tn.value = String(i);
      td.appendChild(tn);
      td.classList.add("label", "select");
      tr.appendChild(td);
    }

    if (ln) {
      td = document.createElement("td");
      tn = document.createTextNode(String(i + 1));
      td.appendChild(tn);
      td.classList.add("label", "number");
      tr.appendChild(td);
    }

    for (dkey in d) {
      let displayCol = true;
      if (display !== null) {
        displayCol = display.indexOf(dkey) !== -1;
      }

      if (displayCol && d.hasOwnProperty(dkey)) {
        cobj = columns[dkey] ? columns[dkey] : {};
        dobj = d[dkey];

        t = typeof dobj;

        td = document.createElement("td");
        td.classList.add(t);
        if (sortKey === dkey) {
          td.classList.add(TABLE_DATA_ATTRIBUTES.SORT_CLASS);
        }
        td.setAttribute(TABLE_DATA_ATTRIBUTES.TYPE, t);
        td.setAttribute(TABLE_DATA_ATTRIBUTES.LABEL, dkey);
        // input field

        if (t === "object") {
          if (Array.isArray(dobj)) {
            let iii = 0,
                lll = dobj.length,
                option,
                tOption;
            input = document.createElement("select");
            for (iii = 0; iii < lll; iii++) {
              option = document.createElement("option");
              option.setAttribute("value", dobj[iii]);
              tOption = document.createTextNode(dobj[iii]);
              option.appendChild(tOption);
              input.appendChild(option);
            }
          } else {
            input = document.createElement("textarea");
            input.value = JSON.stringify(dobj);
          }
        } else if (t === "boolean") {
          input = document.createElement("input");
          input.setAttribute("type", "checkbox");
          if (dobj === true) {
            input.setAttribute("checked", "checked");
          }
          input.value = dobj;
        } else if (t === "number") {
          input = document.createElement("input");
          input.setAttribute("type", "number");
          input.value = dobj;
        } else if (t === "string" && cobj.enum) {
          input = document.createElement("select");
          let iiii = 0,
              llll = cobj.enum.length,
              option2,
              tOption2;
          for (iiii = 0; iiii < llll; iiii++) {
            option2 = document.createElement("option");
            option2.setAttribute("value", cobj.enum[iiii]);
            tOption2 = document.createTextNode(cobj.enum[iiii]);
            if (dobj === cobj.enum[iiii]) {
              option2.setAttribute("selected", "selected");
            }
            option2.appendChild(tOption2);
            input.appendChild(option2);
          }
        } else if (t === "string" && cobj.format === "email") {
          input = document.createElement("input");
          input.setAttribute("type", "email");
          input.value = dobj;
        } else if (t === "string" && cobj.format === "uri") {
          input = document.createElement("input");
          input.setAttribute("type", "url");
          input.value = dobj;
        } else if (t === "string" && cobj.format === "date-time") {
          input = document.createElement("input");
          input.setAttribute("type", "datetime");
          input.value = dobj;
        } else {
          input = document.createElement("input");
          input.setAttribute("type", "text");
          input.value = dobj;
        }

        if (t === "string" && cobj.pattern) {
          input.setAttribute("pattern", cobj.pattern);
        }

        if (cobj.minimum) {
          input.setAttribute("min", cobj.minimum);
        }

        if (cobj.maximum) {
          input.setAttribute("max", cobj.maximum);
        }

        if (t === "string" && cobj.minlength) {
          input.setAttribute("minlength", cobj.minlength);
        }

        if (t === "string" && cobj.maxlength) {
          input.setAttribute("maxlength", cobj.maxlength);
        }

        input.setAttribute(TABLE_DATA_ATTRIBUTES.NAME, dkey);
        input.setAttribute(TABLE_DATA_ATTRIBUTES.INDEX, i);

        // Binding
        input.setAttribute("data-" + name, name);

        td.appendChild(input);

        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};

/*
* << First | < Previous | # | Next > | Last >>
*/
const directDOMPaginationControl = exports.directDOMPaginationControl = (el, currentPage, totalPages) => {
  let d, n, t;
  d = document.createElement("div");
  d.classList.add("paginationControl");

  n = document.createElement("span");
  n.classList.add("first");
  t = document.createTextNode("<< First");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("previous");
  t = document.createTextNode("< Previous");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("current");
  t = document.createTextNode(`${currentPage} of ${totalPages}`);
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("next");
  t = document.createTextNode("Next >");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("last");
  t = document.createTextNode("Last >>");
  n.appendChild(t);
  d.appendChild(n);

  el.appendChild(d);
};

/***/ }),

/***/ "./src/functions/messages.js":
/*!***********************************!*\
  !*** ./src/functions/messages.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const formatValidationMessages = messages => {
  let html = "";
  if (messages && messages.length > 0) {
    html = html + "<ul class=\"errors\">";
    const l = messages.length;
    let i = 0,
        ii = 0;
    for (i = 0; i < l; i++) {
      const ll = messages[i].errors.length;
      for (ii = 0; ii < ll; ii++) {
        html = html + "<li>" + messages[i].errors[ii] + "</li>";
      }
    }
    html = html + "</ul>";
  }
  return html;
};

exports.default = formatValidationMessages;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

var _bigDataTable = __webpack_require__(/*! ./bigDataTable.js */ "./src/bigDataTable.js");

var _bigDataTable2 = _interopRequireDefault(_bigDataTable);

var _editableBigTable = __webpack_require__(/*! ./editableBigTable.js */ "./src/editableBigTable.js");

var _editableBigTable2 = _interopRequireDefault(_editableBigTable);

var _editableLocalStorageTable = __webpack_require__(/*! ./editableLocalStorageTable.js */ "./src/editableLocalStorageTable.js");

var _editableLocalStorageTable2 = _interopRequireDefault(_editableLocalStorageTable);

var _editableTable = __webpack_require__(/*! ./editableTable.js */ "./src/editableTable.js");

var _editableTable2 = _interopRequireDefault(_editableTable);

var _localStorageTable = __webpack_require__(/*! ./localStorageTable.js */ "./src/localStorageTable.js");

var _localStorageTable2 = _interopRequireDefault(_localStorageTable);

var _spreadsheet = __webpack_require__(/*! ./spreadsheet.js */ "./src/spreadsheet.js");

var _spreadsheet2 = _interopRequireDefault(_spreadsheet);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports.AutomaticTable = _autoTable2.default;
module.exports.BigDataTable = _bigDataTable2.default;
module.exports.EditableBigDataTable = _editableBigTable2.default;
module.exports.EditableLocalStorageTable = _editableLocalStorageTable2.default;
module.exports.EditableTable = _editableTable2.default;
module.exports.LocalStorageTable = _localStorageTable2.default;
module.exports.Spreadsheet = _spreadsheet2.default;

/***/ }),

/***/ "./src/localStorageTable.js":
/*!**********************************!*\
  !*** ./src/localStorageTable.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
* Instance class preconfigured for local storage-based table
* @extends AutomaticTable
* @memberof Component
*/
class LocalStorageTable extends _autoTable2.default {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    options.editable = false;
    options.localStorage = true;
    super(options);
    this.renderPaginationControl = true;
  }
};

exports.default = LocalStorageTable;

/***/ }),

/***/ "./src/spreadsheet.js":
/*!****************************!*\
  !*** ./src/spreadsheet.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextCoreUtilities = __webpack_require__(/*! next-core-utilities */ "next-core-utilities");

var _autoTable = __webpack_require__(/*! ./autoTable.js */ "./src/autoTable.js");

var _autoTable2 = _interopRequireDefault(_autoTable);

var _presentationModels = __webpack_require__(/*! presentation-models */ "presentation-models");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Instance class preconfigured for editing for use as a Spreadsheet.<br/>
 * If a propery for length is not specified, it will buffer 10 lines for editing.
 * @extends AutomaticTable
 * @memberof Component
 */
class Spreadsheet extends _autoTable2.default {
  constructor(options) {
    super(options);
    // TODO: overrides?
    this.lineNumbers = true;
    this.sortable = true;
    this.editable = true;

    if (options && options.pagination) {
      this.renderPaginationControl = options.pagination;
    } else {
      this.renderPaginationControl = false;
    }

    if (options && options.rows) {
      this.rows = options.rows;
    } else {
      this.rows = 10;
    }

    if (options && options.columns) {
      this.columns = options.columns;
    } else {
      this.rows = 5;
    }

    if (this.collection) {
      this.collection.reset();
    } else if (!this.collection && this.localStorage) {
      this.collection = new _presentationModels.LocalStorageCollection();
    } else if (!this.collection) {
      this.collection = new _presentationModels.Collection();
    }

    // TODO: this might belong in parent

    if (options) {
      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if ((0, _nextCoreUtilities.isObject)(options.schema)) {
          this.schema = options.schema;
        } else {
          // is a URI?
          let parsedSchema = null;
          try {
            parsedSchema = JSON.parse(options.schema);
            if (parsedSchema && (0, _nextCoreUtilities.isObject)(parsedSchema)) {
              this.schema = parsedSchema;
            }
          } catch (e) {
            // AutoTable parsing string schema failed.  URI perhaps?
            //_logger.warn("AUGMENTED: AutoTable parsing string schema failed.  URI perhaps?");
          }
          if (!this.schema) {
            this.retrieveSchema(options.schema);
            this.isInitalized = false;
            //return false;
          }
        }
      }

      if (options.el) {
        this.el = options.el;
      }

      if (options.uri) {
        this.uri = options.uri;
        this.collection.url = options.uri;
      }

      if (options.data && Array.isArray(options.data)) {
        this.populate(options.data);
      }

      if (options.sortable) {
        this.sortable = options.sortable;
      }

      if (options.lineNumbers) {
        this.lineNumbers = options.lineNumbers;
      }

      if (options.localStorageKey && !options.uri) {
        this.localStorageKey = options.localStorageKey;
        this.uri = null;
      }
    }

    if (this.collection && this.uri) {
      this.collection.url = this.uri;
    }
    if (this.collection) {
      this.collection.crossOrigin = this.crossOrigin;
    }
    if (this.schema) {
      if ((!this.name || this.name === "") && this.schema.title) {
        this.name = this.schema.title;
      }
      if ((!this.description || this.description === "") && this.schema.description) {
        this.description = this.schema.description;
      }

      if (!this.isInitalized) {
        this._columns = this.schema.properties;
        this.collection.schema = this.schema;
      }
    } else {
      //very basic schema
      this.schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "untitled",
        "type": "object",
        "description": "",
        "properties": {}
      };

      let i = 0;

      for (i = 0; i < this.columns; i++) {
        this.schema.properties[String.fromCharCode(65 + i)] = {
          "description": "",
          "type": "string"
        };
      }

      this._columns = this.schema.properties;
      this.collection.schema = this.schema;
    }

    //buffer
    this._generate();
    this.collection.set(this.data);

    this.isInitalized = true;
  }

  /**
   * @propery {number} columns Defines a set of columns in the spreadsheet
   * @memberof Spreadsheet
   */

  /**
   * @propery {number} rows Defines a set of rows in the spreadsheet
   * @memberof Spreadsheet
   */

  _generate() {
    if (this.schema && this.schema.properties) {
      let i = 0,
          ii = 0,
          keys = Object.keys(this.schema.properties),
          l = keys.length,
          obj = {};
      this.data = [];
      for (ii = 0; ii < this.rows; ii++) {
        obj = {};
        for (i = 0; i < l; i++) {
          obj[keys[i]] = "";
        }
        this.data.push(obj);
      }
    }
  }
};

exports.default = Spreadsheet;

/***/ }),

/***/ "next-core-utilities":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"next-core-utilities","commonjs2":"next-core-utilities","amd":"next-core-utilities","root":"next-core-utilities"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_next_core_utilities__;

/***/ }),

/***/ "presentation-decorator":
/*!**********************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-decorator","commonjs2":"presentation-decorator","amd":"presentation-decorator","root":"presentation-decorator"} ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_decorator__;

/***/ }),

/***/ "presentation-dom":
/*!**********************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-dom","commonjs2":"presentation-dom","amd":"presentation-dom","root":"presentation-dom"} ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_dom__;

/***/ }),

/***/ "presentation-models":
/*!**********************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-models","commonjs2":"presentation-models","amd":"presentation-models","root":"presentation-models"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_models__;

/***/ }),

/***/ "presentation-request":
/*!**************************************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-request","commonjs2":"presentation-request","amd":"presentation-request","root":"presentation-request"} ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_request__;

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-table.js.map