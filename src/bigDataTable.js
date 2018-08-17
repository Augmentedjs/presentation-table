import AutomaticTable from "./autoTable.js";

/**
 * Instance class preconfigured for sorting and pagination
 * @extends AutomaticTable
 * @memberof Component
 */
class BigDataTable extends AutomaticTable {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.sortable = true;
    super(options);
    this.renderPaginationControl = true;
  };
};

export default BigDataTable;
