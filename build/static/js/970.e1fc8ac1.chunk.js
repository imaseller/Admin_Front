"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[970],{185:(e,t,r)=>{r.d(t,{L:()=>n});var o=r(213);r(880);const n=o.A.create({baseURL:"https://api.stylewh.com",withCredentials:!0});n.interceptors.response.use((e=>e),(async e=>(window.location.pathname,Promise.reject(e))))},446:(e,t,r)=>{r.d(t,{o:()=>n});var o=r(185);const n=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{return(await o.L.get("/user",{params:{page:e,limit:t}})).data}catch(r){throw console.error("Error fetching admin list:",r),r}}},580:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var o=r(464),n=r(579);const s=e=>{let{title:t,searchType:r,setSearchType:o,searchTerm:s,setSearchTerm:h}=e;return(0,n.jsxs)(l,{children:[(0,n.jsx)(i,{children:t}),(0,n.jsxs)(d,{children:[(0,n.jsxs)(c,{onChange:e=>o(e.target.value),children:[(0,n.jsx)("option",{value:"id",children:"\uc544\uc774\ub514"}),(0,n.jsx)("option",{value:"name",children:"\uc774\ub984"}),(0,n.jsx)("option",{value:"email",children:"\uc774\uba54\uc77c"}),(0,n.jsx)("option",{value:"role",children:"\uad8c\ud55c\ub4f1\uae09"})]}),(0,n.jsx)(a,{type:"text",placeholder:"Search",value:s,onChange:e=>h(e.target.value)})]})]})},l=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown5}};
`,i=o.Ay.h1`
  ${e=>{let{theme:t}=e;return t.fonts.heading}};
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.heading.fontSize}};
`,a=o.Ay.input`
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;
`,d=o.Ay.div`
  display: flex;
  align-items: center;
`,c=o.Ay.select`
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  margin-right: 10px;
`},576:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var o=r(464),n=r(579);const s=e=>{let{page:t,setPage:r}=e;return(0,n.jsxs)(l,{children:[(0,n.jsx)(i,{disabled:1===t,onClick:()=>r(t-1),children:"\xab"}),(0,n.jsx)(i,{children:t}),(0,n.jsx)(i,{onClick:()=>r(t+1),children:"\xbb"})]})},l=o.Ay.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`,i=o.Ay.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`},970:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var o=r(43),n=r(216),s=r(464),l=r(446),i=r(170),a=r(580),d=r(576),c=r(579);const h=e=>{let{products:t,onProductClick:r}=e;return(0,c.jsxs)(p,{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"No."}),(0,c.jsx)("th",{children:"\uadf8\ub8f9\uba85"}),(0,c.jsx)("th",{children:"\ube0c\ub79c\ub4dc\uba85"}),(0,c.jsx)("th",{children:"\ub2f4\ub2f9\uc790"}),(0,c.jsx)("th",{children:"\uc5f0\ub77d\ucc98"}),(0,c.jsx)("th",{children:"\uc778\uae30\uc5ec\ubd80"}),(0,c.jsx)("th",{children:"\uc0ac\uc6a9"})]})}),(0,c.jsx)("tbody",{children:t.map(((e,t)=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:e.no}),(0,c.jsxs)(u,{onClick:()=>r(e.no),children:[e.groupName," "]}),(0,c.jsx)("td",{children:e.brandName})," ",(0,c.jsx)("td",{children:e.manager})," ",(0,c.jsx)("td",{children:e.contact})," ",(0,c.jsx)("td",{children:e.isPopular?"Yes":"No"})," ",(0,c.jsx)("td",{children:e.isActive?"Yes":"No"})," "]},t)))})]})},p=s.Ay.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};

  th,
  td {
    padding: 12px 0px;
    text-align: left;
    min-width: 60px;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
    text-align: center;
  }

  th {
    background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown1}};
  }
`,u=s.Ay.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`,x=()=>{const e=(0,n.Zp)(),[t,r]=(0,o.useState)(""),[p,u]=(0,o.useState)("email"),[x,f]=(0,o.useState)([]),[y,w]=(0,o.useState)(0),[k,v]=(0,o.useState)(1),[A]=(0,o.useState)(10);(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,l.o)(k,A);f(e.users||[]),w(e.total||0)}catch(e){console.error("Error fetching user list:",e)}})()}),[k,A]);const $=x.filter((e=>"email"===p?e.email.toLowerCase().includes(t.toLowerCase()):"nickname"===p?e.nickname.toLowerCase().includes(t.toLowerCase()):"status"!==p||e.status.toLowerCase().includes(t.toLowerCase())));return(0,c.jsx)(s.NP,{theme:i.A,children:(0,c.jsxs)(m,{children:[(0,c.jsx)(a.A,{title:"\ube0c\ub79c\ub4dc \uad00\ub9ac",searchType:p,setSearchType:u,searchTerm:t,setSearchTerm:r}),(0,c.jsxs)(g,{children:[(0,c.jsxs)(j,{children:["\ucd1d ",$.length,"\uac1c"]}),(0,c.jsx)(h,{products:$,onProductClick:t=>{e(`/admin/productlist/detail/${t}`)}}),(0,c.jsx)(b,{onClick:()=>{e("/user/adminnew")},children:"\uc2e0\uaddc \ub4f1\ub85d"}),(0,c.jsx)(d.A,{page:k,setPage:v,total:y,limit:A})]})]})})},m=s.Ay.div`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
`,g=s.Ay.div`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  padding: 20px;
  height: 100%;
`,j=s.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
`,b=s.Ay.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`}}]);
//# sourceMappingURL=970.e1fc8ac1.chunk.js.map