"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[854],{185:(e,t,r)=>{r.d(t,{L:()=>o});var n=r(213);r(880);const o=n.A.create({baseURL:"https://api.stylewh.com",withCredentials:!0});o.interceptors.response.use((e=>e),(async e=>(window.location.pathname,Promise.reject(e))))},446:(e,t,r)=>{r.d(t,{o:()=>o});var n=r(185);const o=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;try{return(await n.L.get("/user",{params:{page:e,limit:t}})).data}catch(r){throw console.error("Error fetching admin list:",r),r}}},580:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var n=r(464),o=r(579);const s=e=>{let{title:t,searchType:r,setSearchType:n,searchTerm:s,setSearchTerm:h}=e;return(0,o.jsxs)(l,{children:[(0,o.jsx)(i,{children:t}),(0,o.jsxs)(d,{children:[(0,o.jsxs)(c,{onChange:e=>n(e.target.value),children:[(0,o.jsx)("option",{value:"id",children:"\uc544\uc774\ub514"}),(0,o.jsx)("option",{value:"name",children:"\uc774\ub984"}),(0,o.jsx)("option",{value:"email",children:"\uc774\uba54\uc77c"}),(0,o.jsx)("option",{value:"role",children:"\uad8c\ud55c\ub4f1\uae09"})]}),(0,o.jsx)(a,{type:"text",placeholder:"Search",value:s,onChange:e=>h(e.target.value)})]})]})},l=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown5}};
`,i=n.Ay.h1`
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
`},507:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var n=r(464),o=r(579);const s=e=>{let{filteredData:t,handleEdit:r}=e;return(0,o.jsxs)(l,{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"No."}),(0,o.jsx)("th",{children:"\uc0c1\ud0dc"}),(0,o.jsx)("th",{children:"\ud68c\uc6d0\ud0c0\uc785"}),(0,o.jsx)("th",{children:"\uacc4\uc815(\uc774\uba54\uc77c)"}),(0,o.jsx)("th",{children:"\ub2c9\ub124\uc784"}),(0,o.jsx)("th",{children:"\uc0dd\uc77c"}),(0,o.jsx)("th",{children:"\uc120\ud638\uc0c9\uc0c1"}),(0,o.jsx)("th",{children:"\uc120\ud638\ube0c\ub79c\ub4dc"}),(0,o.jsx)("th",{children:"\ucd5c\uadfc\uc811\uc18d\uc77c"})]})}),(0,o.jsx)("tbody",{children:t.map((e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.no}),(0,o.jsx)("td",{children:e.status}),(0,o.jsx)("td",{children:e.memberType}),(0,o.jsx)(i,{onClick:()=>r(e.no),children:e.email}),(0,o.jsx)("td",{children:e.nickname}),(0,o.jsx)("td",{children:e.birthdate}),(0,o.jsx)("td",{children:e.preferredColors.join(", ")}),(0,o.jsx)("td",{children:e.preferredBrands.join(", ")}),(0,o.jsx)("td",{children:new Date(e.lastLogin).toLocaleDateString()})]},e.no)))})]})},l=n.Ay.table`
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
`,i=n.Ay.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`},576:(e,t,r)=>{r.d(t,{A:()=>s});r(43);var n=r(464),o=r(579);const s=e=>{let{page:t,setPage:r}=e;return(0,o.jsxs)(l,{children:[(0,o.jsx)(i,{disabled:1===t,onClick:()=>r(t-1),children:"\xab"}),(0,o.jsx)(i,{children:t}),(0,o.jsx)(i,{onClick:()=>r(t+1),children:"\xbb"})]})},l=n.Ay.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`,i=n.Ay.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`},854:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(43),o=r(216),s=r(464),l=r(170),i=r(446),a=r(580),d=r(507),c=r(576),h=r(579);const x=()=>{const e=(0,o.Zp)(),[t,r]=(0,n.useState)(""),[x,j]=(0,n.useState)("email"),[f,b]=(0,n.useState)([]),[y,w]=(0,n.useState)(0),[v,k]=(0,n.useState)(1),[A]=(0,n.useState)(10);(0,n.useEffect)((()=>{(async()=>{try{const e=await(0,i.o)(v,A);b(e.users||[]),w(e.total||0)}catch(e){console.error("Error fetching user list:",e)}})()}),[v,A]);const $=f.filter((e=>"email"===x?e.email.toLowerCase().includes(t.toLowerCase()):"nickname"===x?e.nickname.toLowerCase().includes(t.toLowerCase()):"status"===x?e.status.toLowerCase().includes(t.toLowerCase()):e));return(0,h.jsx)(s.NP,{theme:l.A,children:(0,h.jsxs)(p,{children:[(0,h.jsx)(a.A,{title:"\ud68c\uc6d0 \ubaa9\ub85d",searchType:x,setSearchType:j,searchTerm:t,setSearchTerm:r}),(0,h.jsxs)(u,{children:[(0,h.jsxs)(m,{children:["\ucd1d ",y,"\uba85"]}),(0,h.jsx)(d.A,{filteredData:$,handleEdit:t=>{e(`/user/admin${t}`)}}),(0,h.jsx)(g,{onClick:()=>{e("/user/adminnew")},children:"\uc2e0\uaddc \ub4f1\ub85d"}),(0,h.jsx)(c.A,{page:v,setPage:k,total:y,limit:A})]})]})})},p=s.Ay.div`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
`,u=s.Ay.div`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  padding: 20px;
  overflow-x: auto;
`,m=s.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  margin-bottom: 10px;
  text-align: left;
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
`,g=s.Ay.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
`}}]);
//# sourceMappingURL=854.1a287810.chunk.js.map