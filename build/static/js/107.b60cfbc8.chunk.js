"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[107],{185:(e,t,r)=>{r.d(t,{L:()=>n});var o=r(213);r(880);const n=o.A.create({baseURL:"https://api.stylewh.com",withCredentials:!0});n.interceptors.response.use((e=>e),(async e=>(window.location.pathname,Promise.reject(e))))},790:(e,t,r)=>{r.d(t,{u:()=>n});var o=r(185);const n=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{return(await o.L.get("/admin",{params:{page:e,limit:t}})).data}catch(r){throw console.error("Error fetching admin list:",r),r}}},530:(e,t,r)=>{r.d(t,{P:()=>n});var o=r(185);const n=async e=>{try{return(await o.L.delete(`/admin/${e}`)).data}catch(t){throw console.error("Error deleting admin:",t),t}}},188:(e,t,r)=>{r.d(t,{A:()=>l});r(43);var o=r(464),n=r(579);const l=e=>{let{filteredData:t,handleEdit:r,handleDelete:o}=e;return(0,n.jsxs)(i,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"No."}),(0,n.jsx)("th",{children:"\uc0c1\ud0dc"}),(0,n.jsx)("th",{children:"\uc544\uc774\ub514"}),(0,n.jsx)("th",{children:"\uc774\ub984"}),(0,n.jsx)("th",{children:"\uc774\uba54\uc77c"}),(0,n.jsx)("th",{children:"\uad8c\ud55c\ub4f1\uae09"}),(0,n.jsx)("th",{children:"\uc561\uc158"})]})}),(0,n.jsx)("tbody",{children:t.map(((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.no}),(0,n.jsx)("td",{children:e.status}),(0,n.jsx)("td",{children:e.id}),(0,n.jsx)("td",{children:e.name}),(0,n.jsx)(s,{onClick:()=>r(e.id),children:e.email}),(0,n.jsx)("td",{children:e.role}),(0,n.jsxs)("td",{children:[(0,n.jsx)(d,{onClick:()=>r(e.id),children:"\uc218\uc815"}),(0,n.jsx)(d,{onClick:()=>o(e.id),children:"\uc0ad\uc81c"})]})]},t)))})]})},i=o.Ay.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
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
`,s=o.Ay.td`
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.blue}};
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.darkBlue}};
  }
`,d=o.Ay.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`},580:(e,t,r)=>{r.d(t,{A:()=>l});r(43);var o=r(464),n=r(579);const l=e=>{let{title:t,searchType:r,setSearchType:o,searchTerm:l,setSearchTerm:h}=e;return(0,n.jsxs)(i,{children:[(0,n.jsx)(s,{children:t}),(0,n.jsxs)(a,{children:[(0,n.jsxs)(c,{onChange:e=>o(e.target.value),children:[(0,n.jsx)("option",{value:"id",children:"\uc544\uc774\ub514"}),(0,n.jsx)("option",{value:"name",children:"\uc774\ub984"}),(0,n.jsx)("option",{value:"email",children:"\uc774\uba54\uc77c"}),(0,n.jsx)("option",{value:"role",children:"\uad8c\ud55c\ub4f1\uae09"})]}),(0,n.jsx)(d,{type:"text",placeholder:"Search",value:l,onChange:e=>h(e.target.value)})]})]})},i=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown5}};
`,s=o.Ay.h1`
  ${e=>{let{theme:t}=e;return t.fonts.heading}};
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.heading.fontSize}};
`,d=o.Ay.input`
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;
`,a=o.Ay.div`
  display: flex;
  align-items: center;
`,c=o.Ay.select`
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  margin-right: 10px;
`},576:(e,t,r)=>{r.d(t,{A:()=>l});r(43);var o=r(464),n=r(579);const l=e=>{let{page:t,setPage:r}=e;return(0,n.jsxs)(i,{children:[(0,n.jsx)(s,{disabled:1===t,onClick:()=>r(t-1),children:"\xab"}),(0,n.jsx)(s,{children:t}),(0,n.jsx)(s,{onClick:()=>r(t+1),children:"\xbb"})]})},i=o.Ay.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`,s=o.Ay.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`},107:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var o=r(43),n=r(216),l=r(464),i=r(170),s=r(790),d=r(530),a=r(580),c=r(188),h=r(576),u=r(579);const x=()=>{const e=(0,n.Zp)(),[t,r]=(0,o.useState)(""),[x,j]=(0,o.useState)("id"),[y,b]=(0,o.useState)([]),[w,$]=(0,o.useState)(0),[v,k]=(0,o.useState)(1),[A]=(0,o.useState)(10);(0,o.useEffect)((()=>{(async()=>{try{const e=await(0,s.u)(v,A);b(e.admins),$(e.total)}catch(e){console.error("Failed to fetch admin data:",e)}})()}),[v,A]);const C=y.filter((e=>"id"===x?e.id.toLowerCase().includes(t.toLowerCase()):"name"===x?e.name.toLowerCase().includes(t.toLowerCase()):"email"===x?e.email.toLowerCase().includes(t.toLowerCase()):"role"===x?e.role.toLowerCase().includes(t.toLowerCase()):e));return(0,u.jsx)(l.NP,{theme:i.A,children:(0,u.jsxs)(p,{children:[(0,u.jsx)(a.A,{title:"\ucc28\ub2e8\ub41c \uad00\ub9ac\uc790 \ubaa9\ub85d",searchType:x,setSearchType:j,searchTerm:t,setSearchTerm:r}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(g,{children:["\ucd1d ",w,"\uac1c"]}),(0,u.jsx)(c.A,{filteredData:C,handleEdit:t=>{e(`/admin/${t}`)},handleDelete:async e=>{if(window.confirm("\uc815\ub9d0\ub85c \uc774 \uad00\ub9ac\uc790\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))try{await(0,d.P)(e),alert("\uad00\ub9ac\uc790\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),b((t=>t.filter((t=>t.id!==e))))}catch(t){alert("\uad00\ub9ac\uc790 \uc0ad\uc81c \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}}}),(0,u.jsx)(f,{onClick:()=>e("/admin/create"),children:"\uc2e0\uaddc \ub4f1\ub85d"}),(0,u.jsx)(h.A,{page:v,setPage:k})]})]})})},p=l.Ay.div`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
`,m=l.Ay.div`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  padding: 20px;
`,g=l.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
`,f=l.Ay.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`}}]);
//# sourceMappingURL=107.b60cfbc8.chunk.js.map