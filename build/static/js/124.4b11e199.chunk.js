"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[124],{185:(e,t,r)=>{r.d(t,{L:()=>n});var o=r(213);r(880);const n=o.A.create({baseURL:"https://api.stylewh.com",withCredentials:!0});n.interceptors.response.use((e=>e),(async e=>(window.location.pathname,Promise.reject(e))))},446:(e,t,r)=>{r.d(t,{o:()=>n});var o=r(185);const n=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{return(await o.L.get("/user",{params:{page:e,limit:t}})).data}catch(r){throw console.error("Error fetching admin list:",r),r}}},580:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var o=r(464),n=r(579);const s=e=>{let{title:t,searchType:r,setSearchType:o,searchTerm:s,setSearchTerm:h}=e;return(0,n.jsxs)(l,{children:[(0,n.jsx)(i,{children:t}),(0,n.jsxs)(d,{children:[(0,n.jsxs)(c,{onChange:e=>o(e.target.value),children:[(0,n.jsx)("option",{value:"id",children:"\uc544\uc774\ub514"}),(0,n.jsx)("option",{value:"name",children:"\uc774\ub984"}),(0,n.jsx)("option",{value:"email",children:"\uc774\uba54\uc77c"}),(0,n.jsx)("option",{value:"role",children:"\uad8c\ud55c\ub4f1\uae09"})]}),(0,n.jsx)(a,{type:"text",placeholder:"Search",value:s,onChange:e=>h(e.target.value)})]})]})},l=o.Ay.div`
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
`},124:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var o=r(43),n=r(216),s=r(464),l=r(170),i=r(446),a=r(580),d=r(579);const c=e=>{let{filteredData:t,handleEdit:r}=e;return(0,d.jsxs)(h,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"No."}),(0,d.jsx)("th",{children:"\uc81c\ud488\uba85"}),(0,d.jsx)("th",{children:"\ube0c\ub79c\ub4dc"}),(0,d.jsx)("th",{children:"\ud3c9\uac00"}),(0,d.jsx)("th",{children:"\uc774\uc6a9\uae30\uac04"}),(0,d.jsx)("th",{children:"\uc0ac\uc774\uc988"}),(0,d.jsx)("th",{children:"\uc774\uc6a9\uc790"}),(0,d.jsx)("th",{children:"\ub178\ucd9c\uc5ec\ubd80"})]})}),(0,d.jsx)("tbody",{children:t.map(((e,t)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.no}),(0,d.jsx)(x,{onClick:()=>r(e.no),children:e.productName}),(0,d.jsx)("td",{children:e.brand}),(0,d.jsx)("td",{children:e.rating}),(0,d.jsx)("td",{children:e.usagePeriod}),(0,d.jsx)("td",{children:e.size}),(0,d.jsx)("td",{children:e.user}),(0,d.jsx)("td",{children:e.exposure})]},t)))})]})},h=s.Ay.table`
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
`,x=s.Ay.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;var u=r(576);const p=()=>{const e=(0,n.Zp)(),[t,r]=(0,o.useState)(""),[h,x]=(0,o.useState)("email"),[p,b]=(0,o.useState)([]),[y,w]=(0,o.useState)(0),[v,$]=(0,o.useState)(1),[k]=(0,o.useState)(10);(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,i.o)(v,k);b(e.users||[]),w(e.total||0)}catch(e){console.error("Error fetching user list:",e)}})()}),[v,k]);const A=p.filter((e=>"email"===h?e.email.toLowerCase().includes(t.toLowerCase()):"nickname"===h?e.nickname.toLowerCase().includes(t.toLowerCase()):"status"===h?e.status.toLowerCase().includes(t.toLowerCase()):e));return(0,d.jsx)(s.NP,{theme:l.A,children:(0,d.jsxs)(m,{children:[(0,d.jsx)(a.A,{title:"\uc0ac\uc6a9\ud6c4\uae30 \ubaa9\ub85d",searchType:h,setSearchType:x,searchTerm:t,setSearchTerm:r}),(0,d.jsxs)(g,{children:[(0,d.jsxs)(f,{children:["\ucd1d ",y,"\uba85"]}),(0,d.jsx)(c,{filteredData:A,handleEdit:t=>{e(`/user/admin${t}`)}}),(0,d.jsx)(j,{onClick:()=>{e("/user/adminnew")},children:"\uc2e0\uaddc \ub4f1\ub85d"}),(0,d.jsx)(u.A,{page:v,setPage:$,total:y,limit:k})]})]})})},m=s.Ay.div`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
`,g=s.Ay.div`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  padding: 20px;
  overflow-x: auto; /* Enable horizontal scrolling if necessary */
`,f=s.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
`,j=s.Ay.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`}}]);
//# sourceMappingURL=124.4b11e199.chunk.js.map