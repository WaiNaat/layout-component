import{j as t,a as h}from"./vanilla-extract-dynamic.esm-f1ae3083.js";var u="_1nlwmq62",x="var(--_1nlwmq60)",_="var(--_1nlwmq61)";const r=e=>{const{maxWidth:o="max-content",minWidth:d="min-content",children:m,className:l,style:c,...p}=e;return t.jsx("div",{className:`${l} ${u}`,style:{...c,...h({[x]:o.toString(),[_]:d.toString()})},...p,children:m})};try{r.displayName="Container",r.__docgenInfo={description:"",displayName:"Container",props:{minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"MinWidth<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"MaxWidth<string | number>"}}}}}catch{}const y={component:r,argTypes:{minWidth:{description:"Container의 최소 너비(min-width)",defaultValue:{summary:"min-content"}},maxWidth:{description:"Container의 최대 너비(max-width)",defaultValue:{summary:"max-content"}}},args:{minWidth:"min-content",maxWidth:"max-content"},decorators:[e=>t.jsx("div",{style:{width:"100%",height:"100%",border:"1px solid gray"},children:t.jsx(e,{})})]},n={render:e=>t.jsx(r,{style:{border:"2px solid hotpink"},...e,children:t.jsx("span",{children:"안녕하세요?"})})};var a,i,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Container style={{
    border: '2px solid hotpink'
  }} {...args}>\r
      <span>안녕하세요?</span>\r
    </Container>
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["Example"],f=Object.freeze(Object.defineProperty({__proto__:null,Example:n,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{f as C,n as E};
//# sourceMappingURL=Container.stories-fc16bbca.js.map
