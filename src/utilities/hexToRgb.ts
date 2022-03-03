export const hexToRgb = (hexValue: string) => {

   let red: string | number = hexValue.slice(1, 3);
   let green: string | number = hexValue.slice(3, 5);
   let blue: string | number = hexValue.slice(5, 7);

   red = parseInt(red, 16);
   green = parseInt(green, 16);
   blue = parseInt(blue, 16);

   return {
      red,
      green,
      blue,
   };
};

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