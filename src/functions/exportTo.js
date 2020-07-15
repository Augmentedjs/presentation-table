import { csvTableCompile, tsvTableCompile } from "./exports.js";
import { defaultTableCompile } from "./defaultTableCompile.js";

const exportTo = async (type, name, description, columns, json) => {
  let e = "";
  if (type === "csv") {
    e = await csvTableCompile(name, description, columns, json);
  } else if (type === "tsv") {
    e = await tsvTableCompile(name, description, columns, json);
  } else if (type === "json") {
    e = json;
  } else {
    // html
    e = await defaultTableCompile(name, description, columns, json, false, null);
  }
  return e;
};

export default exportTo;
