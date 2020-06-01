/*
 * << First | < Previous | # | Next > | Last >>
 */
export const directDOMPaginationControl = (el, currentPage, totalPages) => {
  let d, n, t;
  d = document.createElement("div");
  d.classList.add("paginationControl");

  n = document.createElement("span");
  n.classList.add("first");
  t = document.createTextNode("<< First");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("previous");
  t = document.createTextNode("< Previous");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("current");
  t = document.createTextNode(`${currentPage} of ${totalPages}`);
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("next");
  t = document.createTextNode("Next >");
  n.appendChild(t);
  d.appendChild(n);

  n = document.createElement("span");
  n.classList.add("last");
  t = document.createTextNode("Last >>");
  n.appendChild(t);
  d.appendChild(n);

  el.appendChild(d);
};
