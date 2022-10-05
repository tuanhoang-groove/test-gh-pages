import{P as n}from"./pill.beab1fbd.js";import{j as t}from"./jsx-runtime.8ac64c0a.js";import"./clsx.m.256e9345.js";import"./class-variants.691eef1c.js";import"./index.42775f7d.js";var c={title:"Design System/Atoms/Pill",component:n,argTypes:{variant:{description:"Specify how this pill should be styled.",variants:["primary","secondary","sale","tertiary","success","danger","warning","info"],control:{type:"select"}},children:{control:{type:"text"}}},parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Pill as PillComponent} from './pill';

export default {
  title: 'Design System/Atoms/Pill',
  component: PillComponent,
  argTypes: {
    variant: {
      description: 'Specify how this pill should be styled.',
      variants: [
        'primary',
        'secondary',
        'sale',
        'tertiary',
        'success',
        'danger',
        'warning',
        'info',
      ],
      control: {type: 'select'},
    },
    children: {
      control: {type: 'text'},
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
} as ComponentMeta<typeof PillComponent>;

const Template: ComponentStory<typeof PillComponent> = (args) => (
  <PillComponent {...args} />
);

export const Pill = Template.bind({});
Pill.args = {
  variant: 'primary',
  children: 'Pill Text',
};
`,locationsMap:{pill:{startLoc:{col:55,line:43},endLoc:{col:1,line:45},startBody:{col:55,line:43},endBody:{col:1,line:45}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}},backgrounds:{values:[{name:"white",value:"#fff"},{name:"black",value:"#000"}]}}};const o=e=>t(n,{...e}),l=o.bind({});l.args={variant:"primary",children:"Pill Text"};const m=["Pill"];export{l as Pill,m as __namedExportsOrder,c as default};
//# sourceMappingURL=pill.stories.a0e19098.js.map
