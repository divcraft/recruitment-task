import {useContext} from "react";
import {FilterContext} from "../globalState";

type colorListType = {
   hex: string,
   rgb: {
      red: number,
      green: number,
      blue: number,
   },
   saturation: number,
}[]

export const useFilter = (colorList: colorListType) => {
   
   const {filter} = useContext(FilterContext);
   let filteredList = colorList;

   filter.forEach(item => {
      const {name, isFlitered} = item;
      if (isFlitered) {
         if (name === 'red') {
            filteredList = filteredList.filter(color => color.rgb.red > 127);
         };
         if (name === 'green') {
            filteredList = filteredList.filter(color => color.rgb.green > 127);
         };
         if (name === 'blue') {
            filteredList = filteredList.filter(color => color.rgb.blue > 127);
         };
         if (name === 'saturation') {
            filteredList = filteredList.filter(color => color.saturation > 0.5);
         };
      };
   })
   
   filteredList.forEach(({rgb, saturation}) => console.log(rgb.red, rgb.green, rgb.blue, saturation));
   return filteredList;
}