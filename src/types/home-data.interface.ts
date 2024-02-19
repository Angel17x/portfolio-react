import { IconItem } from "./item.sidebar.interface";

export interface HomeData {
  greeting?:string
  name?:string;
  writeText?:string[];
  description?:string;
  textButton?:string;
  icon?: IconItem;
}
