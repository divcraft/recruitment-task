import {FC, FormEvent, ChangeEvent, useState, useContext} from 'react';
import {ColorListContext} from '../../globalState';
import { getSaturation, hexToRgb } from '../../utilities/hexToRgb';

type validationType = {
   isValidated: boolean,
   message?: string,
}

const AddColorForm: FC = () => {

   const {colorList, setColorList} = useContext(ColorListContext);
   const [inputValue, setInputValue] = useState('');
   const [validationMessage, setValidationMessage] = useState('');

   const validateInput = (value: string): validationType => {
      if (value.length > 7) {
         return {
            isValidated: false,
         };
      };
      if (!inputValue && value[0] !== '#') {
         return {
            isValidated: false,
            message: 'Please type "#" sign first.',
         };
      };
      if (inputValue.length > 1 && value[0] !== '#') {
         return {
            isValidated: false,
            message: `The "#" sign can't be removed.`,
         };
      };
      for (let i = 1; i < value.length; i++) {
         const regex = value[i].match(/[a-f0-9]/i);
         if (!regex) {
            return {
               isValidated: false,
               message: 'Use only signs valid for hexadecimal RGB code (A-F, 0-9).',
            };
         };
      };
      return {
         isValidated: true,
      };
   };

   const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;
      const validation = validateInput(value);
      const {isValidated, message} = validation;
      isValidated && setInputValue(value.toUpperCase());
      setValidationMessage(message ? message : '');
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setColorList([...colorList, {
         hex: inputValue,
         rgb: hexToRgb(inputValue),
         saturation: getSaturation(inputValue),
      }]);
      setInputValue('');
      validationMessage && setValidationMessage('');
   };

   return (
      <div>
         <form>
            <input 
               type="text" 
               onChange={e => handleInput(e)}
               value={inputValue}
               placeholder="#000000"
            />
            <button 
               type='submit'
               onClick={e => handleSubmit(e)}
               disabled={!(inputValue.length === 7)}
            >
               Add color
            </button>
            {validationMessage && 
               <div className='validationText'>
                  {validationMessage}
               </div>
            }
         </form>
      </div>
   );
};

export default AddColorForm;