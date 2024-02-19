import React from "react";


export interface ButtonComponentProps {
  callback?: (call: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  type?:any;
}

export interface ButtonComponentDownloadProps {
  children: React.ReactNode;
  path:string
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ callback, type = 'button', children }) => {
  return (
    <button 
      className="bg-light-secondary dark:bg-dark-slate-blue px-4 py-4 rounded-md hover:bg-light-slate-blue dark:hover:bg-dark-secondary transition-all duration-500"
      type={type} 
      onClick={callback}
      >
        {children}
    </button>
  );
};

export const ButtonComponentDownload: React.FC<ButtonComponentDownloadProps> = ({ path, children }) => {
  return (
    <a 
      className="bg-light-secondary text-white dark:bg-dark-slate-blue px-4 py-4 rounded-md hover:bg-light-slate-blue dark:hover:bg-dark-secondary transition-all hover:shadow-sm shadow-light-secondary dark:shadow-dark-slate-blue duration-700"
      href={path}
      download>
        {children}
    </a>
  );
}