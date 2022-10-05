import{r as o}from"./index.42775f7d.js";import{c as G}from"./clsx.m.256e9345.js";import{g as f}from"./utils.0d26d6a1.js";import{j as a,F as T,a as d}from"./jsx-runtime.8ac64c0a.js";import"./ShopifyAnalytics.server.899c31c5.js";import"./storefront-api-types.474ec89c.js";import"./index.65f1d40b.js";import"./iframe.8edaaecc.js";const y={value:"",setValue:()=>{}},m=o.exports.createContext(y),v=m.Provider,_=()=>o.exports.useContext(m);function c({children:e,onChange:r,defaultValue:n}){const[t,s]=o.exports.useState(n),u=o.exports.useRef(r);return o.exports.useEffect(()=>{u.current=r},[r]),o.exports.useEffect(()=>{u!=null&&u.current&&u.current(t)},[t]),a(v,{value:{value:t,setValue:s},children:e})}function b({children:e,...r}){const{value:n,setValue:t}=_();return a("div",{...r,children:a(T,{children:o.exports.Children.map(e,s=>{if(o.exports.isValidElement(s))return o.exports.cloneElement(s,{key:`tabs-${n}`,isActive:s.props.value===n,onClick:()=>t(s.props.value),...s.props})})})})}function p({isActive:e,...r}){const n=f({"is-active":e!=null?e:void 0});return a("button",{...r,...n})}function i({children:e,...r}){const{value:n}=_();return a("div",{...r,children:a(T,{children:o.exports.Children.map(e,t=>{if(o.exports.isValidElement(t))return o.exports.cloneElement(t,{key:`panels-${n}`,isShow:t.props.value===n,...t.props})})})})}function l({isShow:e,className:r,...n}){return a("div",{className:G(!e&&"hidden",e&&"visible",r),...n})}try{c.displayName="TabGroupRoot",c.__docgenInfo={description:"",displayName:"TabGroupRoot",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/tab-group.client.tsx#TabGroupRoot"]={docgenInfo:c.__docgenInfo,name:"TabGroupRoot",path:"src/components/molecules/tab-group.client.tsx#TabGroupRoot"})}catch{}try{b.displayName="TabGroupTabs",b.__docgenInfo={description:"",displayName:"TabGroupTabs",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/tab-group.client.tsx#TabGroupTabs"]={docgenInfo:b.__docgenInfo,name:"TabGroupTabs",path:"src/components/molecules/tab-group.client.tsx#TabGroupTabs"})}catch{}try{p.displayName="TabGroupTab",p.__docgenInfo={description:"",displayName:"TabGroupTab",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/tab-group.client.tsx#TabGroupTab"]={docgenInfo:p.__docgenInfo,name:"TabGroupTab",path:"src/components/molecules/tab-group.client.tsx#TabGroupTab"})}catch{}try{i.displayName="TabGroupPanels",i.__docgenInfo={description:"",displayName:"TabGroupPanels",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/tab-group.client.tsx#TabGroupPanels"]={docgenInfo:i.__docgenInfo,name:"TabGroupPanels",path:"src/components/molecules/tab-group.client.tsx#TabGroupPanels"})}catch{}try{l.displayName="TabGroupPanel",l.__docgenInfo={description:"",displayName:"TabGroupPanel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},isShow:{defaultValue:null,description:"",name:"isShow",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/tab-group.client.tsx#TabGroupPanel"]={docgenInfo:l.__docgenInfo,name:"TabGroupPanel",path:"src/components/molecules/tab-group.client.tsx#TabGroupPanel"})}catch{}var N={title:"Design System/Molecules/Tab Group",component:c,subcomponents:{Tabs:b,Tab:p,Panels:i,Panel:l},parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';
import {
  TabGroupPanel,
  TabGroupPanels,
  TabGroupRoot,
  TabGroupTab,
  TabGroupTabs,
} from '~/components/molecules/tab-group.client';

export default {
  title: 'Design System/Molecules/Tab Group',
  component: TabGroupRoot,
  subcomponents: {
    Tabs: TabGroupTabs,
    Tab: TabGroupTab,
    Panels: TabGroupPanels,
    Panel: TabGroupPanel,
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof TabGroupRoot>;

const Template: ComponentStory<typeof TabGroupRoot> = () => (
  <TabGroupRoot defaultValue="one">
    <TabGroupTabs className="space-x-2 px-4 border border-gray-200 rounded mb-2">
      <TabGroupTab
        value="one"
        className="py-4 border-b border-transparent hover:border-gray-300 data-is-active:border-black transition-all"
      >
        Tab 1
      </TabGroupTab>
      <TabGroupTab
        value="two"
        className="py-4 border-b border-transparent hover:border-gray-300 data-is-active:border-black transition-all"
      >
        Tab 2
      </TabGroupTab>
      <TabGroupTab
        value="three"
        className="py-4 border-b border-transparent hover:border-gray-300 data-is-active:border-black transition-all"
      >
        Tab 3
      </TabGroupTab>
    </TabGroupTabs>
    <TabGroupPanels className="p-4 rounded border border-gray-200">
      <TabGroupPanel value="one">Panel 1</TabGroupPanel>
      <TabGroupPanel value="two">Panel 2</TabGroupPanel>
      <TabGroupPanel value="three">Panel 3</TabGroupPanel>
    </TabGroupPanels>
  </TabGroupRoot>
);

export const TabGroup = Template.bind({});
`,locationsMap:{"tab-group":{startLoc:{col:54,line:29},endLoc:{col:1,line:57},startBody:{col:54,line:29},endBody:{col:1,line:57}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}};const g=()=>d(c,{defaultValue:"one",children:[d(b,{className:"space-x-2 px-4 border border-gray-200 rounded mb-2",children:[a(p,{value:"one",className:"py-4 border-b border-transparent hover:border-gray-300 data-is-active:border-black transition-all",children:"Tab 1"}),a(p,{value:"two",className:"py-4 border-b border-transparent hover:border-gray-300 data-is-active:border-black transition-all",children:"Tab 2"}),a(p,{value:"three",className:"py-4 border-b border-transparent hover:border-gray-300 data-is-active:border-black transition-all",children:"Tab 3"})]}),d(i,{className:"p-4 rounded border border-gray-200",children:[a(l,{value:"one",children:"Panel 1"}),a(l,{value:"two",children:"Panel 2"}),a(l,{value:"three",children:"Panel 3"})]})]}),A=g.bind({}),V=["TabGroup"];export{A as TabGroup,V as __namedExportsOrder,N as default};
//# sourceMappingURL=tab-group.stories.30612759.js.map
