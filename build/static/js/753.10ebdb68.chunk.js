"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[753],{753:(e,l,a)=>{a.r(l),a.d(l,{default:()=>p});var i=a(43),r=a(216),n=a(464),t=a(170),s=a(579);const d=[{id:806,productName:"\ub2c8\ud2b8 \ubc30\uc0c9 \ubca8\ud2f0\ub4dc \uc9d1\uc5c5 \uc6d0\ud53c\uc2a4",brand:"ZOOC",category:"\uc6d0\ud53c\uc2a4",color:"Cream",size:"44(S)-0 / 55(M)-1 / 66(L)-1 / Free-0",priceRetail:"384,300",rentPrice3:"40,000",rentPrice5:"55,000",material:"\uac89\uac10: \uba74 53% \ub098\uc77c\ub860 41% \ud3f4\ub9ac\uc6b0\ub808\ud0c4 6% \uc548\uac10:\ud3f4\ub9ac\uc5d0\uc2a4\ud130100%",thickness:"\uc801\ub2f9",elasticity:"\uc57d\uac04\uc788\uc74c",lining:"\uc548\uac10\uc5c6\uc74c",texture:"\uc801\ub2f9",transparency:"\ube44\uce68\uc5c6\uc74c",realSize:{"44(S)":{A:0,B:0,C:0,D:0,E:0},"55(M)":{A:37,B:90,C:66,D:60,E:113},"66(L)":{A:39,B:94,C:70,D:62,E:115}},quantity:{"44(S)":0,"55(M)":1,"66(L)":1,Free:0},review:{video:"",image:""},thumbnail:"/image.do?dir=item&img=20230411175710_2669.jpg",productNumber:"Z231MSE013",description:"\uac00\uc2b4\ubd80\ud130 \ud5c8\ub9ac\uae4c\uc9c0 \ubc34\ub529\uc18c\uc7ac\ub85c \ub418\uc5b4\uc788\ub294 \uce90\uc8fc\uc5bc\ud55c \uc81c\ud488\uc785\ub2c8\ub2e4.",useSeason:["\ubd04","\uac00\uc744","\uaca8\uc6b8"],status:"\uc2dc\uc98c\uc0c1\ud488",useYn:"N",registerDate:"2023.04.11"}],x=[{value:"58",label:"S_Blanc"},{value:"57",label:"CC Collect"},{value:"56",label:"Tuo"}],c=[{value:"C01",label:"\uc758\ub958"},{value:"C02",label:"\uc6e8\ub529"},{value:"C03",label:"\uc8fc\uc5bc\ub9ac"},{value:"C04",label:"\uac00\ubc29"}],h=[{value:"300",label:"\uc6d0\ud53c\uc2a4"},{value:"303",label:"\ud22c\ud53c\uc2a4"},{value:"304",label:"\uc0c1\uc758"},{value:"305",label:"\ud558\uc758"},{value:"301",label:"\uc815\uc7a5"},{value:"302",label:"\uc544\uc6b0\ud130"}],o=["\ubd04","\uc5ec\ub984","\uac00\uc744","\uaca8\uc6b8"],p=()=>{const{id:e}=(0,r.g)(),[l,a]=(0,i.useState)(null);(0,i.useEffect)((()=>{const l=d.find((l=>l.id.toString()===e));a(l)}),[e]);const p=e=>{const{name:l,value:i}=e.target;a((e=>({...e,[l]:i})))},E=(e,l)=>{a((a=>({...a,[e]:a[e]===l?"":l})))};return l?(0,s.jsx)(n.NP,{theme:t.A,children:(0,s.jsxs)(u,{children:[(0,s.jsx)(g,{children:"\uc81c\ud488 \uc0c1\uc138\uc815\ubcf4"}),(0,s.jsx)(j,{children:(0,s.jsxs)(m,{children:[(0,s.jsxs)(y,{children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc81c\ud488\uba85:"}),(0,s.jsx)(A,{type:"text",name:"productName",value:l.productName,onChange:p})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\ube0c\ub79c\ub4dc:"}),(0,s.jsx)(S,{name:"brand",value:l.brand,onChange:p,children:x.map((e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value)))})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\ubd84\ub958:"}),(0,s.jsx)(S,{name:"category",value:l.category,onChange:p,children:c.map((e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value)))}),(0,s.jsx)(N,{children:h.map((e=>(0,s.jsxs)($,{children:[(0,s.jsx)("input",{type:"checkbox",value:e.value,checked:l.category===e.value,onChange:()=>{return l=e.value,void a((e=>({...e,subCategory:e.subCategory===l?"":l})));var l}}),e.label]},e.value)))})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc6a9\ub3c4:"}),(0,s.jsx)(N,{children:o.map((e=>(0,s.jsxs)($,{children:[(0,s.jsx)("input",{type:"checkbox",value:e,checked:l.useSeason&&l.useSeason.includes(e),onChange:()=>(e=>{a((l=>({...l,useSeason:l.useSeason.includes(e)?l.useSeason.filter((l=>l!==e)):[...l.useSeason,e]})))})(e)}),e]},e)))})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc0c9\uc0c1:"}),(0,s.jsx)(A,{type:"text",name:"color",value:l.color,onChange:p})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uac00\uaca9:"}),(0,s.jsx)(A,{type:"text",name:"priceRetail",value:l.priceRetail,onChange:p,placeholder:"\ub9ac\ud14c\uc77c \uac00\uaca9"}),(0,s.jsx)(A,{type:"text",name:"rentPrice3",value:l.rentPrice3,onChange:p,placeholder:"3\ud68c \ub300\uc5ec \uac00\uaca9"}),(0,s.jsx)(A,{type:"text",name:"rentPrice5",value:l.rentPrice5,onChange:p,placeholder:"5\ud68c \ub300\uc5ec \uac00\uaca9"})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc81c\ud488\uc18c\uc7ac:"}),(0,s.jsx)(k,{name:"material",value:l.material,onChange:p})]})]}),(0,s.jsxs)(v,{children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc2e4\uce21\uc0ac\uc774\uc988:"}),(0,s.jsx)(P,{children:Object.entries(l.realSize).map((e=>{let[l,r]=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:l}),Object.entries(r).map((e=>{let[r,n]=e;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(C,{children:r}),(0,s.jsx)(w,{type:"number",value:n,onChange:e=>((e,l,i)=>{a((a=>({...a,realSize:{...a.realSize,[e]:{...a.realSize[e],[l]:i}}})))})(l,r,e.target.value)})]},r)}))]},l)}))})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc0ac\uc774\uc988 \uc218\ub7c9:"}),(0,s.jsx)(Y,{children:Object.entries(l.quantity).map((e=>{let[l,i]=e;return(0,s.jsxs)(z,{children:[(0,s.jsx)("span",{children:l}),(0,s.jsx)(w,{type:"number",value:i,onChange:e=>((e,l)=>{a((a=>({...a,quantity:{...a.quantity,[e]:l}})))})(l,e.target.value)})]},l)}))})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc81c\ud488\ub9ac\ubdf0:"}),(0,s.jsx)(D,{type:"file"}),(0,s.jsx)(O,{children:(0,s.jsx)("img",{src:l.review.image,alt:"\uc81c\ud488 \ub9ac\ubdf0 \uc774\ubbf8\uc9c0"})})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc81c\ud488\uc774\ubbf8\uc9c0:"}),(0,s.jsx)(D,{type:"file"}),(0,s.jsx)(O,{children:(0,s.jsx)("img",{src:l.thumbnail,alt:"\uc81c\ud488 \uc774\ubbf8\uc9c0"})})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\ub178\ucd9c\uc5ec\ubd80:"}),(0,s.jsxs)(N,{children:[(0,s.jsxs)($,{children:[(0,s.jsx)("input",{type:"checkbox",checked:"Y"===l.useYn,onChange:()=>E("useYn","Y")}),"\ub178\ucd9c"]}),(0,s.jsxs)($,{children:[(0,s.jsx)("input",{type:"checkbox",checked:"N"===l.useYn,onChange:()=>E("useYn","N")}),"\ube44\ub178\ucd9c"]})]})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc124\uba85:"}),(0,s.jsx)(k,{name:"description",value:l.description,onChange:p})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\uc0c1\ud0dc:"}),(0,s.jsx)(A,{type:"text",name:"status",value:l.status,onChange:p})]}),(0,s.jsxs)(b,{children:[(0,s.jsx)(f,{children:"\ub4f1\ub85d\uc77c:"}),(0,s.jsx)(A,{type:"text",name:"registerDate",value:l.registerDate,readOnly:!0})]})]})]})})]})}):(0,s.jsx)("div",{children:"\uc81c\ud488\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})},u=n.Ay.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`,g=n.Ay.h2`
  margin-bottom: 20px;
  color: ${e=>{let{theme:l}=e;return l.colors.black}};
