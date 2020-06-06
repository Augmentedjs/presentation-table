import { TABLE_DATA_ATTRIBUTES } from "./attributes.js";

export const directDOMEditableTableBody = (el, data, columns, lineNumbers, sortKey, display, selectable, name) => {
  const l = data.length, ln = lineNumbers;
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
      // Binding
      tn.setAttribute("data-" + name, "row-" + i);
      tn.setAttribute(TABLE_DATA_ATTRIBUTES.INDEX, i);

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

    for (dkey in columns) {
      let displayCol = true;
      if (display !== null) {
        displayCol = (display.indexOf(dkey) !== -1);
      }

      if (displayCol && d.hasOwnProperty(dkey)) {
        cobj = (columns[dkey]) ? columns[dkey] : {};
        dobj = d[dkey];

        t = (typeof dobj);

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
            let iii = 0, lll = dobj.length, option, tOption;
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
          let iiii = 0, llll = cobj.enum.length, option2, tOption2;
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
        } else if (t === "string" && (cobj.format === "email")) {
          input = document.createElement("input");
          input.setAttribute("type", "email");
          input.value = dobj;
        } else if (t === "string" && (cobj.format === "uri")) {
          input = document.createElement("input");
          input.setAttribute("type", "url");
          input.value = dobj;
        } else if (t === "string" && (cobj.format === "date-time")) {
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
        // console.debug("setting index", TABLE_DATA_ATTRIBUTES.INDEX, i);
        input.setAttribute(TABLE_DATA_ATTRIBUTES.INDEX, i);

        // Binding
        input.setAttribute("data-" + name, name);

        // name attribute
        input.setAttribute("name", dkey);

        td.appendChild(input);

        tr.appendChild(td);
      }
    }
    el.appendChild(tr);
  }
};
