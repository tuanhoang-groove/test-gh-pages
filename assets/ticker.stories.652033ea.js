import{r as t}from"./index.42775f7d.js";import{c as f}from"./clsx.m.256e9345.js";import{j as a}from"./jsx-runtime.8ac64c0a.js";function n(e){const i=()=>({width:e.current.offsetWidth,height:e.current.offsetHeight}),[m,s]=t.exports.useState({width:0,height:0});return t.exports.useEffect(()=>{const r=()=>{s(i())};return e.current&&s(i()),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[e]),m}try{n.displayName="useContainerDimensions",n.__docgenInfo={description:"",displayName:"useContainerDimensions",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/hooks/use-container-dimensions.tsx#useContainerDimensions"]={docgenInfo:n.__docgenInfo,name:"useContainerDimensions",path:"src/hooks/use-container-dimensions.tsx#useContainerDimensions"})}catch{}function o({children:e,className:i,...m}){const[s,r]=t.exports.useState(!1),l=t.exports.useRef(null),d=t.exports.useRef(null),{width:c}=n(l),{width:u}=n(d);return t.exports.useEffect(()=>{const p=typeof c!==void 0&&typeof u!==void 0&&c>u;r(p)},[c,u]),a("div",{ref:d,className:f("flex overflow-x-hidden ",i),children:a("div",{className:s?"animate-marquee whitespace-nowrap":"",children:a("div",{ref:l,className:"whitespace-nowrap",children:e})})})}try{o.displayName="Ticker",o.__docgenInfo={description:"",displayName:"Ticker",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ticker.client.tsx#Ticker"]={docgenInfo:o.__docgenInfo,name:"Ticker",path:"src/components/molecules/ticker.client.tsx#Ticker"})}catch{}var v={title:"Design System/Molecules/Ticker",component:o,parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Ticker as TickerComponent} from '~/components/molecules/ticker.client';

export default {
  title: 'Design System/Molecules/Ticker',
  component: TickerComponent,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof TickerComponent>;

const Template: ComponentStory<typeof TickerComponent> = (args: any) => (
  <TickerComponent className="max-w-2xl">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
    aliquid atque consequuntur delectus dolore dolorum ducimus facilis illum
    iusto laudantium magnam magni modi rem, sapiente tenetur ut voluptatem
    voluptatibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Accusantium aliquid atque consequuntur delectus dolore dolorum ducimus
    facilis illum iusto laudantium magnam magni modi rem, sapiente tenetur ut
    voluptatem voluptatibus voluptatum.
  </TickerComponent>
);

export const Ticker = Template.bind({});
`,locationsMap:{ticker:{startLoc:{col:57,line:17},endLoc:{col:1,line:27},startBody:{col:57,line:17},endBody:{col:1,line:27}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}};const T=e=>a(o,{className:"max-w-2xl",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque consequuntur delectus dolore dolorum ducimus facilis illum iusto laudantium magnam magni modi rem, sapiente tenetur ut voluptatem voluptatibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid atque consequuntur delectus dolore dolorum ducimus facilis illum iusto laudantium magnam magni modi rem, sapiente tenetur ut voluptatem voluptatibus voluptatum."}),k=T.bind({}),C=["Ticker"];export{k as Ticker,C as __namedExportsOrder,v as default};
//# sourceMappingURL=ticker.stories.652033ea.js.map
