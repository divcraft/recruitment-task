import React, { useState } from 'react';

type colorListType = {
   hex: string,
   rgb: {
      red: number,
      green: number,
      blue: number,
   },
   saturation: number,
}[]

export const ColorListContext = React.createContext({
   colorList: [] as colorListType,
   setColorList: (colorList: colorListType) => {},
});

export const ContextProvider = ({ children }: any) => {
   const [colorList, setColorList] = useState<colorListType>([]);
   return (
      <ColorListContext.Provider value={{colorList, setColorList}}>
         {children}
      </ColorListContext.Provider>
   );
};
