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