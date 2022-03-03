import React, { useState } from 'react';

export const ColorListContext = React.createContext({
   colorList: [] as string[],
   setColorList: (colorList: string[]) => {},
});

export const ContextProvider = ({ children }: any) => {
   const [colorList, setColorList] = useState<string[]>([]);
   return (
      <ColorListContext.Provider value={{colorList, setColorList}}>
         {children}
      </ColorListContext.Provider>
   );
};
