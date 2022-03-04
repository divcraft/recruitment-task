import { ContextType } from '../types';
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
