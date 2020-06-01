export const csvTableCompile = (name, desc, columns, data, del) => {
  let csv = "";
  if (!del) {
    del = ",";
  }
  if (columns) {
    let key;//, obj;
    for (key in columns) {
      if (columns.hasOwnProperty(key)) {
        // obj = columns[key];
        csv = csv + key + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }

  let i, d, dkey, dobj;//, t;
  const l = data.length;
  for (i = 0; i < l; i++) {
    d = data[i];
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        dobj = d[dkey];
        // t = (typeof dobj);
        csv = csv + dobj + del;
      }
    }
    csv = csv.slice(0, -1);
    csv = csv + "\n";
  }
  return csv;
};

export const tsvTableCompile = (name, desc, columns, data) => {
  return csvTableCompile(name, desc, columns, data, "\t");
};
