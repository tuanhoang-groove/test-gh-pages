import{C as d}from"./storefront-api-types.474ec89c.js";import{r as s}from"./index.42775f7d.js";import{P as S}from"./pill.beab1fbd.js";import{a as r,j as a,F as D}from"./jsx-runtime.8ac64c0a.js";import"./clsx.m.256e9345.js";import"./class-variants.691eef1c.js";function f(e,l){if(!(!e||!l))return Math.round(100-parseFloat(e)/parseFloat(l)*100)}function u({actual:e,full:l,code:n}){const[t,m]=s.exports.useState(null),v=f(e,l);return s.exports.useEffect(()=>{var o,c,i;n&&m((i=(c=(o=Number())==null?void 0:o.toLocaleString(void 0,{style:"currency",currency:n}))==null?void 0:c.replace("0.00",""))!=null?i:null)},[n]),r("div",{className:"flex flex-row items-center flex-wrap",children:[t?a("p",{className:"text-gray-600 contrast-more:text-black mr-1",children:t}):null,v&&v>0?r(D,{children:[a("p",{className:"font-body leading-inline text-gray-400 contrast-more:text-black line-through mr-1",children:l}),a("p",{className:"font-body leading-inline text-red-600 contrast-more:text-red-900 mr-1",children:e}),r(S,{variant:"sale",className:"mr-1",children:[v,"% off"]})]}):a("p",{className:"font-body leading-inline text-gray-600",children:e})]})}try{u.displayName="Price",u.__docgenInfo={description:"",displayName:"Price",props:{actual:{defaultValue:null,description:"",name:"actual",required:!1,type:{name:"string"}},full:{defaultValue:null,description:"",name:"full",required:!1,type:{name:"string"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"enum",value:[{value:'"AED"'},{value:'"AFN"'},{value:'"ALL"'},{value:'"AMD"'},{value:'"ANG"'},{value:'"AOA"'},{value:'"ARS"'},{value:'"AUD"'},{value:'"AWG"'},{value:'"AZN"'},{value:'"BAM"'},{value:'"BBD"'},{value:'"BDT"'},{value:'"BGN"'},{value:'"BHD"'},{value:'"BIF"'},{value:'"BMD"'},{value:'"BND"'},{value:'"BOB"'},{value:'"BRL"'},{value:'"BSD"'},{value:'"BTN"'},{value:'"BWP"'},{value:'"BYN"'},{value:'"BYR"'},{value:'"BZD"'},{value:'"CAD"'},{value:'"CDF"'},{value:'"CHF"'},{value:'"CLP"'},{value:'"CNY"'},{value:'"COP"'},{value:'"CRC"'},{value:'"CVE"'},{value:'"CZK"'},{value:'"DJF"'},{value:'"DKK"'},{value:'"DOP"'},{value:'"DZD"'},{value:'"EGP"'},{value:'"ERN"'},{value:'"ETB"'},{value:'"EUR"'},{value:'"FJD"'},{value:'"FKP"'},{value:'"GBP"'},{value:'"GEL"'},{value:'"GHS"'},{value:'"GIP"'},{value:'"GMD"'},{value:'"GNF"'},{value:'"GTQ"'},{value:'"GYD"'},{value:'"HKD"'},{value:'"HNL"'},{value:'"HRK"'},{value:'"HTG"'},{value:'"HUF"'},{value:'"IDR"'},{value:'"ILS"'},{value:'"INR"'},{value:'"IQD"'},{value:'"IRR"'},{value:'"ISK"'},{value:'"JEP"'},{value:'"JMD"'},{value:'"JOD"'},{value:'"JPY"'},{value:'"KES"'},{value:'"KGS"'},{value:'"KHR"'},{value:'"KID"'},{value:'"KMF"'},{value:'"KRW"'},{value:'"KWD"'},{value:'"KYD"'},{value:'"KZT"'},{value:'"LAK"'},{value:'"LBP"'},{value:'"LKR"'},{value:'"LRD"'},{value:'"LSL"'},{value:'"LTL"'},{value:'"LVL"'},{value:'"LYD"'},{value:'"MAD"'},{value:'"MDL"'},{value:'"MGA"'},{value:'"MKD"'},{value:'"MMK"'},{value:'"MNT"'},{value:'"MOP"'},{value:'"MRU"'},{value:'"MUR"'},{value:'"MVR"'},{value:'"MWK"'},{value:'"MXN"'},{value:'"MYR"'},{value:'"MZN"'},{value:'"NAD"'},{value:'"NGN"'},{value:'"NIO"'},{value:'"NOK"'},{value:'"NPR"'},{value:'"NZD"'},{value:'"OMR"'},{value:'"PAB"'},{value:'"PEN"'},{value:'"PGK"'},{value:'"PHP"'},{value:'"PKR"'},{value:'"PLN"'},{value:'"PYG"'},{value:'"QAR"'},{value:'"RON"'},{value:'"RSD"'},{value:'"RUB"'},{value:'"RWF"'},{value:'"SAR"'},{value:'"SBD"'},{value:'"SCR"'},{value:'"SDG"'},{value:'"SEK"'},{value:'"SGD"'},{value:'"SHP"'},{value:'"SLL"'},{value:'"SOS"'},{value:'"SRD"'},{value:'"SSP"'},{value:'"STD"'},{value:'"STN"'},{value:'"SYP"'},{value:'"SZL"'},{value:'"THB"'},{value:'"TJS"'},{value:'"TMT"'},{value:'"TND"'},{value:'"TOP"'},{value:'"TRY"'},{value:'"TTD"'},{value:'"TWD"'},{value:'"TZS"'},{value:'"UAH"'},{value:'"UGX"'},{value:'"USD"'},{value:'"UYU"'},{value:'"UZS"'},{value:'"VED"'},{value:'"VEF"'},{value:'"VES"'},{value:'"VND"'},{value:'"VUV"'},{value:'"WST"'},{value:'"XAF"'},{value:'"XCD"'},{value:'"XOF"'},{value:'"XPF"'},{value:'"XXX"'},{value:'"YER"'},{value:'"ZAR"'},{value:'"ZMW"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/price.client.tsx#Price"]={docgenInfo:u.__docgenInfo,name:"Price",path:"src/components/molecules/price.client.tsx#Price"})}catch{}var B={title:"Design System/Molecules/Price",component:u,parameters:{storySource:{source:`import {ComponentMeta, ComponentStory} from '@storybook/react';
import {CurrencyCode} from '@shopify/hydrogen/storefront-api-types';

import {Price as PriceComponent} from './price.client';

export default {
  title: 'Design System/Molecules/Price',
  component: PriceComponent,
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
} as ComponentMeta<typeof PriceComponent>;

const Template: ComponentStory<typeof PriceComponent> = (args) => (
  <PriceComponent {...args} />
);

export const FullPrice = Template.bind({});
FullPrice.args = {
  actual: '100.00',
  full: '100.00',
  code: CurrencyCode.Aud,
};

export const OnSale = Template.bind({});
OnSale.args = {
  actual: '100.00',
  full: '120.00',
  code: CurrencyCode.Aud,
};
`,locationsMap:{"full-price":{startLoc:{col:56,line:19},endLoc:{col:1,line:21},startBody:{col:56,line:19},endBody:{col:1,line:21}},"on-sale":{startLoc:{col:56,line:19},endLoc:{col:1,line:21},startBody:{col:56,line:19},endBody:{col:1,line:21}}}},viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}};const p=e=>a(u,{...e}),P=p.bind({});P.args={actual:"100.00",full:"100.00",code:d.Aud};const N=p.bind({});N.args={actual:"100.00",full:"120.00",code:d.Aud};const L=["FullPrice","OnSale"];export{P as FullPrice,N as OnSale,L as __namedExportsOrder,B as default};
//# sourceMappingURL=price.stories.1f93cc4f.js.map
