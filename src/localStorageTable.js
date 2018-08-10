import AutomaticTable from "./autoTable.js";

/**
* Instance class preconfigured for local storage-based table
* @class Augmented.Presentation.LocalStorageTable
* @extends Presentation.Component.AutomaticTable
* @memberof Presentation.Component
*/
class LocalStorageTable extends AutomaticTable {
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
  };
};

export default LocalStorageTable;
