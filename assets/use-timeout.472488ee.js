import{b as u}from"./QBtn.4c47645a.js";import{Q as i,v as m,t as s}from"./index.7375d038.js";function f(){let e=null;const o=s();function t(){e!==null&&(clearTimeout(e),e=null)}return i(t),m(t),{removeTimeout:t,registerTimeout(n,r){t(),u(o)===!1&&(e=setTimeout(()=>{e=null,n()},r))}}}export{f as u};
