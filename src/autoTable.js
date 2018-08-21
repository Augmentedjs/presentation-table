import { isObject } from "next-core-utilities";
import { DecoratorView } from "presentation-decorator";
import { TABLE_DATA_ATTRIBUTES, csvTableCompile, tsvTableCompile, defaultTableCompile, directDOMTableCompile, directDOMTableHeader, directDOMTableBody, directDOMEditableTableBody, directDOMPaginationControl } from "./functions/buildTable.js";
import formatValidationMessages from "./functions/messages.js";
import { request } from "presentation-request";
import Dom from "presentation-dom";
import { PaginationFactory, Model, Collection, LocalStorageCollection } from "presentation-models";

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
class AutomaticTable extends DecoratorView {
  constructor(options) {
    super(options);

    const style = (this.style) ? this.style + " " : "";

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
      this.model = new Model();
    }

    if (this.collection) {
      this.collection.reset();
    }

    if (!this.collection && this.paginationAPI) {
      this.collection = PaginationFactory.getPaginatedCollection(this.paginationAPI);
      this.paginationAPI = this.collection.paginationAPI;
      this.localStorage = false;
    } else if (!this.collection && this.localStorage) {
      this.collection = new LocalStorageCollection();
    } else if (!this.collection) {
      this.collection = new Collection();
    }

