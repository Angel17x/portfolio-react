
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { ButtonComponentDownload } from '../custom/button/buton.component';
import { HomeInformation } from '../../utils/data.utils';

export const HomeComponent: React.FC = () => {

  const onInitWriteText:((typewriter: TypewriterClass) => void) = (typewriter: TypewriterClass) => {
    const tpwrite = typewriter;
    HomeInformation.writeText?.forEach((text: string) => {
      tpwrite
        .typeString(text) // Escribe el texto
        .pauseFor(1000)   // Pausa después de escribir
        .deleteAll();     // Borra todo antes de continuar al siguiente texto
    });
    tpwrite.start();
  }





  return (
    <div className="min-h-screen h-screen w-full bg-light-primary-500 dark:bg-dark-primary-600 flex justify-center items-center flex-col">
      <form onSubmit={(e) => e.preventDefault()} className="w-full sm:w-3/4 md:w-3/4 lg:w-2/4 xl:w-2/4 p-7 md:p-0 lg:p-0 xl:p-0">
      <div className="flex justify-start items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2 w-5 h-5 text-yellow-400 dark:text-yellow-500 transition duration-75  group-hover:text-dark-primary-400 dark:group-hover:text-white"
          viewBox={HomeInformation.icon?.viewbox}
          fill={HomeInformation.icon?.fill}
          >
            {HomeInformation.icon?.path.map((x, i) => <path key={i} d={x.d}/>)}
        </svg>
        <h5 className="ml-2 text-light-secondary dark:text-dark-slate-blue text-lg md:text-2xl lg:text-2xl font-fantasque-bold font-bold">{HomeInformation.greeting}</h5>
      </div>
      <div className="flex justify-start mt-5">
        <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-dark-primary-400 dark:text-light-primary-400  font-fantasque-bold font-bold">{HomeInformation.name}</h1>
      </div>
      <div className="flex justify-start relative mt-5 text-dark-primary-400 dark:text-light-primary-400 text-lg md:text-2xl lg:text-2xl xl:text-2xl font-fantasque-regular">
        <Typewriter
          onInit={onInitWriteText}
          options={{ autoStart: true, loop: true, cursorClassName: 'Typewriter__cursor' }}
        />
      </div>
      <div className="flex justify-start relative mt-5 text-dark-primary-400 dark:text-light-primary-400 text-md  font-fantasque-bold font-bold">
        <p className='flex text-justify justify-start relative mt-5 text-dark-primary-600 dark:text-light-primary-600 text-sm md:text-lg lg:text-lg xl:text-lg text-md  font-fantasque-regular'>
          {HomeInformation.description}
        </p>
      </div>
      <div className="flex justify-start relative mt-5 text-dark-primary-400 dark:text-light-primary-400 text-md  font-fantasque-bold font-bold">
        <ButtonComponentDownload path={`/public/cv.pdf`}>
          {HomeInformation.textButton}
        </ButtonComponentDownload>
      </div>
      </form>
    </div>
  );
}