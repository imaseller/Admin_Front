"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[696],{185:(e,t,r)=>{r.d(t,{L:()=>o});var n=r(213);r(880);const o=n.A.create({baseURL:"https://api.stylewh.com",withCredentials:!0});o.interceptors.response.use((e=>e),(async e=>(window.location.pathname,Promise.reject(e))))},446:(e,t,r)=>{r.d(t,{o:()=>o});var n=r(185);const o=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{return(await n.L.get("/user",{params:{page:e,limit:t}})).data}catch(r){throw console.error("Error fetching admin list:",r),r}}},580:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var n=r(464),o=r(579);const s=e=>{let{title:t,searchType:r,setSearchType:n,searchTerm:s,setSearchTerm:h}=e;return(0,o.jsxs)(i,{children:[(0,o.jsx)(l,{children:t}),(0,o.jsxs)(d,{children:[(0,o.jsxs)(c,{onChange:e=>n(e.target.value),children:[(0,o.jsx)("option",{value:"id",children:"\uc544\uc774\ub514"}),(0,o.jsx)("option",{value:"name",children:"\uc774\ub984"}),(0,o.jsx)("option",{value:"email",children:"\uc774\uba54\uc77c"}),(0,o.jsx)("option",{value:"role",children:"\uad8c\ud55c\ub4f1\uae09"})]}),(0,o.jsx)(a,{type:"text",placeholder:"Search",value:s,onChange:e=>h(e.target.value)})]})]})},i=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown5}};
`,l=n.Ay.h1`
  ${e=>{let{theme:t}=e;return t.fonts.heading}};
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.heading.fontSize}};
`,a=n.Ay.input`
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;
`,d=n.Ay.div`
  display: flex;
  align-items: center;
`,c=n.Ay.select`
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  margin-right: 10px;
`},576:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var n=r(464),o=r(579);const s=e=>{let{page:t,setPage:r}=e;return(0,o.jsxs)(i,{children:[(0,o.jsx)(l,{disabled:1===t,onClick:()=>r(t-1),children:"\xab"}),(0,o.jsx)(l,{children:t}),(0,o.jsx)(l,{onClick:()=>r(t+1),children:"\xbb"})]})},i=n.Ay.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`,l=n.Ay.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`},696:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(43),o=r(216),s=r(464),i=r(170),l=r(446),a=r(580),d=r(579);const c=e=>{let{filteredData:t,handleEdit:r}=e;return(0,d.jsxs)(h,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"No."}),(0,d.jsx)("th",{children:"\uc2e0\uccad\uc77c"}),(0,d.jsx)("th",{children:"\ub2c9\ub124\uc784(\uc218\ub839\uc778)"}),(0,d.jsx)("th",{children:"\uc81c\ud488\uba85/\ube0c\ub79c\ub4dc"}),(0,d.jsx)("th",{children:"\uae30\uac04"}),(0,d.jsx)("th",{children:"\uc774\uc6a9\ub0a0\uc9dc"}),(0,d.jsx)("th",{children:"\uc0ac\uc774\uc988"}),(0,d.jsx)("th",{children:"\uc774\uc6a9\uae08\uc561"}),(0,d.jsx)("th",{children:"\uacb0\uc81c\ubc29\uc2dd"}),(0,d.jsx)("th",{children:"\uc0c1\ud0dc"})]})}),(0,d.jsx)("tbody",{children:t.map((e=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.no}),(0,d.jsx)("td",{children:new Date(e.applicationDate).toLocaleDateString()})," ",(0,d.jsx)("td",{children:e.recipientNickname})," ",(0,d.jsxs)("td",{children:[e.productName," / ",e.brandName]})," ",(0,d.jsx)("td",{children:e.duration})," ",(0,d.jsx)("td",{children:new Date(e.useDate).toLocaleDateString()})," ",(0,d.jsx)("td",{children:e.size})," ",(0,d.jsx)("td",{children:e.amount})," ",(0,d.jsx)("td",{children:e.paymentMethod})," ",(0,d.jsx)("td",{children:e.status})," "]},e.no)))})]})},h=s.Ay.table`
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
`;s.Ay.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;var x=r(576);const u=()=>{const e=(0,o.Zp)(),[t,r]=(0,n.useState)(""),[h,u]=(0,n.useState)("email"),[f,b]=(0,n.useState)([]),[y,w]=(0,n.useState)(0),[v,$]=(0,n.useState)(1),[k]=(0,n.useState)(10);(0,n.useEffect)((()=>{(async()=>{try{const e=await(0,l.o)(v,k);b(e.users||[]),w(e.total||0)}catch(e){console.error("Error fetching user list:",e)}})()}),[v,k]);const A=f.filter((e=>"email"===h?e.email.toLowerCase().includes(t.toLowerCase()):"nickname"===h?e.nickname.toLowerCase().includes(t.toLowerCase()):"status"===h?e.status.toLowerCase().includes(t.toLowerCase()):e));return(0,d.jsx)(s.NP,{theme:i.A,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(a.A,{title:"\uc8fc\ubb38 \ubaa9\ub85d",searchType:h,setSearchType:u,searchTerm:t,setSearchTerm:r}),(0,d.jsxs)(m,{children:[(0,d.jsxs)(g,{children:["\ucd1d ",y,"\uba85"]}),(0,d.jsx)(c,{filteredData:A,handleEdit:t=>{e(`/user/admin${t}`)}}),(0,d.jsx)(j,{onClick:()=>{e("/user/adminnew")},children:"\uc2e0\uaddc \ub4f1\ub85d"}),(0,d.jsx)(x.A,{page:v,setPage:$,total:y,limit:k})]})]})})},p=s.Ay.div`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
`,m=s.Ay.div`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  padding: 20px;
  overflow-x: auto; /* Enable horizontal scrolling if necessary */
`,g=s.Ay.div`
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
//# sourceMappingURL=696.066f80c6.chunk.js.map