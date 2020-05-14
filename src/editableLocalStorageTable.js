import AutomaticTable from "./autoTable.js";

/**
* Instance class preconfigured for editing, sorting, from local storage
* @extends AutomaticTable
*/
class EditableLocalStorageTable extends AutomaticTable {
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
  };
};

export default EditableLocalStorageTable;