`,j=n.Ay.div`
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${e=>{let{theme:l}=e;return l.colors.gray}};
  padding: 20px;
  background-color: ${e=>{let{theme:l}=e;return l.colors.white}};
`,m=n.Ay.div`
  display: flex;
  justify-content: space-between;
`,y=n.Ay.div`
  flex: 1;
  padding-right: 20px;
`,v=n.Ay.div`
  flex: 1;
  padding-left: 20px;
  border-left: 1px solid ${e=>{let{theme:l}=e;return l.colors.gray}};
`,b=n.Ay.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 820px;
`,f=n.Ay.label`
  font-weight: bold;
  margin-right: 10px;
  width: 150px;
  margin-bottom: 10px;
`,C=n.Ay.label`
  margin-right: 15px;
`,A=n.Ay.input`
  flex: 1;
  padding: 10px;
  max-width: 160px;
  border: 1px solid ${e=>{let{theme:l}=e;return l.colors.gray}};
`,w=n.Ay.input`
  width: 100px;
  margin-right: 5px;
  padding: 8px;
  border: 1px solid ${e=>{let{theme:l}=e;return l.colors.gray}};
`,S=n.Ay.select`
  flex: 1;
  max-width: 160px;
  padding: 10px;
  border: 1px solid ${e=>{let{theme:l}=e;return l.colors.gray}};
`,k=n.Ay.textarea`
  flex: 1;
  max-width: 525px;
  padding: 10px;
  border: 1px solid ${e=>{let{theme:l}=e;return l.colors.gray}};
  height: 120px;
`,N=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  label {
    margin-right: 10px;
    margin-bottom: 5px;
  }
  input {
    margin-right: 5px;
  }
`,$=n.Ay.label`
  display: flex;
  align-items: center;
  width: 120px;
`,P=n.Ay.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }
  span {
    width: 60px;
    margin-right: 10px;
  }
`,Y=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,z=n.Ay.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,D=n.Ay.input`
  margin-top: 10px;
`,O=n.Ay.div`
  margin-top: 10px;
  img {
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
  }
`}}]);
//# sourceMappingURL=753.10ebdb68.chunk.js.map