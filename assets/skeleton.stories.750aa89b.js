import{c as s}from"./clsx.m.256e9345.js";import{a,j as n}from"./jsx-runtime.8ac64c0a.js";import"./index.42775f7d.js";function e({className:o,...t}){return a("div",{className:s("relative",o),...t,children:[n("div",{className:"absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50"}),n("div",{className:"absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 animate-shimmer"})]})}try{e.displayName="Skeleton",e.__docgenInfo={description:"",displayName:"Skeleton",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/skeleton.tsx#Skeleton"]={docgenInfo:e.__docgenInfo,name:"Skeleton",path:"src/components/atoms/skeleton.tsx#Skeleton"})}catch{}var p={title:"Design System/Atoms/Skeleton",component:e,parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Skeleton as SkeletonComponent} from '~/components/atoms/skeleton';

export default {
  title: 'Design System/Atoms/Skeleton',
  component: SkeletonComponent,

  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof SkeletonComponent>;

const Template: ComponentStory<typeof SkeletonComponent> = (args) => (
  <SkeletonComponent {...args} />
);

export const Skeleton = Template.bind({});
Skeleton.args = {
  className: 'w-32 h-32',
};
`,locationsMap:{skeleton:{startLoc:{col:59,line:19},endLoc:{col:1,line:21},startBody:{col:59,line:19},endBody:{col:1,line:21}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}};const r=o=>n(e,{...o}),l=r.bind({});l.args={className:"w-32 h-32"};const d=["Skeleton"];export{l as Skeleton,d as __namedExportsOrder,p as default};
//# sourceMappingURL=skeleton.stories.750aa89b.js.map
