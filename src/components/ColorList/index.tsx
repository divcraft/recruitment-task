import {CSSProperties, FC, useContext} from 'react';
import {ColorListContext} from '../../globalState';
import { hexToRgb } from '../../utilities/hexToRgb';
import "./style.scss";

const ColorList: FC = () => {

   let {colorList} = useContext(ColorListContext); 
   const rgbList = colorList.map(color => ({
         rgb: hexToRgb(color),
         hex: color,
      }));

   const orderedList = rgbList
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