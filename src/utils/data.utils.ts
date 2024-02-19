import { AboutUsInterface } from "../types/about-us.interface";
import { HomeData } from "../types/home-data.interface";
import { ItemSidebar } from "../types/item.sidebar.interface";

export const HomeInformation:HomeData = {
  greeting: 'Hola, Mi Nombre Es',
  name: 'Angel Lugo',
  writeText: [
    'Soy Desarrollador Full-Stack',
    'Desarrollo APIs Escalables',
    'Desarrollo Tus Aplicaciones Móviles'
  ],
  description: 'Soy Desarrollador Fullstack, con experiencia en frontend, backend y desarrollo móvil. Me dedico a construir aplicaciones web responsivas y apps móviles, siempre enfocado en la usabilidad y la eficiencia. Estoy comprometido con la entrega de soluciones digitales que sean efectivas, accesibles y fáciles de mantener.',
  textButton: 'Descargar CV',
  icon: {
    fill: 'currentColor',
    viewbox: '0 0 512 512',
    path:[
      {d: 'M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z'}
    ]
  }
}


export const headers:ItemSidebar[] = [
  {
    name: 'Home',
    icon: {
      viewbox: '0 0 24 24',
      fill: 'currentColor',
      path: [{
        d: 'm21.665 11.253-9-8a1 1 0 0 0 -1.33 0l-9 8a1 1 0 1 0 1.33 1.494l.335-.3v7.553a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.551l.335.3a1 1 0 1 0 1.33-1.494z',
        rect: null
      }]
    }
  },
  {
    name: 'About Us',
    icon: {
      viewbox: '0 0 512 512',
      fill: 'currentColor',
      path: [{
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z',
        rect: null
      }]
    }
  },
];

export const footers:ItemSidebar[] = [
  {
    name: 'dark',
    icon: {
      viewbox: '0 0 512 512',
      fill: 'currentColor',
      path: [{
        d: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z',
        rect: null
      }]
    }
  },
  {
    name: 'light',
    icon: {
      viewbox: '0 0 384 512',
      fill: 'currentColor',
      path: [{
        d: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z',
        rect: null
      }]
    }
  },
  
]


export const aboutUsData:AboutUsInterface = {
  title: 'Sobre Mí',
  descriptions: [
    '¡Hola! Soy Ángel Lugo, un apasionado y versátil desarrollador de software originario de Miranda, Venezuela. Con 26 años, mi trayectoria profesional se ha centrado en la creación de soluciones tecnológicas innovadoras, abarcando desde el desarrollo móvil hasta la programación backend y frontend.',
    'Como desarrollador móvil, me sumerjo en el mundo de las aplicaciones nativas y multiplataforma, siempre buscando la fluidez y eficiencia que los usuarios esperan en sus dispositivos de mano. En el backend, me concentro en arquitecturas robustas y seguras que sirven como la columna vertebral de las aplicaciones, asegurando que los datos fluyan sin problemas y de manera confiable. Mientras tanto, en el frontend, mi objetivo es materializar ideas en experiencias visuales que hablen por sí mismas, combinando estética y funcionalidad.',
    'Mi educación en ciencias de la computación y mi incansable búsqueda de conocimiento me han llevado a dominar una variedad de tecnologías y lenguajes de programación. Aunque el aprendizaje es un viaje sin fin, me enorgullezco de mantenerme actualizado con las últimas tendencias y mejores prácticas de la industria para entregar productos que no solo cumplen, sino que superan las expectativas.',
    'Bienvenido a mi mundo, donde la tecnología se encuentra con la creatividad y donde cada línea de código es un paso hacia el futuro.'
  ],
  contact: {
    name: 'Angel Lugo',
    age: '26 años',
    address: 'Miranda, Venezuela',
    phone: '(+58) 414 237 4668',
    email: 'angel26078613@gmail.com',
    birthdate: '1998-01-05',
    position: 'Desarrollador Full Stack'
  }
}