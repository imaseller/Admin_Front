"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[335],{335:(e,n,l)=>{l.r(n),l.d(n,{default:()=>c});var r=l(43),o=l(216),i=l(464),t=l(170),a=l(579);const s=[{no:5017,status:"\uc778\uc99d\uc644\ub8cc",memberType:"\uc77c\ubc18\ud68c\uc6d0",email:"jyoonlee411@naver.com",nickname:"\uc724\uc544\uc544\uc57c",birthday:"2003-04-11",color:"Black",brand:"MOJO.S.PHINE",lastLogin:"2024.08.02"}],c=()=>{const{seq:e}=(0,o.g)(),[n,l]=(0,r.useState)("tab_delivery"),c=e=>{l(e)},J=(0,o.Zp)(),[z,W]=(0,r.useState)({email:"",password:"",confirmPassword:"",nickname:"",birthday:"",color:"",brand:"",sizeOnePieceSeq:"",sizeJacketSeq:"",sizeCoatSeq:"",status:"",event:"agree",memberType:""});(0,r.useEffect)((()=>{const n=s.find((n=>n.no.toString()===e));n&&W({email:n.email,nickname:n.nickname,birthday:n.birthday,color:n.color,brand:n.brand,sizeOnePieceSeq:"",sizeJacketSeq:"",sizeCoatSeq:"",status:n.status,memberType:n.memberType,event:"agree"})}),[e]);const Y=e=>{const{name:n,value:l}=e.target;W((e=>({...e,[n]:l})))};return(0,a.jsx)(i.NP,{theme:t.A,children:(0,a.jsxs)(d,{children:[(0,a.jsx)(h,{children:"\ud68c\uc6d0 \uc0c1\uc138\uc815\ubcf4"}),(0,a.jsxs)(x,{children:[(0,a.jsxs)(p,{children:[(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uacc4\uc815(\uc774\uba54\uc77c):"}),(0,a.jsx)(y,{type:"email",name:"email",value:z.email,readOnly:!0})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\ub2c9\ub124\uc784:"}),(0,a.jsxs)(m,{children:[(0,a.jsx)(b,{type:"text",name:"nickname",value:z.nickname,onChange:Y}),(0,a.jsx)(I,{onClick:()=>{alert("\uc911\ubcf5\uccb4\ud06c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc138\uc694.")},children:"\uc911\ubcf5\uccb4\ud06c"})]})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\ube44\ubc00\ubc88\ud638:"}),(0,a.jsx)(b,{type:"password",name:"password",value:z.password,onChange:Y})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uc7ac\ud655\uc778:"}),(0,a.jsx)(b,{type:"password",name:"confirmPassword",value:z.confirmPassword,onChange:Y})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uc774\ubca4\ud2b8\uc218\uc2e0\uc5ec\ubd80:"}),(0,a.jsxs)(k,{children:[(0,a.jsxs)(S,{children:[(0,a.jsx)(N,{type:"radio",name:"event",value:"agree",checked:"agree"===z.event,onChange:Y}),"\ub3d9\uc758"]}),(0,a.jsxs)(S,{children:[(0,a.jsx)(N,{type:"radio",name:"event",value:"disagree",checked:"disagree"===z.event,onChange:Y}),"\ubbf8\ub3d9\uc758"]})]})]})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uc0dd\uc77c:"}),(0,a.jsx)(b,{type:"date",name:"birthday",value:z.birthday,onChange:Y})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uc120\ud638\uc0c9\uc0c1:"}),(0,a.jsxs)(g,{name:"color",value:z.color,onChange:Y,children:[(0,a.jsx)("option",{value:"Black",children:"Black"}),(0,a.jsx)("option",{value:"White",children:"White"}),(0,a.jsx)("option",{value:"Pink",children:"Pink"}),(0,a.jsx)("option",{value:"Navy",children:"Navy"}),(0,a.jsx)("option",{value:"Green",children:"Green"}),(0,a.jsx)("option",{value:"Blue",children:"Blue"}),(0,a.jsx)("option",{value:"Cream",children:"Cream"}),(0,a.jsx)("option",{value:"Yellow",children:"Yellow"}),(0,a.jsx)("option",{value:"Lilac",children:"Lilac"}),(0,a.jsx)("option",{value:"Ivory",children:"Ivory"}),(0,a.jsx)("option",{value:"Olive",children:"Olive"}),(0,a.jsx)("option",{value:"Orange",children:"Orange"}),(0,a.jsx)("option",{value:"Mint",children:"Mint"}),(0,a.jsx)("option",{value:"Grey",children:"Grey"}),(0,a.jsx)("option",{value:"Camel",children:"Camel"}),(0,a.jsx)("option",{value:"Beige",children:"Beige"}),(0,a.jsx)("option",{value:"Red",children:"Red"}),(0,a.jsx)("option",{value:"Sky Blue",children:"Sky Blue"}),(0,a.jsx)("option",{value:"Purple",children:"Purple"}),(0,a.jsx)("option",{value:"Nude",children:"Nude"}),(0,a.jsx)("option",{value:"Khaki",children:"Khaki"}),(0,a.jsx)("option",{value:"Wine",children:"Wine"}),(0,a.jsx)("option",{value:"Brown",children:"Brown"}),(0,a.jsx)("option",{value:"Charcoal",children:"Charcoal"})]})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uc120\ud638\ube0c\ub79c\ub4dc:"}),(0,a.jsxs)(g,{name:"brand",value:z.brand,onChange:Y,children:[(0,a.jsx)("option",{value:"MOJO.S.PHINE",children:"MOJO.S.PHINE"}),(0,a.jsx)("option",{value:"S_Blanc",children:"S_Blanc"}),(0,a.jsx)("option",{value:"CC Collect",children:"CC Collect"}),(0,a.jsx)("option",{value:"Tuo",children:"Tuo"}),(0,a.jsx)("option",{value:"Elunani",children:"Elunani"}),(0,a.jsx)("option",{value:"Billz",children:"Billz"}),(0,a.jsx)("option",{value:"Clair De Lune",children:"Clair De Lune"}),(0,a.jsx)("option",{value:"LUCHA",children:"LUCHA"}),(0,a.jsx)("option",{value:"DOUCAN",children:"DOUCAN"}),(0,a.jsx)("option",{value:"Lazyna",children:"Lazyna"}),(0,a.jsx)("option",{value:"DAYW",children:"DAYW"}),(0,a.jsx)("option",{value:"CADELL",children:"CADELL"}),(0,a.jsx)("option",{value:"Mujatzz",children:"Mujatzz"}),(0,a.jsx)("option",{value:"Mark de niel",children:"Mark de niel"}),(0,a.jsx)("option",{value:"LINE",children:"LINE"}),(0,a.jsx)("option",{value:"MINIMUM",children:"MINIMUM"}),(0,a.jsx)("option",{value:"JILL BY JILLSTUART",children:"JILL BY JILLSTUART"}),(0,a.jsx)("option",{value:"MINE",children:"MINE"}),(0,a.jsx)("option",{value:"ZOOC",children:"ZOOC"}),(0,a.jsx)("option",{value:"O\u02d92nd",children:"O\u02d92nd"}),(0,a.jsx)("option",{value:"MAJE",children:"MAJE"}),(0,a.jsx)("option",{value:"SJYP",children:"SJYP"}),(0,a.jsx)("option",{value:"L\xc4TT BY T",children:"L\xc4TT BY T"}),(0,a.jsx)("option",{value:"TIME",children:"TIME"}),(0,a.jsx)("option",{value:"DECO",children:"DECO"}),(0,a.jsx)("option",{value:"OLIVE DES OLIVE",children:"OLIVE DES OLIVE"}),(0,a.jsx)("option",{value:"STUDIO TOMBOY",children:"STUDIO TOMBOY"}),(0,a.jsx)("option",{value:"SANDRO",children:"SANDRO"}),(0,a.jsx)("option",{value:"RENEEVON",children:"RENEEVON"}),(0,a.jsx)("option",{value:"SISLEY",children:"SISLEY"}),(0,a.jsx)("option",{value:"S\u02d9SOLEZIA",children:"S\u02d9SOLEZIA"}),(0,a.jsx)("option",{value:"it MICHAA",children:"it MICHAA"}),(0,a.jsx)("option",{value:"MICHAA",children:"MICHAA"}),(0,a.jsx)("option",{value:"SATIN",children:"SATIN"}),(0,a.jsx)("option",{value:"G-CUT",children:"G-CUT"}),(0,a.jsx)("option",{value:"KENNETHLADY",children:"KENNETHLADY"}),(0,a.jsx)("option",{value:"LYNN",children:"LYNN"}),(0,a.jsx)("option",{value:"EGOIST",children:"EGOIST"}),(0,a.jsx)("option",{value:"DEW L",children:"DEW L"}),(0,a.jsx)("option",{value:"THE IZZAT",children:"THE IZZAT"}),(0,a.jsx)("option",{value:"JJ JIGOTT",children:"JJ JIGOTT"}),(0,a.jsx)("option",{value:"THE IZZAT Collection",children:"THE IZZAT Collection"}),(0,a.jsx)("option",{value:"JIGOTT",children:"JIGOTT"}),(0,a.jsx)("option",{value:"CLUBMONACO",children:"CLUBMONACO"}),(0,a.jsx)("option",{value:"SJSJ",children:"SJSJ"}),(0,a.jsx)("option",{value:"SYSTEM",children:"SYSTEM"})]})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uc0ac\uc774\uc988:"}),(0,a.jsxs)(C,{children:[(0,a.jsxs)(A,{name:"sizeOnePieceSeq",value:z.sizeOnePieceSeq,onChange:Y,children:[(0,a.jsx)("option",{value:"",children:"\uc6d0\ud53c\uc2a4(\uc120\ud0dd)"}),(0,a.jsx)("option",{value:"201",children:"44(S)"}),(0,a.jsx)("option",{value:"202",children:"55(M)"}),(0,a.jsx)("option",{value:"203",children:"66(L)"}),(0,a.jsx)("option",{value:"210",children:"Free"})]}),(0,a.jsxs)(A,{name:"sizeJacketSeq",value:z.sizeJacketSeq,onChange:Y,children:[(0,a.jsx)("option",{value:"",children:"\uc815(\uc120\ud0dd)"}),(0,a.jsx)("option",{value:"201",children:"44(S)"}),(0,a.jsx)("option",{value:"202",children:"55(M)"}),(0,a.jsx)("option",{value:"203",children:"66(L)"}),(0,a.jsx)("option",{value:"210",children:"Free"})]}),(0,a.jsxs)(A,{name:"sizeCoatSeq",value:z.sizeCoatSeq,onChange:Y,children:[(0,a.jsx)("option",{value:"",children:"\uc544\uc6b0\ud130(\uc120\ud0dd)"}),(0,a.jsx)("option",{value:"201",children:"44(S)"}),(0,a.jsx)("option",{value:"202",children:"55(M)"}),(0,a.jsx)("option",{value:"203",children:"66(L)"}),(0,a.jsx)("option",{value:"210",children:"Free"})]})]})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\uacc4\uc815\uc0c1\ud0dc:"}),(0,a.jsxs)(g,{name:"status",value:z.status,onChange:Y,children:[(0,a.jsx)("option",{value:"\uc778\uc99d\ub300\uae30",children:"\uc778\uc99d\ub300\uae30"}),(0,a.jsx)("option",{value:"\uc778\uc99d\uc644\ub8cc",children:"\uc778\uc99d\uc644\ub8cc"}),(0,a.jsx)("option",{value:"\uacc4\uc815\uc7a0\uae40",children:"\uacc4\uc815\uc7a0\uae40"}),(0,a.jsx)("option",{value:"\ud0c8\ud1f4\uc644\ub8cc",children:"\ud0c8\ud1f4\uc644\ub8cc"})]})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"\ud68c\uc6d0\ud0c0\uc785:"}),(0,a.jsxs)(g,{name:"memberType",value:z.memberType,onChange:Y,children:[(0,a.jsx)("option",{value:"\uc77c\ubc18\ud68c\uc6d0",children:"\uc77c\ubc18\ud68c\uc6d0"}),(0,a.jsx)("option",{value:"\uba64\ubc84",children:"\uba64\ubc84"}),(0,a.jsx)("option",{value:"\ub2e8\uace8",children:"\ub2e8\uace8"}),(0,a.jsx)("option",{value:"KFBA",children:"KFBA"})]})]})]})]}),(0,a.jsxs)(O,{children:[(0,a.jsx)(T,{onClick:()=>J("/admin/memberlist"),children:"\ubaa9\ub85d\ubcf4\uae30"}),(0,a.jsxs)(w,{children:[(0,a.jsx)(E,{onClick:()=>{J("/admin/memberlist")},children:"\uc800\uc7a5\ud558\uae30"}),(0,a.jsx)(E,{onClick:()=>{J("/admin/memberlist")},children:"\uc800\uc7a5\ucde8\uc18c"})]})]}),(0,a.jsxs)(f,{children:[(0,a.jsx)(B,{className:"tab_delivery"===n?"active":"",onClick:()=>c("tab_delivery"),children:"\ubc30\uc1a1\uc9c0 \uc815\ubcf4"}),(0,a.jsx)(B,{className:"tab_review"===n?"active":"",onClick:()=>c("tab_review"),children:"\uc0ac\uc6a9\ud6c4\uae30"}),(0,a.jsx)(B,{className:"tab_hook"===n?"active":"",onClick:()=>c("tab_hook"),children:"\uac78\uc5b4\ub450\uae30"}),(0,a.jsx)(B,{className:"tab_point"===n?"active":"",onClick:()=>c("tab_point"),children:"\ud3ec\uc778\ud2b8 \ub0b4\uc5ed"}),(0,a.jsx)(B,{className:"tab_history"===n?"active":"",onClick:()=>c("tab_history"),children:"\uc774\uc6a9 \ub0b4\uc5ed"})]}),(0,a.jsxs)(M,{children:["tab_delivery"===n&&(0,a.jsx)($,{children:(0,a.jsxs)(L,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"text-center",children:"#"}),(0,a.jsx)("th",{className:"text-center",children:"\ubc30\uc1a1\uc790\uba85"}),(0,a.jsx)("th",{className:"text-center",children:"\uc218\ub839\uc778"}),(0,a.jsx)("th",{className:"text-center",children:"\uc8fc\uc18c"}),(0,a.jsx)("th",{className:"text-center",children:"\uc5f0\ub77d\ucc98"}),(0,a.jsx)("th",{className:"text-center",children:"\uc5f0\ub77d\ucc982"}),(0,a.jsx)("th",{className:"text-center",children:"\uae30\ubcf8\uc124\uc815"})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:"1"}),(0,a.jsx)("td",{className:"text-center",children:"\uc544\ud06c\ub85c\ub9ac\ubc84"}),(0,a.jsx)("td",{className:"text-center",children:"\uc774\ub2e4\uc9c0"}),(0,a.jsx)("td",{className:"text-center",children:"\uc11c\uc6b8 \uc11c\ucd08\uad6c \uac15\ub0a8\ub300\ub85c 159 102\ub3d9 1103\ud638 (06508)"}),(0,a.jsx)("td",{className:"text-center",children:"01027374912"}),(0,a.jsx)("td",{className:"text-center",children:"01037583875"}),(0,a.jsx)("td",{className:"text-center",children:"Y"})]})})]})}),"tab_review"===n&&(0,a.jsx)($,{}),"tab_hook"===n&&(0,a.jsx)($,{}),"tab_point"===n&&(0,a.jsx)($,{}),"tab_history"===n&&(0,a.jsx)($,{})]})]})})},d=i.Ay.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`,h=i.Ay.h2`
  margin-bottom: 20px;
  color: ${e=>{let{theme:n}=e;return n.colors.black}};
