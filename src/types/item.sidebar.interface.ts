export interface ItemSidebar {
  name:string;
  icon:IconItem;
}

export interface IconItem {
  viewbox:string;
  fill:string;
  path:PathIconItem[];
}

export interface PathIconItem{
  d:string;
  rect?:string | null;
}