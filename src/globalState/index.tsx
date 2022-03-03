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

type filterType = {
   name: string,
   isFlitered: boolean
}[]

const filterInitValue = [
   {
      name: 'red',
      isFlitered: false,
   },
   {
      name: 'green',
      isFlitered: false,
   },
   {
      name: 'blue',
      isFlitered: false,
   },
   {
      name: 'saturation',
      isFlitered: false,
   },
];

export const ColorListContext = React.createContext({
   colorList: [] as colorListType,
   setColorList: (colorList: colorListType) => {},
});

export const FilterContext = React.createContext({
   filter: filterInitValue,
   setFilter: (filter: filterType) => {},
});

export const ContextProvider = ({ children }: any) => {

   const [colorList, setColorList] = useState<colorListType>([]);
   const [filter, setFilter] = useState<filterType>(filterInitValue);

   return (
      <ColorListContext.Provider value={{colorList, setColorList}}>
         <FilterContext.Provider value={{filter, setFilter}}>
            {children}
         </FilterContext.Provider>
      </ColorListContext.Provider>
   );
};