`,x=i.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
  background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown1}};
`,p=i.Ay.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,u=i.Ay.div`
  flex: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,j=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,v=i.Ay.label`
  font-size: 14px;
  color: ${e=>{let{theme:n}=e;return n.colors.black}};
  min-width: 120px;
`,m=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`,b=i.Ay.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`,y=(0,i.Ay)(b)`
  background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown1}};
`,g=i.Ay.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
  border-radius: 4px;
  max-width: 300px;
`,C=i.Ay.div`
  display: flex;
  gap: 10px;
  flex: 1;
`,A=i.Ay.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
  border-radius: 4px;
  flex: 1;
  max-width: 300px;
`,k=i.Ay.div`
  display: flex;
  gap: 20px;
`,S=i.Ay.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${e=>{let{theme:n}=e;return n.colors.black}};
`,N=i.Ay.input`
  margin-right: 5px;
`,O=i.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`,T=i.Ay.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown4}};
  color: ${e=>{let{theme:n}=e;return n.colors.white}};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown5}};
  }

  &:active {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown6}};
  }
`,w=i.Ay.div`
  display: flex;
  gap: 20px;
`,E=i.Ay.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown4}};
  color: ${e=>{let{theme:n}=e;return n.colors.white}};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown5}};
  }

  &:active {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown6}};
  }
