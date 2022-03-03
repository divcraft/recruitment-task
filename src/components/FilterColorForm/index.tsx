import {FC, useContext} from 'react';
import {FilterContext} from '../../globalState';

const FilterColorForm: FC = () => {

   const {filter, setFilter} = useContext(FilterContext);

   const handleCheckbox = (filterName: string) => {
      const newFilter = filter.map(filterItem => {
         if (filterItem.name === filterName) {
            return {
               ...filterItem,
               isFlitered: !filterItem.isFlitered,
            }
         } else {
            return filterItem;
         };
      })

      setFilter(newFilter);
   };

   return (
      <div>
         <form>
               {filter.map(({name, isFlitered}) => (
                  <div key={name}>
                     <input 
                        type="checkbox" 
                        name="filter-color" 
                        id={`filter-${name}`}
                        checked={isFlitered}
                        onChange={() => handleCheckbox(name)}
                     />
                     <label htmlFor={`filter-${name}`} >
                        {`${name} > 50%`}
                     </label>
                  </div>
               ))}
         </form>
      </div>
   );
};

export default FilterColorForm;