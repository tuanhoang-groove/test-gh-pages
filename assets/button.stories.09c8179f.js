import{c as y}from"./clsx.m.256e9345.js";import{c}from"./class-variants.691eef1c.js";import{a as h,j as a}from"./jsx-runtime.8ac64c0a.js";import{r as t}from"./index.42775f7d.js";function v(n,e){return t.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},n),t.exports.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}const b=t.exports.forwardRef(v);var w=b;function g(n,e){return t.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:e},n),t.exports.createElement("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}))}const x=t.exports.forwardRef(g);var B=x;function o({className:n="",variant:e="primary",width:u="inline",icon:r,text:l,arrow:p=!1,children:m,...f}){const s=r!=null?r:null;return h("button",{className:y("btn",c(e,{primary:"btn-primary",secondary:"btn-secondary",tertiary:"btn-tertiary",success:"btn-success",danger:"btn-danger"}),c(u,{icon:"btn-icon",inline:"btn-inline",full:"btn-full"}),n),...f,children:[s?a(s,{className:"w-4 h-4"}):null,l?a("p",{children:l}):m,p?a(w,{className:"w-4 h-4"}):null]})}try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"danger"'}]}},width:{defaultValue:{value:"inline"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"full"'},{value:'"icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"((props: SVGProps<SVGSVGElement>) => Element)"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},arrow:{defaultValue:{value:"false"},description:"",name:"arrow",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/atoms/button.tsx#Button"})}catch{}var A={title:"Design System/Atoms/Button",component:o,argTypes:{variant:{description:"Specify how this button should be styled.",variants:["primary","secondary","tertiary","success","danger"],control:{type:"select"}},width:{description:"Specify how wide this button should be.",variants:["auto","full","icon"],control:{type:"select"}},className:{description:"Specify any additional classes this button should have."},children:{control:{disable:!0,hidden:!0}},text:{description:"A string rendered as a `<p>` tag"},icon:{description:"Specify what icon should show to the left of the button.",control:{type:"boolean"}},arrow:{description:"Specify if the arrow to the right should display.",control:{type:"boolean"}}},parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';
import {BellIcon} from '@heroicons/react/solid';

import {Button as ButtonComponent} from './button';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      description: 'Specify how this button should be styled.',
      variants: ['primary', 'secondary', 'tertiary', 'success', 'danger'],
      control: {type: 'select'},
    },
    width: {
      description: 'Specify how wide this button should be.',
      variants: ['auto', 'full', 'icon'],
      control: {type: 'select'},
    },
    className: {
      description: 'Specify any additional classes this button should have.',
    },
    children: {
      control: {
        disable: true,
        hidden: true,
      },
    },
    text: {
      description: 'A string rendered as a \`<p>\` tag',
    },
    icon: {
      description: 'Specify what icon should show to the left of the button.',
      control: {
        type: 'boolean',
      },
    },
    arrow: {
      description: 'Specify if the arrow to the right should display.',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    backgrounds: {
      values: [
        {name: 'white', value: '#fff'},
        {name: 'black', value: '#000'},
      ],
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = ({icon, ...args}) => (
  <ButtonComponent icon={icon ? BellIcon : undefined} {...args} />
);

export const Inline = Template.bind({});
Inline.args = {
  variant: 'primary',
  text: 'Button Text',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'primary',
  icon: true as any,
  width: 'icon',
};

export const Full = Template.bind({});
Full.args = {
  variant: 'primary',
  width: 'full',
  text: 'Full Width',
};

Full.parameters = {
  layout: 'left',
};
`,locationsMap:{inline:{startLoc:{col:57,line:61},endLoc:{col:1,line:63},startBody:{col:57,line:61},endBody:{col:1,line:63}},icon:{startLoc:{col:57,line:61},endLoc:{col:1,line:63},startBody:{col:57,line:61},endBody:{col:1,line:63}},full:{startLoc:{col:57,line:61},endLoc:{col:1,line:63},startBody:{col:57,line:61},endBody:{col:1,line:63}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}},backgrounds:{values:[{name:"white",value:"#fff"},{name:"black",value:"#000"}]}}};const i=({icon:n,...e})=>a(o,{icon:n?B:void 0,...e}),S=i.bind({});S.args={variant:"primary",text:"Button Text"};const I=i.bind({});I.args={variant:"primary",icon:!0,width:"icon"};const d=i.bind({});d.args={variant:"primary",width:"full",text:"Full Width"};d.parameters={layout:"left"};const E=["Inline","Icon","Full"];export{d as Full,I as Icon,S as Inline,E as __namedExportsOrder,A as default};
//# sourceMappingURL=button.stories.09c8179f.js.map
