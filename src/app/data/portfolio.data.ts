import { TimelineItem } from '../models/timeline-item.model';
import { ServiceItem } from '../models/service-item.model';
import { PortfolioItem } from '../models/portfolio-item.model';
import { PersonalInfoItem } from '../models/personal-info.model';

export const PERSONAL_INFO: PersonalInfoItem[] = [
  { label: 'Telefono', value: '+1 829 631 2829' },
  { label: 'Email', value: 'adelacruz6425@gmail.com' },
  { label: 'Edad', value: '20' },
  { label: 'Fecha de Nacimiento', value: '6 abr 2005' },
  { label: 'Nacionalidad', value: 'Dominicana' },
  { label: 'Domicilio', value: 'Santo Domingo Este' }
];

export const EDUCATION: TimelineItem[] = [
  {
    date: '2023 - Actual',
    title: 'Tecnólogo en Desarrollo de Software',
    description: 'Actualmente estoy cursando la carrera de Tecnólogo en Desarrollo de Software en el Instituto Tecnológico de las Américas (ITLA), desde 2023 hasta la fecha. A lo largo de mi formación, he adquirido conocimientos sólidos en el desarrollo de aplicaciones web, programación orientada a objetos, bases de datos, y metodologías ágiles, que me han permitido desarrollar habilidades prácticas y teóricas para enfrentar proyectos tecnológicos en el mundo real.'
  },
  {
    date: '2019 - 2023',
    title: 'Bachillerato Técnico en Desarrollo y Administración de aplicaciones Informáticas',
    description: 'Estudié en el Politécnico María de la Altagracia desde 2019 hasta 2023, donde obtuve el título de Bachiller Técnico en Desarrollo y Administración de Aplicaciones Informáticas. Durante mi formación, adquirí conocimientos fundamentales en programación, bases de datos, y desarrollo de aplicaciones, tanto web como de escritorio. Esta experiencia académica me proporcionó una sólida base técnica y práctica que ha sido esencial para mi crecimiento como desarrollador.'
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    date: '2025 - Actual',
    title: 'Simetrica Consulting',
    description: 'Actualmente me desempeño como Desarrollador Front-End en Simétrica Consulting, donde participo en el desarrollo y mantenimiento de aplicaciones web empresariales utilizando Angular y TypeScript. En este rol, trabajo principalmente en la evolución de un sistema ya existente, realizando mantenimiento, optimización de funcionalidades y desarrollo de nuevos componentes dentro de la arquitectura del proyecto. Mi trabajo también incluye la integración de APIs desarrolladas en C#, realizando pruebas y validaciones mediante Postman para asegurar el correcto consumo de los servicios desde el front-end. Además, utilizo herramientas colaborativas y de gestión como Bitbucket para control de versiones y Jira para la administración de tareas dentro de un flujo de trabajo ágil. Debido a la naturaleza corporativa del proyecto, también manejo VPNs y acceso remoto a servidores mediante Remote Desktop, así como Microsoft Teams para la coordinación con el equipo. Esta experiencia me ha permitido fortalecer mis competencias en desarrollo front-end moderno, integración con servicios backend y trabajo colaborativo dentro de entornos empresariales.'
  },
  {
    date: '2024 - 2025',
    title: 'Banco Popular Dominicano',
    description: 'Me desempeñé como Analista Programador Web en el Banco Popular Dominicano, uno de los principales bancos del país. En este rol, participé activamente en el desarrollo y mantenimiento de sitios web internos y externos de la institución, utilizando tecnologías como JavaScript, Vue.js, HTML, CSS y SharePoint Designer. Mi trabajo abarcó desde la creación de nuevas funcionalidades hasta la optimización de las ya existentes, siempre siguiendo buenas prácticas de desarrollo y metodologías ágiles. Esta experiencia me permitió fortalecer mis habilidades en front-end y ampliar mis conocimientos en el desarrollo de soluciones corporativas dentro de un entorno de alta exigencia y calidad tecnológica.'
  },
  {
    date: '2024 - 2024',
    title: 'Simetrica Consulting',
    description: 'Realicé una pasantía en Simetrica Consulting de manera remoto, una empresa de desarrollo de software, desde julio de 2024 hasta octubre de 2024. Durante ese período, me estuve desempeñando como desarrollador BackEnd, contribuyendo al diseño y la implementación de soluciones eficientes y escalables. Trabajé con tecnologías como ASP.NET Core, SQL Server y Entity Framework, mejorando mis habilidades técnicas y aprendiendo de la experiencia de trabajar en un entorno profesional de desarrollo ágil.'
  },
  {
    date: '2023 - 2024',
    title: 'Teleperformance',
    description: 'Trabajé en Teleperformance, un call center internacional, como Customer Bilingual Care Advocate desde diciembre de 2023 hasta mayo de 2024. En este puesto, brindé soporte al cliente en inglés, atendiendo consultas y resolviendo problemas de manera efectiva y profesional. Esta experiencia me permitió desarrollar fuertes habilidades de comunicación, trabajo bajo presión y atención al detalle, lo que me ayudó a gestionar interacciones complejas con clientes en un entorno dinámico.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    icon: 'code',
    title: 'Programación',
    description: 'Desarrollo de aplicaciones web y soluciones a medida, utilizando tecnologías modernas para crear software eficiente y escalable.'
  },
  {
    icon: 'laptop-code',
    title: 'Diseño Web',
    description: 'Creación de sitios web atractivos y funcionales, con un enfoque en la experiencia de usuario y la optimización para dispositivos móviles.'
  },
  {
    icon: 'palette',
    title: 'Edición de Videos',
    description: 'Edición de videos, enfocada en la narración visual y el impacto creativo, para contenido digital y redes sociales.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { image: 'recursos/Portafolio/1.jpg', link: 'https://simplybozz.github.io/encriptador-de-texto/' },
  { image: 'recursos/Portafolio/2.jpg', link: 'https://simplybozz.github.io/Aventuras-Website/' },
  { image: 'recursos/Portafolio/3.jpg', link: 'https://simplybozz.github.io/Shoes-Website/' },
  { image: 'recursos/Portafolio/4.jpg', link: 'https://simplybozz.github.io/PixelPerfect-Website/' },
  { image: 'recursos/Portafolio/5.jpg', link: 'https://simplybozz.github.io/Juego-Secreto/' },
  { image: 'recursos/Portafolio/6.jpg', link: 'https://github.com/simplybozz/EvaluacionTecnica-AngelDelaCruz-11092024.git' },
  { image: 'recursos/Portafolio/7.png', link: 'https://simplybozz.github.io/Rotation-Effect-Website/' },
  { image: 'recursos/Portafolio/8.png', link: 'https://simplybozz.github.io/Tic-Tac-Toe-EV/' },
  { image: 'recursos/Portafolio/9.png', link: 'https://simplybozz.github.io/ilMusic/' }
];
