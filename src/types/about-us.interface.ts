import { IconItem } from "./item.sidebar.interface";

export interface AboutUsInterface {
  title:string;
  descriptions:string[]; 
  contact:ContactInterface;
  icons?:AboutIconsInterface;
}

export interface AboutIconsInterface {
  url:string;
  icon:IconItem;
}

export interface ContactInterface {
  name:string;
  birthdate:string;
  age:string;
  address:string;
  phone:string;
  email:string;
  position:string;

}
