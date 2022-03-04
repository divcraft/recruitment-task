export type ColorListType = {
   id: number,
   isPredefined: boolean,
   hex: string,
   rgb: {
      red: number,
      green: number,
      blue: number,
   },
   saturation: number,
}[];