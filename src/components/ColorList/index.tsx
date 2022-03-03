import {CSSProperties, FC, useContext} from 'react';
import {ColorListContext} from '../../globalState';
import { useFilter } from '../../utilities/useFilter';
import "./style.scss";

const ColorList: FC = () => {

   const {colorList} = useContext(ColorListContext); 
   const filteredList = useFilter(colorList);
   const orderedList = filteredList
      .sort((a, b) => b.rgb.blue - a.rgb.blue)
      .sort((a, b) => b.rgb.green - a.rgb.green)
      .sort((a, b) => b.rgb.red - a.rgb.red);
      
   return (
      <div>
         {colorList.length > 0 && 
            <ul className='listContainer'>
               {orderedList.map(color => {
                  const hexRBG = { "--color": color.hex } as CSSProperties;
                  return (
                     <li key={color.hex} className='colorContainer'>
                        <div data-color='blue' style={hexRBG} className='colorRectangle'/>
                        <p className='colorLabel'>{color.hex}</p>
                     </li>)
                  })}
            </ul>
         }
      </div>
   );
};

export default ColorList;