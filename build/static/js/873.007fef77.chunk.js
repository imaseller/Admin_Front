"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[873],{185:(e,r,t)=>{t.d(r,{L:()=>a});var n=t(213);t(880);const a=n.A.create({baseURL:"https://api.stylewh.com",withCredentials:!0});a.interceptors.response.use((e=>e),(async e=>(window.location.pathname,Promise.reject(e))))},530:(e,r,t)=>{t.d(r,{P:()=>a});var n=t(185);const a=async e=>{try{return(await n.L.delete(`/admin/${e}`)).data}catch(r){throw console.error("Error deleting admin:",r),r}}},873:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t(43),a=t(216),o=t(464),i=t(170),s=t(185);var l=t(530),c=t(579);const d=()=>{const{id:e}=(0,a.g)(),r=(0,a.Zp)(),[t,d]=(0,n.useState)({"\uc544\uc774\ub514":"","\ube44\ubc00\ubc88\ud638":"","\ube44\ubc00\ubc88\ud638\ud655\uc778":"","\uc774\uba54\uc77c":"","\uc774\ub984":"","\uad8c\ud55c\ub4f1\uae09":"admin","\uc0c1\ud0dc":"active"}),[W,E]=(0,n.useState)("");(0,n.useEffect)((()=>{if("create"!==e){const r=async()=>{try{const r=await(async e=>{try{return(await s.L.get(`/admin/${e}`)).data}catch(W){if(W.response&&404===W.response.status)return console.error(`Admin not found with id ${e}`),{statusCode:404,message:"Admin not found",error:"Not Found"};throw console.error(`Error fetching admin with id ${e}:`,W),W}})(e);404===r.statusCode?E("\uad00\ub9ac\uc790\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):d({"\uc544\uc774\ub514":r.id,"\uc774\uba54\uc77c":r.email,"\uc774\ub984":r.name||"","\uad8c\ud55c\ub4f1\uae09":r.role,"\uc0c1\ud0dc":"active"===r.status?"\uc815\uc0c1":"\ube14\ub7ed"})}catch(W){E("\uad00\ub9ac\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}};r()}}),[e]);const L=e=>{const{name:r,value:t}=e.target;d((e=>({...e,[r]:t})))},z=()=>{r("/admin")};return W?(0,c.jsx)(h,{children:W}):(0,c.jsx)(o.NP,{theme:i.A,children:(0,c.jsxs)(x,{children:[(0,c.jsx)(p,{children:"create"===e?"\uad00\ub9ac\uc790 \ub4f1\ub85d":"\uad00\ub9ac\uc790 \uc218\uc815"}),(0,c.jsxs)(u,{children:[(0,c.jsxs)(m,{children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\uc544\uc774\ub514:"}),(0,c.jsx)(w,{type:"text",name:"\uc544\uc774\ub514",value:t.\uc544\uc774\ub514,onChange:L,disabled:"create"!==e})]}),(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\uc774\ub984:"}),(0,c.jsx)(w,{type:"text",name:"\uc774\ub984",value:t.\uc774\ub984,onChange:L})]}),(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\ube44\ubc00\ubc88\ud638:"}),(0,c.jsx)(w,{type:"password",name:"\ube44\ubc00\ubc88\ud638",value:t.\ube44\ubc00\ubc88\ud638,onChange:L,disabled:"create"!==e})]}),(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778:"}),(0,c.jsx)(w,{type:"password",name:"\ube44\ubc00\ubc88\ud638\ud655\uc778",value:t.\ube44\ubc00\ubc88\ud638\ud655\uc778,onChange:L,disabled:"create"!==e})]}),(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\uc774\uba54\uc77c:"}),(0,c.jsx)(w,{type:"email",name:"\uc774\uba54\uc77c",value:t.\uc774\uba54\uc77c,onChange:L})]})]}),(0,c.jsxs)(y,{children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\uad8c\ud55c\ub4f1\uae09:"}),(0,c.jsxs)(b,{name:"\uad8c\ud55c\ub4f1\uae09",value:t.\uad8c\ud55c\ub4f1\uae09,onChange:L,children:[(0,c.jsx)("option",{value:"admin",children:"\uc2dc\uc2a4\ud15c \uad00\ub9ac\uc790"}),(0,c.jsx)("option",{value:"service_admin",children:"\uc11c\ube44\uc2a4 \uad00\ub9ac\uc790"})]})]}),(0,c.jsxs)(g,{children:[(0,c.jsx)(j,{children:"\uc0c1\ud0dc:"}),(0,c.jsxs)(f,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(k,{type:"radio",name:"\uc0c1\ud0dc",value:"\uc815\uc0c1",checked:"\uc815\uc0c1"===t.\uc0c1\ud0dc,onChange:L}),"\uc815\uc0c1"]}),(0,c.jsxs)(v,{children:[(0,c.jsx)(k,{type:"radio",name:"\uc0c1\ud0dc",value:"\ube14\ub7ed",checked:"\ube14\ub7ed"===t.\uc0c1\ud0dc,onChange:L}),"\ube14\ub7ed"]})]})]})]})]}),(0,c.jsxs)($,{children:[(0,c.jsx)(A,{onClick:z,children:"\ubaa9\ub85d\ubcf4\uae30"}),(0,c.jsxs)(C,{children:[(0,c.jsx)(B,{onClick:async()=>{if(t.\ube44\ubc00\ubc88\ud638===t.\ube44\ubc00\ubc88\ud638\ud655\uc778)try{if("create"===e){await(async e=>{try{return(await s.L.post("/admin",e)).data}catch(W){throw console.error("Error creating admin:",W),W}})({id:t.\uc544\uc774\ub514,password:t.\ube44\ubc00\ubc88\ud638,email:t.\uc774\uba54\uc77c,name:t.\uc774\ub984,role:t.\uad8c\ud55c\ub4f1\uae09,status:"\uc815\uc0c1"===t.\uc0c1\ud0dc?"active":"blocked"});r("/admin")}else await(async(e,r)=>{try{return(await s.L.put(`/admin/${e}`,r)).data}catch(W){throw W.response&&404===W.response.status?(console.error(`Admin not found with id ${e}`),new Error("\uad00\ub9ac\uc790\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")):(console.error(`Error updating admin with id ${e}:`,W),W)}})(e,{email:t.\uc774\uba54\uc77c,role:t.\uad8c\ud55c\ub4f1\uae09,status:"\uc815\uc0c1"===t.\uc0c1\ud0dc?"active":"blocked"}),alert("\uad00\ub9ac\uc790\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),r(`/admin/${e}`)}catch(W){E("\uc5b4\ub4dc\ubbfc\uc744 \uc800\uc7a5\ud558\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}else E("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")},children:"create"===e?"\uc800\uc7a5\ud558\uae30":"\uc218\uc815\ud558\uae30"}),"create"!==e&&(0,c.jsx)(B,{onClick:async()=>{try{await(0,l.P)(t.\uc544\uc774\ub514),alert("\uad00\ub9ac\uc790\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),r("/admin")}catch(W){E("\uc5b4\ub4dc\ubbfc\uc744 \uc0ad\uc81c\ud558\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\uc0ad\uc81c\ud558\uae30"}),(0,c.jsx)(B,{onClick:z,children:"\uc800\uc7a5\ucde8\uc18c"})]})]})]})})},h=o.Ay.div`
  color: red;
  font-size: 16px;
  margin: 20px;
`,x=o.Ay.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`,p=o.Ay.h2`
  margin-bottom: 20px;
  color: ${e=>{let{theme:r}=e;return r.colors.black}};
`,u=o.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.gray}};
  background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown1}};
`,m=o.Ay.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,y=o.Ay.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,g=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,j=o.Ay.label`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.colors.black}};
  min-width: 120px;
`,w=o.Ay.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.gray}};
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`,b=o.Ay.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.gray}};
  border-radius: 4px;
  max-width: 300px;
`,f=o.Ay.div`
  display: flex;
  gap: 20px;
`,v=o.Ay.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.colors.black}};
`,k=o.Ay.input`
  margin-right: 5px;
`,$=o.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`,A=o.Ay.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown4}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown5}};
  }

  &:active {
    background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown6}};
  }
`,C=o.Ay.div`
  display: flex;
  gap: 20px;
`,B=o.Ay.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown4}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown5}};
  }

  &:active {
    background-color: ${e=>{let{theme:r}=e;return r.colors.WhiteBrown6}};
  }
`}}]);
//# sourceMappingURL=873.007fef77.chunk.js.map