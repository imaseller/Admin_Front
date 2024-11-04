"use strict";(self.webpackChunkmelpik_admin=self.webpackChunkmelpik_admin||[]).push([[893],{893:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(43),i=r(216),o=r(464),l=r(170),s=r(579);const d=()=>{const e=(0,i.Zp)(),{no:t}=(0,i.g)(),[r,d]=(0,n.useState)({productName:"\ud22c\uc778\uc6d0 \uc2a4\ud2b8\ub77c\uc774\ud504 \uc6d0\ud53c\uc2a4",brand:"MAJE",rating:5,usagePeriod:"2024.06.04 - 2024.06.07",size:"66(L)",color:"Blue",content:"\uc798 \uc785\uc5c8\uc5b4\uc694.",exposure:"\uacf5\uac1c"});return(0,s.jsx)(o.NP,{theme:l.A,children:(0,s.jsxs)(a,{children:[(0,s.jsx)(h,{children:(0,s.jsx)(c,{children:"\uc0ac\uc6a9\ud6c4\uae30 \uc0c1\uc138"})}),(0,s.jsxs)(x,{children:[(0,s.jsx)(p,{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)(u,{children:"\uc81c\ud488\uba85"}),(0,s.jsx)(m,{children:r.productName}),(0,s.jsx)(u,{children:"\ube0c\ub79c\ub4dc"}),(0,s.jsx)(m,{children:r.brand})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)(u,{children:"\ud3c9\uac00"}),(0,s.jsx)(m,{children:r.rating}),(0,s.jsx)(u,{children:"\uc774\uc6a9\uae30\uac04"}),(0,s.jsx)(m,{children:r.usagePeriod})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)(u,{children:"\uc0ac\uc774\uc988"}),(0,s.jsx)(m,{children:r.size}),(0,s.jsx)(u,{children:"\uc0c9\uc0c1"}),(0,s.jsx)(m,{children:r.color})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)(u,{children:"\ub0b4\uc6a9"}),(0,s.jsx)(m,{colSpan:3,children:(0,s.jsx)(b,{value:r.content,onChange:e=>d({...r,content:e.target.value})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)(u,{children:"\ube44\uacf5\uac1c\uc5ec\ubd80"}),(0,s.jsx)(m,{colSpan:3,children:(0,s.jsxs)(f,{children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"radio",value:"\uacf5\uac1c",checked:"\uacf5\uac1c"===r.exposure,onChange:e=>d({...r,exposure:e.target.value})}),"\uacf5\uac1c"]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{type:"radio",value:"\ube44\uacf5\uac1c",checked:"\ube44\uacf5\uac1c"===r.exposure,onChange:e=>d({...r,exposure:e.target.value})}),"\ube44\uacf5\uac1c"]})]})})]})]})}),(0,s.jsxs)(g,{children:[(0,s.jsx)(j,{onClick:()=>{console.log("\uc800\uc7a5\ud558\uae30")},children:"\uc800\uc7a5\ud558\uae30"}),(0,s.jsx)(j,{onClick:()=>{e("/admin/reviewlist")},children:"\uc800\uc7a5\ucde8\uc18c"})]})]})]})})},a=o.Ay.div`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  flex: 1;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    font-size: 14px;
  }

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    font-size: 16px;
  }

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    font-size: 18px;
  }
`,h=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown5}};
`,c=o.Ay.h1`
  ${e=>{let{theme:t}=e;return t.fonts.heading}};
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
  font-size: ${e=>{let{theme:t}=e;return t.fonts.heading.fontSize}};

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
    font-size: 22px;
  }

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    font-size: 26px;
  }

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
    font-size: 28px;
  }
`,x=o.Ay.div`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  padding: 20px;
`,p=o.Ay.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
    text-align: center;
    font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};

    @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobile}}) {
      font-size: 12px;
    }

    @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
      font-size: 14px;
    }

    @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
      font-size: 16px;
    }
  }

  th {
    background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown1}};
  }
`,u=o.Ay.th`
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown1}};
`,m=o.Ay.td``,b=o.Ay.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.gray}};
  border-radius: 4px;
  resize: none;
`,f=o.Ay.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }
`,g=o.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,j=o.Ay.button`
  margin-left: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown4}};
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  border: none;
  border-radius: 4px;
  font-size: ${e=>{let{theme:t}=e;return t.fonts.default.fontSize}};

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown5}};
  }

  &:active {
    background-color: ${e=>{let{theme:t}=e;return t.colors.WhiteBrown6}};
  }
`}}]);
//# sourceMappingURL=893.8d055bee.chunk.js.map