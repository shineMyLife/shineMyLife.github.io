import{Q as i}from"./QSeparator.ab138bf3.js";import{Q as f}from"./QSpace.db7d47d2.js";import{Q as g}from"./QIcon.b91064a0.js";import{Q as x}from"./QPage.cc45b1e7.js";import{N as Q,d as h}from"./Notice.3075c433.js";import{u as k}from"./menu-store.c66d95b4.js";import{C as q,o,e as v,f as D,$ as S,g as t,S as n,V as y,i as c,U as M,j as a,X as l}from"./index.7375d038.js";import"./render.d56d91bc.js";import"./format.7eeb0604.js";import"./dom.073535e1.js";const N=["onClick"],b={class:"text-subtitle1 text-weight-bold"},B={class:"text-grey-5 self-end q-px-sm"},P={__name:"NoticeList",setup(C){const m=k(),p=S(),u=Q.sort((e,r)=>r.seq-e.seq),d=e=>{p.push({name:"notice/detail",params:{seq:e}})};return q(()=>{m.setMenuTitle("\uACF5\uC9C0\uC0AC\uD56D")}),(e,r)=>(o(),v(x,{class:"page-section"},{default:D(()=>[t(i,{class:"bg-grey-4"}),(o(!0),n(M,null,y(c(u),(s,_)=>(o(),n("div",{key:_},[a("div",{class:"row q-pa-lg cursor-pointer",onClick:Y=>d(s.seq)},[a("div",b,l(s.title),1),a("div",B,l(c(h).formatDate(s.createDate,"YYYY-MM-DD")),1),t(f),t(g,{name:"navigate_next",size:"20px"})],8,N),t(i,{class:"bg-grey-3"})]))),128))]),_:1}))}};export{P as default};