`,I=i.Ay.button`
  padding: 5px 10px;
  min-width: 80px;
  cursor: pointer;
  background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown4}};
  color: ${e=>{let{theme:n}=e;return n.colors.white}};
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown5}};
  }

  &:active {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown6}};
  }
`,L=i.Ay.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: ${e=>{let{theme:n}=e;return n.colors.white}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
  }

  th {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown4}};
    color: ${e=>{let{theme:n}=e;return n.colors.white}};
  }

  tr:hover {
    background-color: ${e=>{let{theme:n}=e;return n.colors.WhiteBrown2}};
  }
`,f=i.Ay.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 20px 0;
  padding: 0;
  border-bottom: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
`,B=i.Ay.li`
  text-decoration: none;
  color: ${e=>{let{theme:n}=e;return n.colors.black}};
  font-size: 14px;
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: 2px solid transparent;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${e=>{let{theme:n}=e;return n.colors.primary}};
  }

  &:hover {
    color: ${e=>{let{theme:n}=e;return n.colors.gray}};
  }
`,M=i.Ay.div`
  padding: 20px;
  border: 1px solid ${e=>{let{theme:n}=e;return n.colors.gray}};
  background-color: ${e=>{let{theme:n}=e;return n.colors.white}};
`,$=i.Ay.div`
  display: none;

  &.active {
    display: block;
  }
`}}]);
//# sourceMappingURL=335.fae994cf.chunk.js.map