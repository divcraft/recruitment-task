import { ColorListType } from "../types/ColorList.type"

export const updateStoragedColors = (colorList: ColorListType) => {
   const storagedColors = colorList.filter(color => !color.isPredefined);
   if (storagedColors.length > 0) {
      localStorage.setItem('colorList', JSON.stringify(storagedColors));
   } else {
      localStorage.removeItem('colorList');
   };
};