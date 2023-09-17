import{j as e,a as L}from"./vanilla-extract-dynamic.esm-f1ae3083.js";var j="var(--_73931y2)",h="_73931y6",g="var(--_73931y0)",_="var(--_73931y4)",w="var(--_73931y3)",V="_73931y5",b="var(--_73931y1)";const r=n=>{const{direction:s="row",justify:d="normal",align:f="normal",inline:c=!1,wrap:v="nowrap",gap:o="",children:p,className:x,style:m,...y}=n;return e.jsx("div",{className:`${x} ${c?V:h}`,style:{...m,...L({[g]:s,[b]:d,[j]:f,[_]:o,[w]:v})},...y,children:p})};try{r.displayName="Flex",r.__docgenInfo={description:"",displayName:"Flex",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"space-around"'},{value:'"stretch"'},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"unsafe center"'},{value:'"unsafe start"'},{value:'"unsafe end"'},{value:'"unsafe flex-start"'},{value:'"unsafe flex-end"'},{value:'"safe center"'},{value:'"safe start"'},{value:'"safe end"'},{value:'"safe flex-start"'},{value:'"safe flex-end"'},{value:'"unsafe left"'},{value:'"unsafe right"'},{value:'"safe left"'},{value:'"safe right"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"stretch"'},{value:'"center"'},{value:'"start"'},{value:'"end"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"unsafe center"'},{value:'"unsafe start"'},{value:'"unsafe end"'},{value:'"unsafe flex-start"'},{value:'"unsafe flex-end"'},{value:'"safe center"'},{value:'"safe start"'},{value:'"safe end"'},{value:'"safe flex-start"'},{value:'"safe flex-end"'},{value:'"baseline"'},{value:'"first baseline"'},{value:'"last baseline"'},{value:'"baseline first"'},{value:'"baseline last"'},{value:'"self-start"'},{value:'"self-end"'},{value:'"unsafe self-start"'},{value:'"unsafe self-end"'},{value:'"safe self-start"'},{value:'"safe self-end"'}]}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const F={component:r,argTypes:{direction:{description:"flex-direction",defaultValue:{summary:"row"}},align:{description:"align-items",defaultValue:{summary:"normal"}},justify:{description:"justify-center",defaultValue:{summary:"normal"}},inline:{description:"inline-flex를 원할 경우 true로 설정",defaultValue:{summary:"false"}},wrap:{description:"flex-wrap",defaultValue:{summary:"nowrap"}},gap:{description:"하위 요소들 사이의 간격",defaultValue:{summary:""}}},args:{direction:"row",align:"center",justify:"center",gap:"10px",wrap:"nowrap",inline:!1}},a=n=>{const{children:s}=n;return e.jsx("p",{style:{margin:"0"},children:s})},l={render:n=>e.jsxs(r,{style:{border:"2px solid hotpink"},...n,children:[e.jsx(a,{children:"가을 커피"}),e.jsx(a,{children:"용혜원"}),e.jsx(a,{children:"노란 은행잎이 떨어지는"}),e.jsx(a,{children:"가을 도시를 바라보며"}),e.jsx(a,{children:"커피를 마신다"}),e.jsx(a,{children:"은행잎 하나"}),e.jsx(a,{children:"띄워 마시면"}),e.jsx(a,{children:"이 가을을"}),e.jsx(a,{children:"마실 수 있을까"}),e.jsx(a,{children:"하늘에서"}),e.jsx(a,{children:"푸른 물감이"}),e.jsx(a,{children:"커피잔에 뚝 떨어져"}),e.jsx(a,{children:"고독에 물든"}),e.jsx(a,{children:"마음의 색깔을 바꿀 수 있을까"}),e.jsx(a,{children:"입술에 젖어오는"}),e.jsx(a,{children:"쓴맛과 단맛"}),e.jsx(a,{children:"프림의 조화를 이루는"}),e.jsx(a,{children:"그 날의 커피는"}),e.jsx(a,{children:"가을색으로 물들었다"})]})};var i,t,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Flex style={{
    border: '2px solid hotpink'
  }} {...args}>\r
      <Line>가을 커피</Line>\r
      <Line>용혜원</Line>\r
      <Line>노란 은행잎이 떨어지는</Line>\r
      <Line>가을 도시를 바라보며</Line>\r
      <Line>커피를 마신다</Line>\r
      <Line>은행잎 하나</Line>\r
      <Line>띄워 마시면</Line>\r
      <Line>이 가을을</Line>\r
      <Line>마실 수 있을까</Line>\r
      <Line>하늘에서</Line>\r
      <Line>푸른 물감이</Line>\r
      <Line>커피잔에 뚝 떨어져</Line>\r
      <Line>고독에 물든</Line>\r
      <Line>마음의 색깔을 바꿀 수 있을까</Line>\r
      <Line>입술에 젖어오는</Line>\r
      <Line>쓴맛과 단맛</Line>\r
      <Line>프림의 조화를 이루는</Line>\r
      <Line>그 날의 커피는</Line>\r
      <Line>가을색으로 물들었다</Line>\r
    </Flex>
}`,...(u=(t=l.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};const q=["Example"],N=Object.freeze(Object.defineProperty({__proto__:null,Example:l,__namedExportsOrder:q,default:F},Symbol.toStringTag,{value:"Module"}));export{l as E,N as F};
//# sourceMappingURL=Flex.stories-0febb70b.js.map
