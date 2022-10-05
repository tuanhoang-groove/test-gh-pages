import{M as a,a as n,c as t,b as l,d as i}from"./modal.client.f9660b7b.js";import{a as o,j as e}from"./jsx-runtime.8ac64c0a.js";import"./index.42775f7d.js";import"./clsx.m.256e9345.js";import"./create-context-hook.718d6d9a.js";import"./index.9b75c9f0.js";import"./utils.0d26d6a1.js";import"./ShopifyAnalytics.server.899c31c5.js";import"./storefront-api-types.474ec89c.js";import"./index.65f1d40b.js";import"./iframe.8edaaecc.js";var h={title:"Design System/Molecules/Modal",component:a,subcomponents:{Trigger:n,Exit:t,Overlay:l},parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';
import {MenuIcon} from '@heroicons/react/solid';
import {
  ModalExit,
  ModalOverlay,
  ModalRoot,
  ModalTrigger,
} from '~/components/molecules/modal.client';

export default {
  title: 'Design System/Molecules/Modal',
  component: ModalRoot,
  subcomponents: {
    Trigger: ModalTrigger,
    Exit: ModalExit,
    Overlay: ModalOverlay,
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
} as ComponentMeta<typeof ModalRoot>;

const Template: ComponentStory<typeof ModalRoot> = () => {
  return (
    <ModalRoot>
      <ModalTrigger className="btn btn-primary btn-icon">
        <MenuIcon className="w-4 h-4 text-white" />
      </ModalTrigger>
      <ModalOverlay parent="#root" className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-4 h-auto z-10">
          <div className="flex flex-col divide-y divide-gray-200 bg-white rounded">
            <p className="p-4">
              This is a message contained in the modal overlay.
            </p>
            <div className="flex flex-row justify-between p-4">
              <ModalExit className="font-link">Exit Modal</ModalExit>
            </div>
          </div>
        </div>
        <div></div>
      </ModalOverlay>
    </ModalRoot>
  );
};

export const Modal = Template.bind({});
`,locationsMap:{modal:{startLoc:{col:51,line:33},endLoc:{col:1,line:55},startBody:{col:51,line:33},endBody:{col:1,line:55}}}},viewMode:"docs",docs:{inlineStories:!1,iframeHeight:600,iframeWidth:600},previewTabs:{canvas:{hidden:!0}}}};const s=()=>o(a,{children:[e(n,{className:"btn btn-primary btn-icon",children:e(i,{className:"w-4 h-4 text-white"})}),o(l,{parent:"#root",className:"absolute inset-0",children:[e("div",{className:"absolute inset-0 bg-black/50 -z-10"}),e("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-4 h-auto z-10",children:o("div",{className:"flex flex-col divide-y divide-gray-200 bg-white rounded",children:[e("p",{className:"p-4",children:"This is a message contained in the modal overlay."}),e("div",{className:"flex flex-row justify-between p-4",children:e(t,{className:"font-link",children:"Exit Modal"})})]})}),e("div",{})]})]}),x=s.bind({}),g=["Modal"];export{x as Modal,g as __namedExportsOrder,h as default};
//# sourceMappingURL=modal.stories.57c086d5.js.map
