import{c as g}from"./clsx.m.256e9345.js";import{c as a}from"./class-variants.691eef1c.js";import{j as s}from"./jsx-runtime.8ac64c0a.js";import"./index.42775f7d.js";var c="/test-gh-pages/assets/left.04fdf2c2.svg",m="/test-gh-pages/assets/badge.9fe166ae.svg",p="/test-gh-pages/assets/full.bf54767b.svg",d="/test-gh-pages/assets/left.cd70cd2c.svg",u="/test-gh-pages/assets/badge.107a7871.svg",f="/test-gh-pages/assets/full.299b214a.svg";function e({as:o="img",className:n="",alt:l="Culture Kings",theme:i="black",variant:t="left",...r}){return s(o,{src:a(i,{white:a(t,{full:f,badge:u,left:d}),black:a(t,{full:p,badge:m,left:c})}),className:g("h-10",a(t,{full:"auto",badge:"w-9",left:"auto"}),n),alt:l,...r})}try{e.displayName="Logo",e.__docgenInfo={description:"",displayName:"Logo",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"AsProp"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:{value:"Culture Kings"},description:"",name:"alt",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"black"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"white"'}]}},variant:{defaultValue:{value:"left"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"badge"'},{value:'"left"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/logo.tsx#Logo"]={docgenInfo:e.__docgenInfo,name:"Logo",path:"src/components/atoms/logo.tsx#Logo"})}catch{}var C={parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Logo as LogoComponent} from './logo';

export default {
  title: 'Design System/Atoms/Logo',
  component: LogoComponent,
  argTypes: {
    className: {
      name: 'Class Name',
      description: 'Specify any additional classes this logo should have.',
    },
    theme: {
      name: 'Theme',
      description: 'Specify theme this logo should have.',
    },
    variant: {
      name: 'Variant',
      description: 'Specify variant this logo should be.',
    },
    alt: {
      name: 'Alt',
      description: 'Specify alt description this logo should have.',
    },
  },
} as ComponentMeta<typeof LogoComponent>;

const Template: ComponentStory<typeof LogoComponent> = (args: any) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});
Logo.args = {
  className: 'block lg:block bg-gray-200',
  theme: 'black',
  variant: 'badge',
  alt: 'Culture Kings Develop',
};
`,locationsMap:{logo:{startLoc:{col:55,line:27},endLoc:{col:1,line:29},startBody:{col:55,line:27},endBody:{col:1,line:29}}}}},title:"Design System/Atoms/Logo",component:e,argTypes:{className:{name:"Class Name",description:"Specify any additional classes this logo should have."},theme:{name:"Theme",description:"Specify theme this logo should have."},variant:{name:"Variant",description:"Specify variant this logo should be."},alt:{name:"Alt",description:"Specify alt description this logo should have."}}};const h=o=>s(e,{...o}),v=h.bind({});v.args={className:"block lg:block bg-gray-200",theme:"black",variant:"badge",alt:"Culture Kings Develop"};const _=["Logo"];export{v as Logo,_ as __namedExportsOrder,C as default};
//# sourceMappingURL=logo.stories.833542bc.js.map
