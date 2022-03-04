import { ValidationType } from '../types/Validation.type';

export const validateInput = (value: string, inputValue: string): ValidationType => {
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