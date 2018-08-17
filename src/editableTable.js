import AutomaticTable from "./autoTable.js";

/**
 * Instance class preconfigured for editing
 * @extends AutomaticTable
 * @memberof Component
 */
class EditableTable extends AutomaticTable {
  constructor(options) {
    if (!options) {
      options = {};
    }
    options.lineNumbers = true;
    options.editable = true;
    super(options);
  };
};

export default EditableTable;
