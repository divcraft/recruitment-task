import { useState, createContext } from 'react';
import { ContextType, FilterType } from '../types';

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

export const FilterContext = createContext({
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
