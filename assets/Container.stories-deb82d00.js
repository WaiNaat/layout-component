import{j as e,a as g,t as i}from"./toPixelIfNumber-5a232288.js";var j="_1nlwmq62",b="var(--_1nlwmq60)",C="var(--_1nlwmq61)";const n=r=>{const{as:u="div",maxWidth:x="max-content",minWidth:h="min-content",ref:y,children:f,className:s,style:_,...W}=r;return e.jsx(u,{ref:y,className:`${j}`+(s?` ${s}`:""),style:{..._,...g({[b]:i(x),[C]:i(h)})},...W,children:f})};try{n.displayName="Container",n.__docgenInfo={description:"",displayName:"Container",props:{minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"MinWidth<string | number>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"MaxWidth<string | number>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const v={component:n,argTypes:{minWidth:{description:"Container의 최소 너비(min-width)",defaultValue:{summary:"min-content"}},maxWidth:{description:"Container의 최대 너비(max-width)",defaultValue:{summary:"max-content"}},as:{description:"Container를 원하는 HTML tag로 바꿀 수 있습니다.",defaultValue:{summary:"div"},table:{type:{summary:"React.ElementType"}}},ref:{table:{type:{summary:"React.ComponentPropsWithRef['ref']"}}}},args:{minWidth:"min-content",maxWidth:"max-content"},decorators:[r=>e.jsx("div",{style:{width:"100%",height:"100%",border:"1px solid gray"},children:e.jsx(r,{})})]},E=()=>e.jsx(n,{as:"p",style:{border:"2px solid hotpink"},children:e.jsx("span",{children:"안녕하세요?"})}),V=()=>e.jsx(n,{as:"button",onClick:()=>alert("버튼을 누르셨군요?"),style:{border:"2px solid hotpink"},children:e.jsx("span",{children:"안녕하세요?"})}),t={render:()=>e.jsx(E,{})},a={render:()=>e.jsx(V,{})};var o,d,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Text />
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Button />
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Example","ButtonExample"],w=Object.freeze(Object.defineProperty({__proto__:null,ButtonExample:a,Example:t,__namedExportsOrder:q,default:v},Symbol.toStringTag,{value:"Module"}));export{w as C,t as E};
//# sourceMappingURL=Container.stories-deb82d00.js.map
