import{j as e,a as _,t as j}from"./toPixelIfNumber-5a232288.js";var b="var(--_18k3agd1)",v="_18k3agd3",G="var(--_18k3agd2)",k="var(--_18k3agd0)";const s=a=>{const{as:t="div",gap:l="",ref:i,rows:d,columns:y,children:q,className:u,style:f,...B}=a;return e.jsx(t,{ref:i,className:`${v}`+(u?` ${u}`:""),style:{...f,..._({[k]:d.toString(),[b]:y.toString(),[G]:j(l)})},...B,children:q})};try{s.displayName="Grid",s.__docgenInfo={description:"",displayName:"Grid",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:'number | "auto-fill" | "auto-fit"'}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:'number | "auto-fill" | "auto-fit"'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"Gap<string | number>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const w={component:s,argTypes:{rows:{description:"행의 개수"},columns:{description:"열의 개수"},gap:{description:"각 행과 열 사이의 간격",defaultValue:{summary:"''"}},as:{description:"Grid를 원하는 HTML tag로 바꿀 수 있습니다.",defaultValue:{summary:"div"},table:{type:{summary:"React.ElementType"}}},ref:{table:{type:{summary:"React.ComponentPropsWithRef['ref']"}}}},args:{rows:4,columns:3,gap:"10px"}},c=()=>`${50+Math.floor(Math.random()*200)}px`,r=a=>{const{children:t}=a;return e.jsx("p",{style:{margin:"0",width:"100px",height:"100px",border:"1px solid black"},children:t})},n={render:a=>e.jsxs(s,{style:{border:"2px solid hotpink"},...a,children:[e.jsx(r,{children:"가을 햇살"}),e.jsx(r,{children:"오광수"}),e.jsx(r,{children:"등 뒤에서 살짝"}),e.jsx(r,{children:"안는 이 누구신가요?"}),e.jsx(r,{children:"설레는 마음에"}),e.jsx(r,{children:"뒤돌아보니"}),e.jsx(r,{children:"산모퉁이 돌아온"}),e.jsx(r,{children:"가을 햇살이"}),e.jsx(r,{children:"아슴아슴 남아있는"}),e.jsx(r,{children:"그 사람 되어"}),e.jsx(r,{children:"단풍 조막손 내밀며"}),e.jsx(r,{children:"걷자 합니다"})]})},o={render:a=>e.jsx(s,{style:{border:"2px solid hotpink"},...a,children:Array.from({length:12}).map((t,l)=>{const i=c(),d=c();return e.jsxs("div",{style:{border:"1px solid black",width:i,height:d},children:[i," * ",d]},l)})})};var p,m,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,g,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const E=["Example","RandomSizedChildrenExample"],V=Object.freeze(Object.defineProperty({__proto__:null,Example:n,RandomSizedChildrenExample:o,__namedExportsOrder:E,default:w},Symbol.toStringTag,{value:"Module"}));export{n as E,V as G};
//# sourceMappingURL=Grid.stories-07461f81.js.map
