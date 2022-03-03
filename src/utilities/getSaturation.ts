import { hexToRgb } from "./hexToRgb";

export const getSaturation = (hexValue: string) => {

   let {red, green, blue} = hexToRgb(hexValue);
   let lightness: number;
   let saturation: number;

   red = red/255;
   green = green/255;
   blue = blue/255;
   
   const minChannel = Math.min(red, green, blue);
   const maxChannel = Math.max(red, green, blue);
   const delta = maxChannel - minChannel;

   lightness = (maxChannel + minChannel) / 2;
   saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
   saturation = +(saturation * 100).toFixed(1);

   return saturation;
};