    if (options && options.schema) {
      // check if this is a schema vs a URI to get a schema
      if (isObject(options.schema)) {
        this.schema = options.schema;
      } else {
        // is a URI?
        let parsedSchema = null;
        try {
          parsedSchema = JSON.parse(options.schema);
          if (parsedSchema && isObject(parsedSchema)) {
            this.schema = parsedSchema;
          }
        } catch(e) {
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

    if (this.data && (Array.isArray(this.data))) {
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
  };

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
     const el = Dom.selector(this.el);//((typeof this.el === 'string') ? document.querySelector(this.el) : this.el),
     if (el) {
       let e = el.querySelector("table");
       if (e) {
         e.setAttribute("class", theme);
       }
     }
     this.theme = theme;
   };

  /**
   * The default rowlink function callback called by row to format a link
   * @param {array} row The row data
   * @returns {string} Returns the link uri
   */
   rowLink(row) {
     return "";
   };

  /**
   * Sort the tabe by a key (sent via a UI Event)
   * @param {string} key The key to sort by
   */
   sortBy(key) {
     if (key && ( (this.editable) || (!this.editable && this.sortKey !== key))) {
       this.sortKey = key;
       this.collection.sortByKey(key);
       this.refresh();
     }
   };

 /**
  * Return the current page number
  * @returns {number} The current page number
  */
  currentPage() {
    return this.collection.currentPage;
  };

 /**
  * Return the total pages
  * @returns {number} The total pages
  */
  totalPages() {
    return this.collection.totalPages;
  };

 /**
  * Advance to the next page
  */
  nextPage() {
    this.collection.nextPage();
    this.refresh();
  };

 /**
  * Return to the previous page
  */
  previousPage() {
    this.collection.previousPage();
    this.refresh();
  };

 /**
  * Go to a specific page
  * @param {number} page The page to go to
  */
  goToPage(page) {
    this.collection.goToPage(page);
    this.refresh();
  };

 /**
  * Return to the first page
  */
  firstPage() {
    this.collection.firstPage();
    this.refresh();
  };

 /**
  * Advance to the last page
  */
  lastPage() {
    this.collection.lastPage();
    this.refresh();
  };

 /**
  * Edit a cell at the row and column specified
  * @param {number} row The row
  * @param {number} col The column
  * @param {any} value The value to set
  */
  editCell(row, col, value) {
    if (row && col) {
      let model = this.collection.at(row), name = this.columns[col];
      if (model && name) {
        model.set(name, value);
      }
    }
  };

 /**
  * Copy a cell at the row and column  to another
  * @param {number} row1 The 'from' row
  * @param {number} col1 The 'from' column
  * @param {number} row2 The 'to' row
  * @param {number} col2 The 'to' column
  */
  copyCell(row1, col1, row2, col2) {
    if (row1 && col1 && row2 && col2) {
      let model1 = this.collection.at(row1), name1 = this.columns[col1],
      model2 = this.collection.at(row);
      if (model1 && name1 && model2) {
        model2.set(name1, value1);
      }
    }
  };
 /**
  * Clear a cell at the row and column specified
  * @param {number} row The row
  * @param {number} col The column
  */
  clearCell(row, col) {
    this.editCell(row, col, null);
  };

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
        e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
        //console.log("my el", e);
        if (e) {
	        let tbody = e.querySelector("tbody"), thead = e.querySelector("thead");
          if (this.sortable) {
            this._unbindSortableColumnEvents();
          }
          if (this.editable) {
            this._unbindCellChangeEvents();
          }
          if (this._columns && (Object.keys(this._columns).length > 0)){
            while (thead.hasChildNodes()) {
              thead.removeChild(thead.lastChild);
            }
            directDOMTableHeader(thead, this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable);
          } else {
      		  if (thead) {
              while (thead.hasChildNodes()) {
                thead.removeChild(thead.lastChild);
              }
      		  }
          }
          if (this.collection && (this.collection.length > 0) && tbody){
            while (tbody.hasChildNodes()) {
              tbody.removeChild(tbody.lastChild);
            }
            if (this.editable) {
              // links not supported
              directDOMEditableTableBody(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name);
            } else {
              directDOMTableBody(tbody, this.collection.toJSON(), this._columns, this.lineNumbers, this.sortKey, this.display, this.selectable, this.name, this.linkable, this.links, this[this.links.link]);
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
        e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
        if (e) {
          e.innerHTML = "";
          // progress bar
          let n = document.createElement("progress"),
          t = document.createTextNode("Please wait.");
          n.appendChild(t);
          e.appendChild(n);

          // the table
          directDOMTableCompile(e, this.name, this.description, this._columns, this.collection.toJSON(), this.lineNumbers, this.sortKey, this.editable, this.display, this.selectable, this.linkable, this.links, this[this.links.link]);

          // pagination control
          if (this.renderPaginationControl) {
            directDOMPaginationControl(e, this.currentPage(), this.totalPages());
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
  };

 /**
  * Fetch the schema from the source URI
  * @param uri {string} the URI to fetch from
  */
  retrieveSchema(uri) {
    const that = this;
    let schema = null;

    // TODO: make a fetch
    request({
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
  };

 /**
  * Fetch the data from the source URI
  */
  fetch() {
    // TODO: should be a promise
    this.showProgressBar(true);

    const view = this;

    const successHandler = function() {
      view.showProgressBar(false);
      view.sortKey = null;
      view.populate(view.collection.toJSON());
      view.refresh();
    };

    const failHandler = function() {
      view.showProgressBar(false);
      view.showMessage("AutomaticTable fetch failed!");
    };

console.debug(this.uri);

    if (this.uri) {

      this.collection.uri = this.uri;
    }

    this.collection.fetch({
      reset: true,
      success(){
        successHandler();
      },
      error(){
        failHandler();
      }
    });
  };

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

      const successHandler = function() {
        view.showProgressBar(false);
        return true;
      };

      const failHandler = function() {
        view.showProgressBar(false);
        view.showMessage("AutomaticTable save failed!");
        //_logger.warn("AUGMENTED: AutomaticTable save failed!");
        return false;
      };

      this.collection.save({
        reset: true,
        success(){
          successHandler();
        },
        error(){
          failHandler();
        }
      });
    }
    return false;
  };

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
  };

 /**
  * Clear all the data in the table
  */
  clear() {
    this.sortKey = null;
    this.data = [];
    this.collection.reset(null);
  };

 /**
  * Refresh the table (Same as render)
  * @returns {object} Returns the view context ('this')
  * @see AutomaticTable.render
  */
  refresh() {
    return this.render();
  };

 /**
  * Save Cell Event
  * @private
  */
  saveCell(event) {
    const key = event.target, model = this.collection.at(parseInt(key.getAttribute(TABLE_DATA_ATTRIBUTES.INDEX)));
    let value = key.value;
    if ((key.getAttribute("type")) === "number") {
      value = parseInt(key.value);
    }
    model.set(key.getAttribute(TABLE_DATA_ATTRIBUTES.NAME), value);
  };

 /**
  * @private
  */
  _bindCellChangeEvents() {
    let myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
    let cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
    let i=0, l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].addEventListener("change", this.saveCell.bind(this), false);
    }
    // bind the select boxes as well
    cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
    i=0;
    l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].addEventListener("change", this.saveCell.bind(this), false);
    }
  };

 /**
  * @private
  */
  _unbindCellChangeEvents() {
    let myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
    let cells = [].slice.call(document.querySelectorAll(myEl + " table tr td input"));
    let i=0, l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].removeEventListener("change", this.saveCell, false);
    }
    // unbind the select boxes as well
    cells = [].slice.call(document.querySelectorAll(myEl + " table tr td select"));
    i=0;
    l=cells.length;
    for(i=0; i < l; i++) {
      cells[i].removeEventListener("change", this.saveCell, false);
    }
  };

 /**
  * Export the table data in requested format
  * @param {string} type The type requested (csv or html-default)
  * @returns {string} The table data in requested format
  */
  exportTo(type) {
    let e = "";
    if (type === "csv") {
      e = csvTableCompile(this.name, this.description, this._columns, this.collection.toJSON());
    } else if (type === "tsv") {
      e = tsvTableCompile(this.name, this.description, this._columns, this.collection.toJSON());
    } else {
      // html
      e = defaultTableCompile(this.name, this.description, this._columns, this.collection.toJSON(), false, null);
    }
    return e;
  };

 /**
  * @private
  */
  _unbindPaginationControlEvents() {
    if (this.pageControlBound) {
      let myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
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
  };

 /**
  * @private
  */
  _bindPaginationControlEvents() {
    if (!this.pageControlBound) {
      let myEl = (typeof this.el === 'string') ? this.el : this.el.localName;
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
  };

 /**
  * @private
  */
  _deriveEventTarget(event) {
    let key = null;
    if (event) {
      key = event.target.getAttribute(TABLE_DATA_ATTRIBUTES.NAME);
    }
    return key;
  };

 /**
  * @private
  */
  _sortByHeaderEvent(event) {
    let key = this._deriveEventTarget(event);
    this.sortBy(key);
  };

 /**
  * @private
  */
  _unbindSortableColumnEvents()  {
    if (this.el && this.sortable) {
      let list;
      if (typeof this.el === 'string') {
        list = document.querySelectorAll(this.el + " table tr th");
      } else {
        list = document.querySelectorAll(this.el.localName + " table tr th");
      }
      let i = 0, l = list.length;
      for (i = 0; i < l; i++) {
        list[i].removeEventListener("click", this._sortByHeaderEvent, false);
      }
    }
  };

 /**
  * @private
  */
  _bindSortableColumnEvents()  {
    if (this.el && this.sortable) {
      let list;
      if (typeof this.el === 'string') {
        list = document.querySelectorAll(this.el + " table tr th");
      } else {
        list = document.querySelectorAll(this.el.localName + " table tr th");
      }
      let i = 0, l = list.length;
      for (i = 0; i < l; i++) {
        if (list[i].getAttribute(TABLE_DATA_ATTRIBUTES.NAME) === "lineNumber") {
          // Do I need to do something?
        } else {
          list[i].addEventListener("click", this._sortByHeaderEvent.bind(this), false);
        }
      }
    }
  };

 /**
  * An overridable template compile
  * @returns {string} Returns the template
  */
  compileTemplate() {
    return "";
  };

 /**
  * Sets the URI
  * @param {string} uri The URI
  */
  setURI(uri) {
    this.uri = uri;
    this.collection.uri = uri;
  };

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
  };

 /**
  * Enable/Disable the progress bar
  * @param {boolean} show Show or Hide the progress bar
  */
  showProgressBar(show) {
    if (this.el) {
      let e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
      if (e) {
        let p = e.querySelector("progress");
        if (p) {
          p.style.display = (show) ? "block" : "none";
          p.style.visibility = (show) ? "visible" : "hidden";
        }
      }
    }
  };

 /**
  * Show a message related to the table
  * @param {string} message Some message to display
  */
  showMessage(message) {
    if (this.el) {
      let e = (typeof this.el === 'string') ? document.querySelector(this.el) : this.el;
      let p = e.querySelector("p[class=message]");
      if (p) {
        p.innerHTML = message;
      }
    }
  };
 /**

  * Validate the table
  * @returns {boolean} Returns true on success of validation
  */
  validate() {
    let messages = (this.collection) ? this.collection.validate() : null;
    if (!this.collection.isValid() && messages && messages.messages) {
      this.showMessage(formatValidationMessages(messages.messages));
    } else {
      this.showMessage("");
    }
    return messages;
  };

 /**
  * Is the table valid
  * @returns {boolean} Returns true if valid
  */
  isValid() {
    return (this.collection) ? this.collection.isValid() : true;
  };

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
      const el = Dom.selector(this.el);
      if (el) {
        el.innerHTML = "";
      } else {
        //console.debug("no el selected to remove " + this.el);
      }
    } else {
      //console.debug("no el to remove");
    }
    Dom.empty(this.el);

    return this;
  };
 /**
  * Gets the selected models
  * @returns {Array} Returns array of selected rows (models)
  */
  getSelected() {
    const keys = Object.keys(this.model.attributes), l = keys.length, selected = [];
    let i = 0;
    for (i = 0; i < l; i++) {
      if (keys[i].includes("row-") && this.model.attributes[keys[i]] === true) {
        const n = Number(keys[i].substring(4));
        selected.push(this.collection.at(n));
      }
    }
    return selected;
  };

 /**
  * Gets the selected row indexes
  * @returns {Array} Returns array of selected rows (indexes)
  */
  getSelectedIndex() {
    const keys = Object.keys(this.model.attributes), l = keys.length, selected = [];
    let i = 0;
    for (i = 0; i < l; i++) {
      if (keys[i].includes("row-") && this.model.attributes[keys[i]] === true) {
        selected.push(Number(keys[i].substring(4)));
      }
    }
    return selected;
  };

 /**
  * Removes the models
  * @param {Array} rows Models of the rows to remove
  */
  removeRows(rows) {
    const l = rows.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      const model = rows[i];
      if (!model.uri) {
        model.uri = this.uri + "/" + model.id;
      }
      model.destroy();
    }
  };
};

export default AutomaticTable;