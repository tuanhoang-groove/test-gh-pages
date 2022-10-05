import{S as o}from"./show.e7f1017f.js";import{j as n}from"./jsx-runtime.8ac64c0a.js";import"./index.42775f7d.js";var i={title:"Design System/Atoms/Show",component:o,argTypes:{on:{name:"on",description:"Specify if the component should show its children",control:{type:"boolean"}},children:{name:"Children",control:{disable:!0,hidden:!0}}},parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Show as ShowComponent} from '~/components/atoms/show';

export default {
  title: 'Design System/Atoms/Show',
  component: ShowComponent,
  argTypes: {
    on: {
      name: 'on',
      description: 'Specify if the component should show its children',
      control: {type: 'boolean'},
    },
    children: {
      name: 'Children',
      control: {
        disable: true,
        hidden: true,
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
  },
} as ComponentMeta<typeof ShowComponent>;

const Template: ComponentStory<typeof ShowComponent> = (args) => (
  <ShowComponent {...args}>
    <p className="px-4 py-2 bg-gray-100 text-gray-500 rounded font-bold">
      It lives!
    </p>
  </ShowComponent>
);

export const Show = Template.bind({});
Show.args = {
  on: true,
};
`,locationsMap:{show:{startLoc:{col:55,line:32},endLoc:{col:1,line:38},startBody:{col:55,line:32},endBody:{col:1,line:38}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}};const t=e=>n(o,{...e,children:n("p",{className:"px-4 py-2 bg-gray-100 text-gray-500 rounded font-bold",children:"It lives!"})}),r=t.bind({});r.args={on:!0};const d=["Show"];export{r as Show,d as __namedExportsOrder,i as default};
//# sourceMappingURL=show.stories.f857689a.js.map
