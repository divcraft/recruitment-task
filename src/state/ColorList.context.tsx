import React, { useState } from 'react';
import { ColorListType } from '../types/ColorList.type';
import { ContextType } from '../types/Context.type';

const initValue: ColorListType = [
   {
      id: 0,
      isPredefined: true,
      hex: '#000000',
      rgb: {
         red: 0,
         green: 0,
         blue: 0,
      },
      saturation: 0,
   },
   {
      id: 1,
      isPredefined: true,
      hex: '#FFFFFF',
      rgb: {
         red: 255,
         green: 255,
         blue: 255,
      },
      saturation: 0,
   },
   {
      id: 2,
      isPredefined: true,
      hex: '#FF0000',
      rgb: {
         red: 255,
         green: 0,
         blue: 0,
      },
      saturation: 1,
   },
   {
      id: 3,
      isPredefined: true,
      hex: '#00FF00',
      rgb: {
         red: 0,
         green: 255,
         blue: 0,
      },
      saturation: 1,
   },
   {
      id: 4,
      isPredefined: true,
      hex: '#0000FF',
      rgb: {
         red: 0,
         green: 0,
         blue: 255,
      },
      saturation: 1,
   },
   {
      id: 5,
      isPredefined: true,
      hex: '#FFFF00',
      rgb: {
         red: 255,
         green: 255,
         blue: 0,
      },
      saturation: 1,
   },
];

export const ColorListContext = React.createContext({
   colorList: [] as ColorListType,
   setColorList: (colorList: ColorListType) => {},
});

export const ColorListProvider = ({ children }: ContextType) => {
   const [colorList, setColorList] = useState<ColorListType>(initValue);
   return (
      <ColorListContext.Provider value={{colorList, setColorList}}>
         {children}
      </ColorListContext.Provider>
   );
};
