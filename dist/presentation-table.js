!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("next-core-utilities"),require("presentation-models"),require("presentation-decorator"),require("presentation-request"),require("presentation-dom")):"function"==typeof define&&define.amd?define("presentation-table",["next-core-utilities","presentation-models","presentation-decorator","presentation-request","presentation-dom"],t):"object"==typeof exports?exports["presentation-table"]=t(require("next-core-utilities"),require("presentation-models"),require("presentation-decorator"),require("presentation-request"),require("presentation-dom")):e["presentation-table"]=t(e["next-core-utilities"],e["presentation-models"],e["presentation-decorator"],e["presentation-request"],e["presentation-dom"])}(this,function(e,t,i,s,l){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var l=t[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(s,l,function(t){return e[t]}.bind(null,l));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=3)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),l=i(4),n=i(5),o=h(i(6)),r=i(7),a=h(i(8)),c=i(2);function h(e){return e&&e.__esModule?e:{default:e}}const d="augmented.localstorage.autotable.key",u="client",p="material";t.default=class extends l.DecoratorView{constructor(e){super(e);const t=this.style?this.style+" ":"";if(e&&e.theme?this.theme=`${t}${e.theme}`:this.theme=`${t}${p}`,e&&e.linkable?this.linkable=e.linkable:this.linkable=!1,e&&e.links?this.links=e.links:this.links={wholeRow:!0,column:"",link:"rowLink"},e&&e.selectable?this.selectable=e.selectable:this.selectable=!1,e&&e.sortable?this.sortable=e.sortable:this.sortable=!1,e&&e.sortStyle?this.sortStyle=e.sortStyle:this.sortStyle=u,e&&e.sortKey?this.sortKey=e.sortKey:this.sortKey=null,e&&e.display?this.display=e.display:this.display=null,e&&e.pagination?this.renderPaginationControl=e.pagination:this.renderPaginationControl=!1,e&&e.paginationAPI?this.paginationAPI=e.paginationAPI:this.paginationAPI=null,e&&e.description?this.description=e.description:this.description="",e&&e.localStorage?this.localStorage=e.localStorage:this.localStorage=!1,e&&e.localStorageKey?this.localStorageKey=e.localStorageKey:this.localStorageKey=d,e&&e.editable?this.editable=e.editable:this.editable=!1,e&&e.crossOrigin?this.crossOrigin=e.crossOrigin:this.crossOrigin=!1,e&&e.lineNumbers?this.lineNumbers=e.lineNumbers:this.lineNumbers=!1,e&&e.uri?this.uri=e.uri:this.uri=!1,e&&e.data?this.data=e.data:this.data=[],this._columns={},this.isInitalized=!1,this.pageControlBound=!1,this.model||(this.model=new c.Model),this.collection&&this.collection.reset(),!this.collection&&this.paginationAPI?(this.collection=c.PaginationFactory.getPaginatedCollection(this.paginationAPI),this.paginationAPI=this.collection.paginationAPI,this.localStorage=!1):!this.collection&&this.localStorage?this.collection=new c.LocalStorageCollection:this.collection||(this.collection=new c.Collection),e&&e.schema)if((0,s.isObject)(e.schema))this.schema=e.schema;else{let t=null;try{(t=JSON.parse(e.schema))&&(0,s.isObject)(t)&&(this.schema=t)}catch(e){}this.schema||(this.retrieveSchema(e.schema),this.isInitalized=!1)}else this.schema=null;this.uri&&this.collection&&(this.collection.uri=e.uri),this.data&&Array.isArray(this.data)&&this.populate(this.data),e&&e.localStorageKey&&!e.uri&&(this.localStorageKey=e.localStorageKey,this.uri=null),this.collection&&this.uri&&(this.collection.uri=this.uri),this.collection&&(this.collection.crossOrigin=this.crossOrigin),this.schema?(this.name&&""!==this.name||!this.schema.title||(this.name=this.schema.title,this.name.split(" ").join("")),this.description&&""!==this.description||!this.schema.description||(this.description=this.schema.description),this.isInitalized||(this._columns=this.schema.properties,this.collection.schema=this.schema,this.isInitalized=!0)):this.isInitalized=!1}setTheme(e){const t=a.default.selector(this.el);if(t){let i=t.querySelector("table");i&&i.setAttribute("class",e)}this.theme=e}rowLink(e){return""}sortBy(e){e&&(this.editable||!this.editable&&this.sortKey!==e)&&(this.sortKey=e,this.collection.sortByKey(e),this.refresh())}currentPage(){return this.collection.currentPage}totalPages(){return this.collection.totalPages}nextPage(){this.collection.nextPage(),this.refresh()}previousPage(){this.collection.previousPage(),this.refresh()}goToPage(e){this.collection.goToPage(e),this.refresh()}firstPage(){this.collection.firstPage(),this.refresh()}lastPage(){this.collection.lastPage(),this.refresh()}editCell(e,t,i){if(e&&t){let s=this.collection.at(e),l=this.columns[t];s&&l&&s.set(l,i)}}copyCell(e,t,i,s){if(e&&t&&i&&s){let i=this.collection.at(e),s=this.columns[t],l=this.collection.at(row);i&&s&&l&&l.set(s,value1)}}clearCell(e,t){this.editCell(e,t,null)}render(){if(!this.isInitalized)return this;let e;if(this.template){if(this.showProgressBar(!0),this.el&&(e="string"==typeof this.el?document.querySelector(this.el):this.el)){let t=e.querySelector("tbody"),i=e.querySelector("thead");if(this.sortable&&this._unbindSortableColumnEvents(),this.editable&&this._unbindCellChangeEvents(),this._columns&&Object.keys(this._columns).length>0){for(;i.hasChildNodes();)i.removeChild(i.lastChild);(0,n.directDOMTableHeader)(i,this._columns,this.lineNumbers,this.sortKey,this.display,this.selectable)}else if(i)for(;i.hasChildNodes();)i.removeChild(i.lastChild);if(this.collection&&this.collection.length>0&&t){for(;t.hasChildNodes();)t.removeChild(t.lastChild);this.editable?(0,n.directDOMEditableTableBody)(t,this.collection.toJSON(),this._columns,this.lineNumbers,this.sortKey,this.display,this.selectable,this.name):(0,n.directDOMTableBody)(t,this.collection.toJSON(),this._columns,this.lineNumbers,this.sortKey,this.display,this.selectable,this.name,this.linkable,this.links,this[this.links.link])}else for(;t.hasChildNodes();)t.removeChild(t.lastChild)}}else{if(this.template="notused",this.showProgressBar(!0),this.el&&(e="string"==typeof this.el?document.querySelector(this.el):this.el)){e.innerHTML="";let t=document.createElement("progress"),i=document.createTextNode("Please wait.");t.appendChild(i),e.appendChild(t);const s=this._style.includes("material");(0,n.directDOMTableCompile)(e,this.name,this.description,this._columns,this.collection.toJSON(),this.lineNumbers,this.sortKey,this.editable,this.display,this.selectable,this.linkable,this.links,this[this.links.link],s),this.renderPaginationControl&&(0,n.directDOMPaginationControl)(e,this.currentPage(),this.totalPages()),(t=document.createElement("p")).classList.add("message"),e.appendChild(t)}this.renderPaginationControl&&this._bindPaginationControlEvents()}return this.delegateEvents(),this.sortable&&this._bindSortableColumnEvents(),this.editable&&this._bindCellChangeEvents(),this.showProgressBar(!1),this.setTheme(this.theme),this}retrieveSchema(e){const t=this;let i=null;(0,r.request)({url:e,contentType:"application/json",dataType:"json",success:(e,s)=>{const l={schema:i="string"==typeof e?JSON.parse(e):e};t.initialize(l)},error:(e,t)=>{this.showMessage("AutomaticTable Failed to fetch schema!!")}})}fetch(){this.showProgressBar(!0);const e=this;this.uri&&(this.collection.uri=this.uri),this.collection.fetch({reset:!0,success(){e.showProgressBar(!1),e.sortKey=null,e.populate(e.collection.toJSON()),e.refresh()},error(){e.showProgressBar(!1),e.showMessage("AutomaticTable fetch failed!")}})}save(e){if(this.editable||e){this.showProgressBar(!0);const e=this,t=function(){return e.showProgressBar(!1),!0},i=function(){return e.showProgressBar(!1),e.showMessage("AutomaticTable save failed!"),!1};this.collection.save({reset:!0,success(){t()},error(){i()}})}return!1}populate(e){e&&Array.isArray(e)&&(this.sortKey=null,this.data=e,this.collection.reset(this.data))}clear(){this.sortKey=null,this.data=[],this.collection.reset(null)}refresh(){return this.render()}saveCell(e){const t=e.target,i=this.collection.at(parseInt(t.getAttribute(n.TABLE_DATA_ATTRIBUTES.INDEX)));let s=t.value;"number"===t.getAttribute("type")&&(s=parseInt(t.value)),i.set(t.getAttribute(n.TABLE_DATA_ATTRIBUTES.NAME),s)}_bindCellChangeEvents(){let e="string"==typeof this.el?this.el:this.el.localName,t=[].slice.call(document.querySelectorAll(e+" table tr td input")),i=0,s=t.length;for(i=0;i<s;i++)t[i].addEventListener("change",this.saveCell.bind(this),!1);for(i=0,s=(t=[].slice.call(document.querySelectorAll(e+" table tr td select"))).length,i=0;i<s;i++)t[i].addEventListener("change",this.saveCell.bind(this),!1)}_unbindCellChangeEvents(){let e="string"==typeof this.el?this.el:this.el.localName,t=[].slice.call(document.querySelectorAll(e+" table tr td input")),i=0,s=t.length;for(i=0;i<s;i++)t[i].removeEventListener("change",this.saveCell,!1);for(i=0,s=(t=[].slice.call(document.querySelectorAll(e+" table tr td select"))).length,i=0;i<s;i++)t[i].removeEventListener("change",this.saveCell,!1)}exportTo(e){let t="";return t="csv"===e?(0,n.csvTableCompile)(this.name,this.description,this._columns,this.collection.toJSON()):"tsv"===e?(0,n.tsvTableCompile)(this.name,this.description,this._columns,this.collection.toJSON()):(0,n.defaultTableCompile)(this.name,this.description,this._columns,this.collection.toJSON(),!1,null)}_unbindPaginationControlEvents(){if(this.pageControlBound){let e="string"==typeof this.el?this.el:this.el.localName,t=document.querySelector(e+" div.paginationControl span.first"),i=document.querySelector(e+" div.paginationControl span.previous"),s=document.querySelector(e+" div.paginationControl span.next"),l=document.querySelector(e+" div.paginationControl span.last");t&&t.removeEventListener("click",this.firstPage,!1),i&&i.removeEventListener("click",this.previousPage,!1),s&&s.removeEventListener("click",this.nextPage,!1),l&&l.removeEventListener("click",this.lastPage,!1),this.pageControlBound=!1}}_bindPaginationControlEvents(){if(!this.pageControlBound){let e="string"==typeof this.el?this.el:this.el.localName,t=document.querySelector(e+" div.paginationControl span.first"),i=document.querySelector(e+" div.paginationControl span.previous"),s=document.querySelector(e+" div.paginationControl span.next"),l=document.querySelector(e+" div.paginationControl span.last");t&&t.addEventListener("click",this.firstPage.bind(this),!1),i&&i.addEventListener("click",this.previousPage.bind(this),!1),s&&s.addEventListener("click",this.nextPage.bind(this),!1),l&&l.addEventListener("click",this.lastPage.bind(this),!1),this.pageControlBound=!0}}_deriveEventTarget(e){let t=null;return e&&(t=e.target.getAttribute(n.TABLE_DATA_ATTRIBUTES.NAME)),t}_sortByHeaderEvent(e){let t=this._deriveEventTarget(e);this.sortBy(t)}_unbindSortableColumnEvents(){if(this.el&&this.sortable){let e,t=0,i=(e="string"==typeof this.el?document.querySelectorAll(this.el+" table tr th"):document.querySelectorAll(this.el.localName+" table tr th")).length;for(t=0;t<i;t++)e[t].removeEventListener("click",this._sortByHeaderEvent,!1)}}_bindSortableColumnEvents(){if(this.el&&this.sortable){let e,t=0,i=(e="string"==typeof this.el?document.querySelectorAll(this.el+" table tr th"):document.querySelectorAll(this.el.localName+" table tr th")).length;for(t=0;t<i;t++)"lineNumber"===e[t].getAttribute(n.TABLE_DATA_ATTRIBUTES.NAME)||e[t].addEventListener("click",this._sortByHeaderEvent.bind(this),!1)}}compileTemplate(){return""}setURI(e){e&&(this.uri=e,this.collection.uri=e)}setSchema(e){this.schema=e,this._columns=e.properties,this.collection.reset(),this.collection.schema=e,this.uri&&(this.collection.uri=this.uri)}showProgressBar(e){if(this.el){let t="string"==typeof this.el?document.querySelector(this.el):this.el;if(t){let i=t.querySelector("progress");i&&(i.style.display=e?"block":"none",i.style.visibility=e?"visible":"hidden")}}}showMessage(e){if(this.el&&e){let t=("string"==typeof this.el?document.querySelector(this.el):this.el).querySelector("p[class=message]");t&&(t.innerHTML=e)}}validate(){let e=this.collection?this.collection.validate():null;return!this.collection.isValid()&&e&&e.messages?this.showMessage((0,o.default)(e.messages)):this.showMessage(""),e}isValid(){return!this.collection||this.collection.isValid()}remove(){if(this.undelegateEvents(),this.off(),this.stopListening(),this.el){const e=a.default.selector(this.el);e&&(e.innerHTML="")}return a.default.empty(this.el),this}getSelected(){const e=Object.keys(this.model._attributes),t=e.length,i=[];let s=0;for(s=0;s<t;s++)if(e[s].includes("row-")&&!0===this.model._attributes[e[s]]){const t=Number(e[s].substring(4));i.push(this.collection.at(t))}return i}getSelectedAsJSON(){const e=Object.keys(this.model.attributes),t=e.length,i=[];let s=0;for(s=0;s<t;s++)if(e[s].includes("row-")&&!0===this.model.attributes[e[s]]){const t=Number(e[s].substring(4)),l=this.collection.at(t);i.push(l.toJSON())}return i}getSelectedIndex(){const e=Object.keys(this.model._attributes),t=e.length,i=[];let s=0;for(s=0;s<t;s++)e[s].includes("row-")&&!0===this.model._attributes[e[s]]&&i.push(Number(e[s].substring(4)));return i}removeRows(e){const t=e.length;let i=0;for(i=0;i<t;i++){const t=e[i];t.uri||(t.uri=this.uri+"/"+t.id),t.destroy()}}}},function(t,i){t.exports=e},function(e,i){e.exports=t},function(e,t,i){"use strict";var s=h(i(0)),l=h(i(9)),n=h(i(10)),o=h(i(11)),r=h(i(12)),a=h(i(13)),c=h(i(14));function h(e){return e&&e.__esModule?e:{default:e}}e.exports.AutomaticTable=s.default,e.exports.BigDataTable=l.default,e.exports.EditableBigDataTable=n.default,e.exports.EditableLocalStorageTable=o.default,e.exports.EditableTable=r.default,e.exports.LocalStorageTable=a.default,e.exports.Spreadsheet=c.default},function(e,t){e.exports=i},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=t.TABLE_DATA_ATTRIBUTES={NAME:"data-name",TYPE:"data-type",DESCRIPTION:"data-description",INDEX:"data-index",LABEL:"data-label",SORT_CLASS:"sorted"},l=t.csvTableCompile=(e,t,i,s,l)=>{let n,o,r,a,c,h="";if(l||(l=","),i){let e,t;for(e in i)i.hasOwnProperty(e)&&(t=i[e],h=h+e+l);h=h.slice(0,-1),h+="\n"}const d=s.length;for(n=0;n<d;n++){for(r in o=s[n])o.hasOwnProperty(r)&&(c=typeof(a=o[r]),h=h+a+l);h=h.slice(0,-1),h+="\n"}return h},n=(t.tsvTableCompile=(e,t,i,s)=>l(e,t,i,s,"\t"),t.defaultTableCompile=(e,t,i,l,r,a,c,h)=>{let d=`<table ${s.NAME}="${e}" ${s.DESCRIPTION}="${t}">`;return e&&(d+="<caption",t&&(d+=` title="${t}"`),d+=`>${e}</caption>`),d+="<thead>",d+=n(i,r,a,h),d+="</thead><tbody>",l&&(d+=c?editableTableBody(l,i,r,a,h):o(l,i,r,a,h)),d+="</tbody></table>"},t.defaultTableHeader=(e,t,i,l)=>{let n="";if(e){let l,o;for(l in n+="<tr>",t&&(n+=`<th ${s.NAME}="lineNumber">#</th>`),e)e.hasOwnProperty(l)&&(o=e[l],n+=`<th ${s.NAME}="${l}" ${s.DESCRIPTION}="${o.description}" ${s.TYPE}="${o.type}"`,i===l&&(n=n+' class="'+s.SORT_CLASS+'"'),n=n+">"+l+"</th>");n+="</tr>"}return n}),o=t.defaultTableBody=(e,t,i,l,n)=>{let o,r,a,c,h,d="",u=e.length;for(o=0;o<u;o++){for(a in d+="<tr>",i&&(d=d+'<td class="label number">'+(o+1)+"</td>"),r=e[o])r.hasOwnProperty(a)&&(c=r[a],d=d+"<td "+s.TYPE+'="'+(h=typeof c)+'" class="'+h,l===a&&(d=d+" "+s.SORT_CLASS),d=d+'">'+c+"</td>");d+="</tr>"}return d},r=(t.directDOMTableCompile=(e,t,i,l,n,o,h,d,u,p,m,b,f,g)=>{const y=document.createElement("table"),C=document.createElement("thead"),v=document.createElement("tbody");let S,E;y.setAttribute("data-"+t,t),y.setAttribute(s.NAME,t),y.setAttribute(s.DESCRIPTION,i),i&&(S=document.createElement("caption"),t&&S.setAttribute("title",t),E=document.createTextNode(i),S.appendChild(E),y.appendChild(S)),r(C,l,o,h,u,p,g),y.appendChild(C),y.appendChild(v),n&&(d?c(v,n,l,o,h,u,p,t,m,b,f):a(v,n,l,o,h,u,p,t,m,b,f)),e.appendChild(y)},t.directDOMTableHeader=(e,t,i,l,n,o,r)=>{if(t&&e){const a=document.createElement("tr");let c,h,d,u;for(d in o&&((c=document.createElement("th")).setAttribute(s.NAME,"select"),r?c.innerHTML='<i class="material-icons">check_box_outline_blank</i>':(h=document.createTextNode("❏"),c.appendChild(h)),a.appendChild(c)),i&&((c=document.createElement("th")).setAttribute(s.NAME,"lineNumber"),h=document.createTextNode("#"),c.appendChild(h),a.appendChild(c)),t){let e=!0;null!==n&&(e=-1!==n.indexOf(d)),e&&t.hasOwnProperty(d)&&(u=t[d],(c=document.createElement("th")).setAttribute(s.NAME,d),c.setAttribute(s.DESCRIPTION,u.description),c.setAttribute(s.TYPE,u.type),l===d&&c.classList.add(s.SORT_CLASS),h=document.createTextNode(d),c.appendChild(h),a.appendChild(c))}e.appendChild(a)}}),a=t.directDOMTableBody=(e,t,i,l,n,o,r,a,c,h,d)=>{const u=t.length;let p,m,b,f,g,y,C,v;for(p=0;p<u;p++){for(b in m=t[p],v=document.createElement("tr"),r&&((y=document.createElement("td")).setAttribute(s.NAME,"select"),(C=document.createElement("input")).type="checkbox",C.name=String(p),C.value=String(p),C.setAttribute("data-"+a,"row-"+p),y.appendChild(C),y.classList.add("label","select"),v.appendChild(y)),l&&(y=document.createElement("td"),C=document.createTextNode(String(p+1)),y.appendChild(C),y.classList.add("label","number"),v.appendChild(y)),i){let e=!0;if(null!==o&&(e=-1!==o.indexOf(b)),e&&m.hasOwnProperty(b)){if(g=typeof(f=m[b]),y=document.createElement("td"),C=document.createTextNode(f),c&&h&&d&&(h.column===b||h.wholeRow)){const e=document.createElement("a");e.href=d(m),e.appendChild(C),y.appendChild(e)}else y.appendChild(C);y.classList.add(g),n===b&&y.classList.add(s.SORT_CLASS),y.setAttribute(s.TYPE,g),y.setAttribute(s.LABEL,b),v.appendChild(y)}}e.appendChild(v)}},c=t.directDOMEditableTableBody=(e,t,i,l,n,o,r,a)=>{const c=t.length,h=l;let d,u,p,m,b,f,g,y,C,v;for(d=0;d<c;d++){for(p in u=t[d],y=document.createElement("tr"),r&&((f=document.createElement("td")).setAttribute(s.NAME,"select"),(g=document.createElement("input")).type="checkbox",g.name=String(d),g.value=String(d),f.appendChild(g),f.classList.add("label","select"),y.appendChild(f)),h&&(f=document.createElement("td"),g=document.createTextNode(String(d+1)),f.appendChild(g),f.classList.add("label","number"),y.appendChild(f)),u){let e=!0;if(null!==o&&(e=-1!==o.indexOf(p)),e&&u.hasOwnProperty(p)){if(v=i[p]?i[p]:{},b=typeof(m=u[p]),(f=document.createElement("td")).classList.add(b),n===p&&f.classList.add(s.SORT_CLASS),f.setAttribute(s.TYPE,b),f.setAttribute(s.LABEL,p),"object"===b)if(Array.isArray(m)){let e,t,i=0,s=m.length;for(C=document.createElement("select"),i=0;i<s;i++)(e=document.createElement("option")).setAttribute("value",m[i]),t=document.createTextNode(m[i]),e.appendChild(t),C.appendChild(e)}else(C=document.createElement("textarea")).value=JSON.stringify(m);else if("boolean"===b)(C=document.createElement("input")).setAttribute("type","checkbox"),!0===m&&C.setAttribute("checked","checked"),C.value=m;else if("number"===b)(C=document.createElement("input")).setAttribute("type","number"),C.value=m;else if("string"===b&&v.enum){C=document.createElement("select");let e,t,i=0,s=v.enum.length;for(i=0;i<s;i++)(e=document.createElement("option")).setAttribute("value",v.enum[i]),t=document.createTextNode(v.enum[i]),m===v.enum[i]&&e.setAttribute("selected","selected"),e.appendChild(t),C.appendChild(e)}else"string"===b&&"email"===v.format?((C=document.createElement("input")).setAttribute("type","email"),C.value=m):"string"===b&&"uri"===v.format?((C=document.createElement("input")).setAttribute("type","url"),C.value=m):"string"===b&&"date-time"===v.format?((C=document.createElement("input")).setAttribute("type","datetime"),C.value=m):((C=document.createElement("input")).setAttribute("type","text"),C.value=m);"string"===b&&v.pattern&&C.setAttribute("pattern",v.pattern),v.minimum&&C.setAttribute("min",v.minimum),v.maximum&&C.setAttribute("max",v.maximum),"string"===b&&v.minlength&&C.setAttribute("minlength",v.minlength),"string"===b&&v.maxlength&&C.setAttribute("maxlength",v.maxlength),C.setAttribute(s.NAME,p),C.setAttribute(s.INDEX,d),C.setAttribute("data-"+a,a),f.appendChild(C),y.appendChild(f)}}e.appendChild(y)}};t.directDOMPaginationControl=(e,t,i)=>{let s,l,n;(s=document.createElement("div")).classList.add("paginationControl"),(l=document.createElement("span")).classList.add("first"),n=document.createTextNode("<< First"),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("previous"),n=document.createTextNode("< Previous"),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("current"),n=document.createTextNode(`${t} of ${i}`),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("next"),n=document.createTextNode("Next >"),l.appendChild(n),s.appendChild(l),(l=document.createElement("span")).classList.add("last"),n=document.createTextNode("Last >>"),l.appendChild(n),s.appendChild(l),e.appendChild(s)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>{let t="";if(e&&e.length>0){t+='<ul class="errors">';const i=e.length;let s=0,l=0;for(s=0;s<i;s++){const i=e[s].errors.length;for(l=0;l<i;l++)t=t+"<li>"+e[s].errors[l]+"</li>"}t+="</ul>"}return t}},function(e,t){e.exports=s},function(e,t){e.exports=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l=i(0),n=(s=l)&&s.__esModule?s:{default:s};t.default=class extends n.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l=i(0),n=(s=l)&&s.__esModule?s:{default:s};t.default=class extends n.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,e.editable=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l=i(0),n=(s=l)&&s.__esModule?s:{default:s};t.default=class extends n.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,e.editable=!0,e.localStorage=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l=i(0),n=(s=l)&&s.__esModule?s:{default:s};t.default=class extends n.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.editable=!0,super(e)}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l=i(0),n=(s=l)&&s.__esModule?s:{default:s};t.default=class extends n.default{constructor(e){e||(e={}),e.lineNumbers=!0,e.sortable=!0,e.editable=!1,e.localStorage=!0,super(e),this.renderPaginationControl=!0}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l=i(1),n=i(0),o=(s=n)&&s.__esModule?s:{default:s},r=i(2);t.default=class extends o.default{constructor(e){if(super(e),this.lineNumbers=!0,this.sortable=!0,this.editable=!0,e&&e.pagination?this.renderPaginationControl=e.pagination:this.renderPaginationControl=!1,e&&e.rows?this.rows=e.rows:this.rows=10,e&&e.columns?this.columns=e.columns:this.rows=5,this.collection?this.collection.reset():!this.collection&&this.localStorage?this.collection=new r.LocalStorageCollection:this.collection||(this.collection=new r.Collection),e){if(e.schema)if((0,l.isObject)(e.schema))this.schema=e.schema;else{let t=null;try{(t=JSON.parse(e.schema))&&(0,l.isObject)(t)&&(this.schema=t)}catch(e){}this.schema||(this.retrieveSchema(e.schema),this.isInitalized=!1)}e.el&&(this.el=e.el),e.uri&&(this.uri=e.uri,this.collection.url=e.uri),e.data&&Array.isArray(e.data)&&this.populate(e.data),e.sortable&&(this.sortable=e.sortable),e.lineNumbers&&(this.lineNumbers=e.lineNumbers),e.localStorageKey&&!e.uri&&(this.localStorageKey=e.localStorageKey,this.uri=null)}if(this.collection&&this.uri&&(this.collection.url=this.uri),this.collection&&(this.collection.crossOrigin=this.crossOrigin),this.schema)this.name&&""!==this.name||!this.schema.title||(this.name=this.schema.title),this.description&&""!==this.description||!this.schema.description||(this.description=this.schema.description),this.isInitalized||(this._columns=this.schema.properties,this.collection.schema=this.schema);else{this.schema={$schema:"http://json-schema.org/draft-04/schema#",title:"untitled",type:"object",description:"",properties:{}};let e=0;for(e=0;e<this.columns;e++)this.schema.properties[String.fromCharCode(65+e)]={description:"",type:"string"};this._columns=this.schema.properties,this.collection.schema=this.schema}this._generate(),this.collection.set(this.data),this.isInitalized=!0}_generate(){if(this.schema&&this.schema.properties){let e=0,t=0,i=Object.keys(this.schema.properties),s=i.length,l={};for(this.data=[],t=0;t<this.rows;t++){for(l={},e=0;e<s;e++)l[i[e]]="";this.data.push(l)}}}}}])});
//# sourceMappingURL=presentation-table.js.map