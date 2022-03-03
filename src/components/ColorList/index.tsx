import {CSSProperties, FC, useContext} from 'react';
import {ColorListContext} from '../../globalState';
import "./style.scss";

const ColorList: FC = () => {
   const {colorList} = useContext(ColorListContext);
   return (
      <div>
         {colorList.length > 0 && 
            <ul className='listContainer'>
               {colorList.map(color => {
                  const hexRBG = { "--color": color } as CSSProperties;
                  return (
                     <li key={color} className='colorContainer'>
                        <div data-color='blue' style={hexRBG} className='colorRectangle'/>
                        <p className='colorLabel'>{color}</p>
                     </li>)
                  })}
            </ul>
         }
      </div>
   );
};

export default ColorList;