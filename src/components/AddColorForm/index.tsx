import {FormEvent, ChangeEvent, Component} from 'react';
import {ColorListContext} from '../../state/ColorList.context';
import {getSaturation} from '../../utilities/getSaturation';
import {hexToRgb} from '../../utilities/hexToRgb';
import { updateStoragedColors } from '../../utilities/updateStoragedColors';
import { validateInput } from '../../utilities/validateInput';
import { ColorListType } from '../../types/ColorList.type';
import './style.scss';

class AddColorForm extends Component {

   state = {
      inputValue: '',
      validationMessage: '',
   };

   handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;
      const {isValidated, message} = validateInput(value, this.state.inputValue);
      isValidated && this.setState({inputValue: value.toUpperCase()});
      this.setState({validationMessage: message ? message : ''});
   };

   handleSubmit = (
      e: FormEvent, 
      colorList: ColorListType, 
      setColorList: (colorList: ColorListType) => {}
   ) => {
      e.preventDefault();
      const updatedColorList = [...colorList, {
         id: colorList.length,
         isPredefined: false,
         hex: this.state.inputValue,
         rgb: hexToRgb(this.state.inputValue),
         saturation: getSaturation(this.state.inputValue),
      }];
      updateStoragedColors(updatedColorList);
      setColorList(updatedColorList);
      this.setState({inputValue: ''});
      this.state.validationMessage && this.setState({validationMessage: ''});
   };

   render() {
      const {inputValue, validationMessage} = this.state;
      const {colorList, setColorList} = this.context;
      return (
         <div className='addColorFormContainer'>
            <h1 className='title'>Color palette</h1>
            <form className='addColorForm'>
               <input 
                  className='inputColor'
                  type="text" 
                  onChange={e => this.handleInput(e)}
                  value={inputValue}
                  placeholder="#000000"
               />
               <button
                  className='addColorButon'
                  type='submit'
                  onClick={e => this.handleSubmit(e, colorList, setColorList)}
                  disabled={!(inputValue.length === 7)}
               >
                  Add color
               </button>
               {validationMessage && (
                  <div className='validationText'>
                     {validationMessage}
                  </div>
               )}
            </form>
         </div>
      );
   }
};

AddColorForm.contextType = ColorListContext;

export default AddColorForm;