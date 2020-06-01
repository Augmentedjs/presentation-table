import { TABLE_DATA_ATTRIBUTES } from "./attributes.js";
import { editableTableBody } from "./editable.js";

export const defaultTableHeader = (columns, lineNumbers, sortKey, display) => {
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
        html = html + ">" + obj.description + "</th>";
      }
    }
    html = html + "</tr>";
  }
  return html;
};

export const defaultTableBody = (data, columns, lineNumbers, sortKey, display) => {
  let i, d, dkey, dobj, html = "", l = data.length, t;
  for (i = 0; i < l; i++) {
    d = data[i];
    html = html + "<tr>";
    if (lineNumbers) {
      html = html + "<td class=\"label number\">" + (i+1) + "</td>";
    }
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        t = (typeof dobj);
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

export const defaultTableCompile = (name, desc, columns, data, lineNumbers, sortKey, editable, display) => {
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
