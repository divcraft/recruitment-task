import React, { useState } from 'react';
import { FilterType } from '../types/Filter.type';
import { ContextType } from '../types/Context.type';

const initValue = [
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

export const FilterContext = React.createContext({
   filter: initValue,
   setFilter: (filter: FilterType) => {},
});

export const FilterProvider = ({ children }: ContextType) => {
   const [filter, setFilter] = useState<FilterType>(initValue);
   return (
      <FilterContext.Provider value={{filter, setFilter}}>
         {children}
      </FilterContext.Provider>
   );
};
