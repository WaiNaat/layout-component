import{j as n}from"./toPixelIfNumber-5a232288.js";import{M as o,C as c,b as l}from"./index-9172f816.js";import{G as t,E as e}from"./Grid.stories-07461f81.js";import{u as d}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-de705be4.js";import"../sb-preview/runtime.js";import"./index-25c5ea02.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(r){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",h3:"h3",code:"code"},d(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:t}),`
`,n.jsx(s.h1,{id:"grid",children:"Grid"}),`
`,n.jsx(s.h2,{id:"기능",children:"기능"}),`
`,n.jsx(s.p,{children:"Grid는 자식 컴포넌트들을 격자 형태로 배치합니다."}),`
`,n.jsx(s.p,{children:"만약 자식 컴포넌트들의 크기가 일정하지 않은 경우, 각 칸은 아래 식에 따라 계산됩니다."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"가로: 해당 열에서 가장 가로 길이가 긴 요소의 크기"}),`
`,n.jsx(s.li,{children:"세로: 해당 행에서 가장 세로 길이가 긴 요소의 크기"}),`
`]}),`
`,n.jsx(s.h2,{id:"미리보기",children:"미리보기"}),`
`,n.jsxs(s.p,{children:["분홍색은 Grid의 외곽을 보여주기 위해 칠한 것이며, 실제 컴포넌트에는 색상이 없습니다. ",n.jsx("br",{}),`\r
검은색은 자식 컴포넌트들의 외곽이에요.`]}),`
`,n.jsx(s.h3,{id:"하위-요소들의-크기가-일정할-때",children:"하위 요소들의 크기가 일정할 때"}),`
`,n.jsx(c,{of:e}),`
`,n.jsx(s.h2,{id:"props",children:"props"}),`
`,n.jsx(s.p,{children:"Grid는 아래에 적힌 props들을 기본적으로 받을 수 있습니다."}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"as"}),": HTML tag 이름."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"rows"}),": CSS grid-template-rows의 ",n.jsx(s.code,{children:"repeat()"}),"에 들어갈 숫자"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"columns"}),": CSS grid-template-columns의 ",n.jsx(s.code,{children:"repeat()"}),"에 들어갈 숫자"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"gap"}),": 하위 요소들 사이의 간격을 나타내는 문자열"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"<div>"}),`태그에 들어갈 수 있는 속성들,\r
또는 `,n.jsx(s.code,{children:"as"})," prop을 써서 태그를 정했을 경우 해당 태그에 들어갈 수 있는 모든 속성들을 prop으로 내려줄 수 있어요."]}),`
`,n.jsx(l,{of:e})]})}function G(r={}){const{wrapper:s}=Object.assign({},d(),r.components);return s?n.jsx(s,Object.assign({},r,{children:n.jsx(i,r)})):i(r)}export{G as default};
//# sourceMappingURL=Grid-ef31f6ab.js.map
