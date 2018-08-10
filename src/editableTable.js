import AutomaticTable from "./autoTable.js";

/**
 * Instance class preconfigured for editing
 * @class EditableTable
 * @extends Presentation.Component.AutomaticTable
 * @memberof Presentation.Component
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
