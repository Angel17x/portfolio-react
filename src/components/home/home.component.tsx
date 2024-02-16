
import Typewriter, { TypewriterClass } from 'typewriter-effect';

export const HomeComponent: React.FC = () => {

  const onInitWriteText = (typewriter: TypewriterClass) => {
    typewriter
      .typeString('Soy Desarrollador Full-Stack')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Desarrollo APIs Escalables')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Desarrollo Tus Aplicaciones Móviles')
      .pauseFor(1000)
      .deleteAll()
      .start();
  }

  return (
    <div className="min-h-screen w-full bg-light-primary-500 dark:bg-dark-primary-600 flex justify-center items-center flex-col">
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-2/4 xl:w-2/4 p-7 md:p-0 lg:p-0 xl:p-0">
      <div className="flex justify-start items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2 w-5 h-5 text-yellow-400 dark:text-yellow-500 transition duration-75  group-hover:text-dark-primary-400 dark:group-hover:text-white"
          viewBox="0 0 512 512"
          fill="currentColor">
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z" />
        </svg>
        <h5 className="ml-2 text-light-secondary dark:text-dark-slate-blue text-2xl font-fantasque-bold font-bold">Hola, Mi Nombre Es</h5>
      </div>
      <div className="flex justify-start">
        <h1 className="text-6xl text-dark-primary-400 dark:text-light-primary-400  font-fantasque-bold font-bold">Angel Lugo</h1>
      </div>
      <div className="flex justify-start relative mt-2 text-dark-primary-400 dark:text-light-primary-400 text-2xl  font-fantasque-bold font-bold">
        <Typewriter
          onInit={onInitWriteText}
          options={{ autoStart: true, loop: true, cursorClassName: 'Typewriter__cursor' }}
        />
      </div>
      <div className="flex justify-start relative mt-2 text-dark-primary-400 dark:text-light-primary-400 text-md  font-fantasque-bold font-bold">
        <p className='flex text-justify justify-start relative mt-2 text-dark-primary-600 dark:text-light-primary-600 text-md  font-fantasque-regular'>
          Soy Desarrollador Fullstack, con experiencia en frontend, backend y desarrollo móvil. Me dedico a construir aplicaciones web responsivas y apps móviles, siempre enfocado en la usabilidad y la eficiencia. Estoy comprometido con la entrega de soluciones digitales que sean efectivas, accesibles y fáciles de mantener.
        </p>
      </div>
      </div>
    </div>
  );
}