export interface IControl{
  width?: number;
  height?: number;
  index?: number;
  newwidth?: number;
}

export class Control implements IControl{
  constructor(
    public width?: number,
    public height?: number,
    public index?: number,
    public newwidth?: number
  ){}
}
