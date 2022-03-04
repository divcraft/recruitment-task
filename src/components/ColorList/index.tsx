import {CSSProperties, FC, useContext} from 'react';
import {ColorListContext} from '../../state/ColorList.context';
import { useFilter } from '../../hooks/useFilter';
import { updateStoragedColors } from '../../utilities/updateStoragedColors';
import './style.scss';

const ColorList: FC = () => {

   const {colorList, setColorList} = useContext(ColorListContext); 
   const filteredList = useFilter(colorList);
   const orderedList = filteredList
      .slice(0) 
      .sort((a, b) => b.rgb.blue - a.rgb.blue)
      .sort((a, b) => b.rgb.green - a.rgb.green)
      .sort((a, b) => b.rgb.red - a.rgb.red);
   
   const handleRemoveColor = (id: number) => {
      let updatedList = colorList;
      updatedList = updatedList.filter(color => color.id !== id);
      updatedList = updatedList.map((color, index) => ({
         ...color,
         id: index,
      }));
      updateStoragedColors(updatedList);
      setColorList(updatedList);
   };
      
   return (
      <>
         {colorList.length > 0 && 
            <ul className='listContainer'>
               {orderedList.map(color => {
                  const hexRBG = { "--color": color.hex } as CSSProperties;
                  return (
                     <li key={color.id} className='colorContainer'>
                        <div 
                           style={hexRBG} 
                           className='colorRectangle'
                           />
                        <p className='colorLabel'>{color.hex}</p>
                        {!color.isPredefined && (
                           <button 
                              onClick={() => handleRemoveColor(color.id)}
                              type='button'
                              className='removeButton'
                           />
                        )}
                     </li>)
                  })}
            </ul>
         }
      </>
   );
};

export default ColorList;