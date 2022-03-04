import React, { useState } from 'react';
import { ColorListType } from '../types/ColorList.type';
import { ContextType } from '../types/Context.type';

const initvalue: ColorListType = [];

export const ColorListContext = React.createContext({
   colorList: [] as ColorListType,
   setColorList: (colorList: ColorListType) => {},
});

export const ColorListProvider = ({ children }: ContextType) => {
   const [colorList, setColorList] = useState<ColorListType>(initvalue);
   return (
      <ColorListContext.Provider value={{colorList, setColorList}}>
         {children}
      </ColorListContext.Provider>
   );
};
