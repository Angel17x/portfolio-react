import { useTheme } from "../../hooks/theme";
import { ItemSidebar, PathIconItem } from "../../types/item.sidebar";
import { headers, footers } from "./data/list.items";

const Sidebar = () => {
  const themeState = useTheme().theme;
  const footer = footers.find(x => x.name === themeState);

  return (
    <>
      <aside id="separator-sidebar" className="fixed md:sticky lg:sticky xl:sticky top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-xl" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-light-primary-500 dark:bg-dark-primary flex flex-col justify-between">
            <ul className="space-y-2 font-medium">
              {headers.map((item:ItemSidebar, i:number) => {
                return (
                  <li key={item.name}>
                    <a href="#" className="font-fantasque-bold items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-light-primary-600 dark:hover:bg-gray-700 group flex justify-center">
                      <svg 
                        key={i}
                        viewBox={item.icon.viewbox} 
                        fill={item.icon.fill} 
                        className="w-5 h-5 text-light-primary-700 dark:text-dark-primary-400 transition duration-75  group-hover:text-dark-primary-400 dark:group-hover:text-white" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                        >
                          {item.icon.path.map((path:PathIconItem, index:number) => (
                            <path
                              key={index} 
                              d={path.d}/>
                          ))}
                      </svg>
                      
                      {/* <span className="ms-3">{item.name}</span> */}
                    </a>
                  </li>
                )
              })}
              
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li key={footer?.name}>
                <a href="#" onClick={useTheme().toggleTheme} className="font-fantasque-bold items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-light-primary-600 dark:hover:bg-gray-700 group flex justify-center">
                  <svg 
                    key={footer?.name}
                    viewBox={footer?.icon.viewbox} 
                    fill={footer?.icon.fill} 
                    className="w-5 h-5 text-light-primary-700 dark:text-dark-primary-400 transition duration-75  group-hover:text-dark-primary-400 dark:group-hover:text-white" 
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                    >
                      {footer?.icon.path.map((path:PathIconItem, index:number) => (
                        <path
                          key={index} 
                          d={path.d}/>
                      ))}
                  </svg>
                  
                  {/* <span className="ms-3">{item.name}</span> */}
                </a>
              </li>
            </ul>
        </div>
      </aside>
      
    </>
  );
}

export default Sidebar;