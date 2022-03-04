import {FC, useContext} from 'react';
import {FilterContext} from '../../state/Filter.context';
import './style.scss';

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
      <div className='filterFormContainer'>
         <h2 className='subtitle'>Filter options:</h2>
         <form className='filterForm'>
               {filter.map(({name, isFlitered}) => (
                  <div 
                     className='checkboxContainer' 
                     key={name}
                  >
                     <input 
                        className='checkboxInput'
                        type="checkbox" 
                        name="filter-color" 
                        id={`filter-${name}`}
                        checked={isFlitered}
                        onChange={() => handleCheckbox(name)}
                     />
                     <label
                        className='checkboxLabel' 
                        htmlFor={`filter-${name}`} 
                     >
                        {`${name} > 50%`}
                     </label>
                  </div>
               ))}
         </form>
      </div>
   );
};

export default FilterColorForm;