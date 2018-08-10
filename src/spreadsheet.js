import * as  Augmented from "augmentedjs-next";
import AutomaticTable from "./autoTable.js";
import { Collection, LocalStorageCollection } from "presentation-models";

/**
 * Instance class preconfigured for editing for use as a Spreadsheet.<br/>
 * If a propery for length is not specified, it will buffer 10 lines for editing.
 * @class Spreadsheet
 * @extends Presentation.Component.AutomaticTable
 * @memberof Presentation.Component
 */
class Spreadsheet extends AutomaticTable {
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
      this.collection = new LocalStorageCollection();
    } else if (!this.collection) {
      this.collection = new Collection();
    }

    // TODO: this might belong in parent

    if (options) {
      if (options.schema) {
        // check if this is a schema vs a URI to get a schema
        if (Augmented.isObject(options.schema)) {
          this.schema = options.schema;
        } else {
          // is a URI?
          let parsedSchema = null;
          try {
            parsedSchema = JSON.parse(options.schema);
            if (parsedSchema && Augmented.isObject(parsedSchema)) {
              this.schema = parsedSchema;
            }
          } catch(e) {
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

      if (options.data && (Array.isArray(options.data))) {
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
        "properties": {
        }
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
  };

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
      let i = 0, ii = 0, keys = Object.keys(this.schema.properties), l = keys.length, obj = {};
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

export default Spreadsheet;
