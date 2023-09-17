import{j as r,a as y}from"./vanilla-extract-dynamic.esm-f1ae3083.js";var _="var(--_18k3agd1)",j="_18k3agd3",b="var(--_18k3agd2)",f="var(--_18k3agd0)";const s=n=>{const{rows:t,columns:l,gap:d="",children:i,className:S,style:q,...B}=n;return r.jsx("div",{className:`${S} ${j}`,style:{...q,...y({[f]:t.toString(),[_]:l.toString(),[b]:d})},...B,children:i})};try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"number"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}}}}}catch{}const v={component:s,argTypes:{rows:{description:"열의 개수"},columns:{description:"행의 개수"},gap:{description:"각 행과 열 사이의 간격",defaultValue:{summary:"''"}}},args:{rows:4,columns:3,gap:"10px"}},c=()=>`${50+Math.floor(Math.random()*200)}px`,e=n=>{const{children:t}=n;return r.jsx("p",{style:{margin:"0",width:"100px",height:"100px",border:"1px solid black"},children:t})},a={render:n=>r.jsxs(s,{style:{border:"2px solid hotpink"},...n,children:[r.jsx(e,{children:"가을 햇살"}),r.jsx(e,{children:"오광수"}),r.jsx(e,{children:"등 뒤에서 살짝"}),r.jsx(e,{children:"안는 이 누구신가요?"}),r.jsx(e,{children:"설레는 마음에"}),r.jsx(e,{children:"뒤돌아보니"}),r.jsx(e,{children:"산모퉁이 돌아온"}),r.jsx(e,{children:"가을 햇살이"}),r.jsx(e,{children:"아슴아슴 남아있는"}),r.jsx(e,{children:"그 사람 되어"}),r.jsx(e,{children:"단풍 조막손 내밀며"}),r.jsx(e,{children:"걷자 합니다"})]})},o={render:n=>r.jsx(s,{style:{border:"2px solid hotpink"},...n,children:Array.from({length:12}).map((t,l)=>{const d=c(),i=c();return r.jsxs("div",{style:{border:"1px solid black",width:d,height:i},children:[d," * ",i]},l)})})};var u,x,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Grid style={{
    border: '2px solid hotpink'
  }} {...args}>\r
      <SquareBox>가을 햇살</SquareBox>\r
      <SquareBox>오광수</SquareBox>\r
      <SquareBox>등 뒤에서 살짝</SquareBox>\r
      <SquareBox>안는 이 누구신가요?</SquareBox>\r
      <SquareBox>설레는 마음에</SquareBox>\r
      <SquareBox>뒤돌아보니</SquareBox>\r
      <SquareBox>산모퉁이 돌아온</SquareBox>\r
      <SquareBox>가을 햇살이</SquareBox>\r
      <SquareBox>아슴아슴 남아있는</SquareBox>\r
      <SquareBox>그 사람 되어</SquareBox>\r
      <SquareBox>단풍 조막손 내밀며</SquareBox>\r
      <SquareBox>걷자 합니다</SquareBox>\r
    </Grid>
}`,...(p=(x=a.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Grid style={{
    border: '2px solid hotpink'
  }} {...args}>\r
      {Array.from({
      length: 12
    }).map((_, index) => {
      const width = getRandomSize();
      const height = getRandomSize();
      return <div key={index} style={{
        border: '1px solid black',
        width,
        height
      }}>\r
            {width} * {height}\r
          </div>;
    })}\r
    </Grid>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const k=["Example","RandomSizedChildrenExample"],G=Object.freeze(Object.defineProperty({__proto__:null,Example:a,RandomSizedChildrenExample:o,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{a as E,G};
//# sourceMappingURL=Grid.stories-96783374.js.map
