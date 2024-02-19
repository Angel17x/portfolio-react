import React from "react";
import { aboutUsData } from "../../utils/data.utils";

export const AboutUsComponent:React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-light-primary-500 dark:bg-dark-primary-600 flex flex-col-reverse lg:flex-row xl:flex-row items-center">
      <div className="w-full md:w-2/3 p-8 flex flex-row lg:flex-col xl:flex-col justify-between items-center min-h-[40vh] h-full">
        <div className="mt-4 mx-4">
          <a href="http://www.facebook.com/" target="_blank" className="w-[3rem] h-[3rem] rounded-full cursor-pointer font-fantasque-bold items-center p-2 bg-light-slate-blue dark:bg-light-secondary hover:bg-light-primary-600 dark:hover:bg-gray-700 group flex justify-center text-center text-light-primary-700 dark:text-dark-primary-400 transition duration-75 group-hover:text-dark-primary-400 dark:group-hover:text-white">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 320 512"
            fill="currentColor"
            className="w-6 h-6 text-light-primary dark:text-dark-primary-600 transition duration-75"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
            </svg>
          </a>
        </div>
        <div className="mt-4 mx-4">
          <a href="http://www.linkedin.com/" target="_blank" className="w-[3rem] h-[3rem] rounded-full cursor-pointer font-fantasque-bold items-center p-2 bg-light-slate-blue dark:bg-light-secondary hover:bg-light-primary-600 dark:hover:bg-gray-700 group flex justify-center text-center text-light-primary-700 dark:text-dark-primary-400 transition duration-75 group-hover:text-dark-primary-400 dark:group-hover:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-6 h-6 text-light-primary dark:text-dark-primary-600 transition duration-75"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
        </div>
        <div className="mt-4 mx-4">
          <a href="http://www.instagram.com/" target="_blank" className="w-[3rem] h-[3rem] rounded-full cursor-pointer font-fantasque-bold items-center p-2 bg-light-slate-blue dark:bg-light-secondary hover:bg-light-primary-600 dark:hover:bg-gray-700 group flex justify-center text-center text-light-primary-700 dark:text-dark-primary-400 transition duration-75 group-hover:text-dark-primary-400 dark:group-hover:text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-6 h-6 text-light-primary dark:text-dark-primary-600 transition duration-75"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </div>
        <div className="w-full text-center mt-4">
          <p className="text-xl text-dark-primary dark:text-light-primary font-fantasque-bold">{aboutUsData.contact.position}</p>
          <h3 className="text-5xl font-fantasque-bold font-bold text-dark-primary dark:text-dark-secondary">{aboutUsData.contact.name}</h3>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-8">
        <div className="mr-7">
          <h2 className="text-2xl md:text-4xl font-bold text-dark-secondary mb-6 font-fantasque-regular">{aboutUsData.title}</h2>
          <div className="relative border-l-2 border-gray-200">
            {aboutUsData.descriptions.map((description: string, index: number) => (
              <div key={index} className="mb-10 flex items-center">
                <div className="absolute -left-[0.55rem] md:-left-[0.80rem] transform -translate-y-1/2 bg-dark-secondary rounded-full w-4 md:w-6 h-4 md:h-6"></div>
                <p className="ml-4 md:ml-8 text-sm md:text-base text-gray-700 dark:text-light-primary-600 font-fantasque-regular">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}