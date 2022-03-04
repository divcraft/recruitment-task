import React from 'react';
import { ContextType } from '../types/Context.type';
import { ColorListProvider } from './ColorList.context';
import { FilterProvider } from './Filter.context';

export const ContextProvider = ({ children }: ContextType) => {

   return (
      <ColorListProvider>
         <FilterProvider>
            {children}
         </FilterProvider>
      </ColorListProvider>
   );
};
