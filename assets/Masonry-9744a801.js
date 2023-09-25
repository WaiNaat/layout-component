import{j as n}from"./toPixelIfNumber-5a232288.js";import{M as c,C as d,b as l}from"./index-e3968b14.js";import{M as t,I as s}from"./Masonry.stories-1d3e870b.js";import{u as o}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-77c0948c.js";import"../sb-preview/runtime.js";import"./index-25c5ea02.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre"},o(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:t}),`
`,n.jsx(e.h1,{id:"grid",children:"Grid"}),`
`,n.jsx(e.h2,{id:"기능",children:"기능"}),`
`,n.jsx(e.p,{children:"Masonry는 세로 방향의 Masonry layout을 제공합니다."}),`
`,n.jsx(e.h2,{id:"주의사항",children:"주의사항"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Masonry를 이용해 정리할 요소는 ",n.jsx(e.code,{children:"<Masonry.Item>"}),"으로 감싸야 합니다."]}),`
`,n.jsxs(e.li,{children:["DOM 상에서 ",n.jsx(e.code,{children:"<Masonry.Item>"}),"은 ",n.jsx(e.code,{children:"<Masonry>"}),"의 바로 하위 요소여야 합니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"<Masonry.Item>"}),"을 제외한 모든 ",n.jsx(e.code,{children:"<Masonry>"}),"의 하위 요소에 대한 올바른 렌더링은 보장하지 않습니다."]}),`
`]}),`
`,n.jsx(e.h2,{id:"미리보기",children:"미리보기"}),`
`,n.jsx("div",{style:{height:"400px",overflow:"auto"},children:n.jsx(d,{of:s})}),`
`,n.jsx(e.h2,{id:"예제",children:"예제"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Masonry } from '@wainaat/react-layout-component';\r
\r
<Masonry>\r
  {Array.from({ length: 20 }).map((_, index) => (\r
    <Masonry.Item key={index}>\r
      <MyRandomImage />\r
    </Masonry.Item>\r
  ))}\r
</Masonry>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"props"}),`
`,n.jsx(e.p,{children:"Masonry는 아래에 적힌 props들을 받습니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"as"}),": ",n.jsx(e.code,{children:"div"}),", ",n.jsx(e.code,{children:"section"}),", ",n.jsx(e.code,{children:"main"}),", ",n.jsx(e.code,{children:"article"})," 중 하나."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"itemSize"}),": 각 열의 크기."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fluidResize"}),": ",n.jsx(e.code,{children:"true"}),"로 설정하면 각 열이 Masonry의 전체 폭에 따라 최소 ",n.jsx(e.code,{children:"itemSize"}),", 최대 ",n.jsx(e.code,{children:"1fr"})," 사이에서 자유롭게 움직입니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rowGap"}),": 각 행 사이의 간격"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"columnGap"}),": 각 열 사이의 간격."]}),`
`]}),`
`,n.jsx(e.p,{children:"Masory.Item은 props를 받지 않습니다."}),`
`,n.jsx(l,{of:s})]})}function I(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(i,r)})):i(r)}export{I as default};
//# sourceMappingURL=Masonry-9744a801.js.map
