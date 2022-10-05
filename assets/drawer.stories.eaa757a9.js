import{r as i}from"./index.42775f7d.js";import{c as d}from"./clsx.m.256e9345.js";import{M as g,a as w,b as y,c as l,d as _}from"./modal.client.f9660b7b.js";import{c as p}from"./class-variants.691eef1c.js";import{j as r,a as c}from"./jsx-runtime.8ac64c0a.js";import"./create-context-hook.718d6d9a.js";import"./index.9b75c9f0.js";import"./utils.0d26d6a1.js";import"./ShopifyAnalytics.server.899c31c5.js";import"./storefront-api-types.474ec89c.js";import"./index.65f1d40b.js";import"./iframe.8edaaecc.js";function h(e,n){return i.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),i.exports.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}const D=i.exports.forwardRef(h);var v=D;function o({children:e}){return r(g,{children:e})}function a(e){return r(w,{...e})}function s(e){return r(l,{...e})}function t({position:e,children:n,className:f,...u}){return c(y,{className:"fixed inset-0 z-50 group",...u,children:[r(l,{children:r("div",{className:"absolute inset-0 bg-black/50"})}),c("div",{className:d("absolute top-0 bottom-0 bg-white transition-all",p(e,{left:"left-0 -translate-x-10 group-data-is-open:translate-x-0",right:"right-0 translate-x-10 group-data-is-open:translate-x-0"}),f),children:[r(l,{className:d("btn btn-primary btn-icon absolute m-2",p(e,{left:"left-full",right:"right-full"})),children:r(v,{className:"w-4 h-4"})}),n]})]})}try{o.displayName="DrawerRoot",o.__docgenInfo={description:"",displayName:"DrawerRoot",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/drawer.tsx#DrawerRoot"]={docgenInfo:o.__docgenInfo,name:"DrawerRoot",path:"src/components/molecules/drawer.tsx#DrawerRoot"})}catch{}try{a.displayName="DrawerTrigger",a.__docgenInfo={description:"",displayName:"DrawerTrigger",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/drawer.tsx#DrawerTrigger"]={docgenInfo:a.__docgenInfo,name:"DrawerTrigger",path:"src/components/molecules/drawer.tsx#DrawerTrigger"})}catch{}try{s.displayName="DrawerExit",s.__docgenInfo={description:"",displayName:"DrawerExit",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/drawer.tsx#DrawerExit"]={docgenInfo:s.__docgenInfo,name:"DrawerExit",path:"src/components/molecules/drawer.tsx#DrawerExit"})}catch{}try{t.displayName="DrawerOverlay",t.__docgenInfo={description:"",displayName:"DrawerOverlay",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parent:{defaultValue:null,description:"",name:"parent",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/drawer.tsx#DrawerOverlay"]={docgenInfo:t.__docgenInfo,name:"DrawerOverlay",path:"src/components/molecules/drawer.tsx#DrawerOverlay"})}catch{}var K={title:"Design System/Molecules/Drawer",component:o,subcomponents:{Trigger:a,Overlay:t},parameters:{storySource:{source:`import {useEffect, useRef} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuIcon} from '@heroicons/react/solid';
import {
  DrawerOverlay,
  DrawerRoot,
  DrawerTrigger,
} from '~/components/molecules/drawer';

export default {
  title: 'Design System/Molecules/Drawer',
  component: DrawerRoot,
  subcomponents: {
    Trigger: DrawerTrigger,
    Overlay: DrawerOverlay,
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
      iframeWidth: 600,
    },
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof DrawerRoot>;

const Template: ComponentStory<typeof DrawerRoot> = ({children}) => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentRef?.current) {
      parentRef.current = document.querySelector('#root');
    }
  }, []);

  return (
    <DrawerRoot>
      <DrawerTrigger className="btn btn-primary btn-icon">
        <MenuIcon className="w-4 h-4 text-white" />
      </DrawerTrigger>
      {children}
    </DrawerRoot>
  );
};

// Need to fix up how to handle children here

export const Left = Template.bind({});
Left.args = {
  children: (
    <DrawerOverlay position="left" className="divide-y divide-gray-200 w-32">
      <div>Left Drawer</div>
    </DrawerOverlay>
  ),
};

export const Right = Template.bind({});
Right.args = {
  children: (
    <DrawerOverlay position="right" className="divide-y divide-gray-200 w-32">
      <div>Right Drawer</div>
    </DrawerOverlay>
  ),
};
`,locationsMap:{left:{startLoc:{col:52,line:32},endLoc:{col:1,line:49},startBody:{col:52,line:32},endBody:{col:1,line:49}},right:{startLoc:{col:52,line:32},endLoc:{col:1,line:49},startBody:{col:52,line:32},endBody:{col:1,line:49}}}},viewMode:"docs",docs:{inlineStories:!1,iframeHeight:600,iframeWidth:600},previewTabs:{canvas:{hidden:!0}}}};const m=({children:e})=>{const n=i.exports.useRef(null);return i.exports.useEffect(()=>{n!=null&&n.current||(n.current=document.querySelector("#root"))},[]),c(o,{children:[r(a,{className:"btn btn-primary btn-icon",children:r(_,{className:"w-4 h-4 text-white"})}),e]})},R=m.bind({});R.args={children:r(t,{position:"left",className:"divide-y divide-gray-200 w-32",children:r("div",{children:"Left Drawer"})})};const O=m.bind({});O.args={children:r(t,{position:"right",className:"divide-y divide-gray-200 w-32",children:r("div",{children:"Right Drawer"})})};const Y=["Left","Right"];export{R as Left,O as Right,Y as __namedExportsOrder,K as default};
//# sourceMappingURL=drawer.stories.eaa757a9.js.map
