import{r as u}from"./index.42775f7d.js";import{c as C}from"./clsx.m.256e9345.js";import{S as O}from"./show.e7f1017f.js";import{c as S}from"./create-context-hook.718d6d9a.js";import{j as n,a as m}from"./jsx-runtime.8ac64c0a.js";const _={isOpen:!1,toggle:()=>{}},g=u.exports.createContext(_),y=g.Provider,r=S({CollapseContext:g});function t({children:e}){const{isOpen:o}=_,[s,l]=u.exports.useState(o),d=u.exports.useCallback(()=>{l(f=>!f)},[l]);return n(y,{value:{isOpen:s,toggle:d},children:e})}function a({children:e}){const{isOpen:o}=r();return n(O,{on:o,children:e})}function p({children:e}){const{isOpen:o}=r();return n(O,{on:!o,children:e})}function c({onClick:e,...o}){const{toggle:s}=r();return n("button",{onClick:d=>{e&&e(d),s()},...o})}function i({children:e,className:o,...s}){const{isOpen:l}=r();return m("div",{className:C("relative transition-all overflow-hidden",l&&"max-h-auto",!l&&"max-h-24",o),...s,children:[n("div",{className:C("absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-white/0 to-white/100 z-20",l&&"opacity-0",!l&&"opacity-1")}),e]})}try{t.displayName="CollapseRoot",t.__docgenInfo={description:"",displayName:"CollapseRoot",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/collapse.client.tsx#CollapseRoot"]={docgenInfo:t.__docgenInfo,name:"CollapseRoot",path:"src/components/molecules/collapse.client.tsx#CollapseRoot"})}catch{}try{a.displayName="CollapseOnOpen",a.__docgenInfo={description:"",displayName:"CollapseOnOpen",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/collapse.client.tsx#CollapseOnOpen"]={docgenInfo:a.__docgenInfo,name:"CollapseOnOpen",path:"src/components/molecules/collapse.client.tsx#CollapseOnOpen"})}catch{}try{p.displayName="CollapseOnClosed",p.__docgenInfo={description:"",displayName:"CollapseOnClosed",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/collapse.client.tsx#CollapseOnClosed"]={docgenInfo:p.__docgenInfo,name:"CollapseOnClosed",path:"src/components/molecules/collapse.client.tsx#CollapseOnClosed"})}catch{}try{c.displayName="CollapseTrigger",c.__docgenInfo={description:"",displayName:"CollapseTrigger",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/collapse.client.tsx#CollapseTrigger"]={docgenInfo:c.__docgenInfo,name:"CollapseTrigger",path:"src/components/molecules/collapse.client.tsx#CollapseTrigger"})}catch{}try{i.displayName="CollapseBody",i.__docgenInfo={description:"",displayName:"CollapseBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/collapse.client.tsx#CollapseBody"]={docgenInfo:i.__docgenInfo,name:"CollapseBody",path:"src/components/molecules/collapse.client.tsx#CollapseBody"})}catch{}var E={title:"Design System/Molecules/Collapse",component:t,subcomponents:{Trigger:c,Body:i,OnOpen:a,OnClosed:p},parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';

import {
  CollapseBody,
  CollapseOnClosed,
  CollapseOnOpen,
  CollapseRoot,
  CollapseTrigger,
} from '~/components/molecules/collapse.client';

export default {
  title: 'Design System/Molecules/Collapse',
  component: CollapseRoot,
  subcomponents: {
    Trigger: CollapseTrigger,
    Body: CollapseBody,
    OnOpen: CollapseOnOpen,
    OnClosed: CollapseOnClosed,
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof CollapseRoot>;

const Template: ComponentStory<typeof CollapseRoot> = (args) => (
  <CollapseRoot>
    <CollapseBody className="max-w-2xl">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
      aliquid atque consequuntur delectus dolore dolorum ducimus facilis illum
      iusto laudantium magnam magni modi rem, sapiente tenetur ut voluptatem
      voluptatibus voluptatum. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Accusantium aliquid atque consequuntur delectus dolore
      dolorum ducimus facilis illum iusto laudantium magnam magni modi rem,
      sapiente tenetur ut voluptatem voluptatibus voluptatum.
    </CollapseBody>
    <CollapseTrigger className="font-link">
      <CollapseOnOpen>Show Less</CollapseOnOpen>
      <CollapseOnClosed>Show More</CollapseOnClosed>
    </CollapseTrigger>
  </CollapseRoot>
);

export const Collapse = Template.bind({});
`,locationsMap:{collapse:{startLoc:{col:54,line:30},endLoc:{col:1,line:46},startBody:{col:54,line:30},endBody:{col:1,line:46}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}};const T=e=>m(t,{children:[n(i,{className:"max-w-2xl",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque consequuntur delectus dolore dolorum ducimus facilis illum iusto laudantium magnam magni modi rem, sapiente tenetur ut voluptatem voluptatibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque consequuntur delectus dolore dolorum ducimus facilis illum iusto laudantium magnam magni modi rem, sapiente tenetur ut voluptatem voluptatibus voluptatum."}),m(c,{className:"font-link",children:[n(a,{children:"Show Less"}),n(p,{children:"Show More"})]})]}),L=T.bind({}),b=["Collapse"];export{L as Collapse,b as __namedExportsOrder,E as default};
//# sourceMappingURL=collapse.stories.8e891e55.js.map
