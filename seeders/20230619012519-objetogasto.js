'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('objetogastos', [
      // PERSONAL PERMANENTE 11000
      {
        nombre: "Sueldos Básicos",
        identificador: 11100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sueldos Básicos Educación",
        identificador: 11200,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sueldos Básicos Docentes",
        identificador: 11210,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sueldos Básicos Docentes Administrativos",
        identificador: 11220,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Retribuciones a Personal Directo y de Control",
        identificador: 11300,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Adicionales",
        identificador: 11400,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes",
        identificador: 11510,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimocuarto mes",
        identificador: 11520,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes Docentes",
        identificador: 11530,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes Docentes Administrativos",
        identificador: 11540,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimocuarto mes Docentes",
        identificador: 11550,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Complementos",
        identificador: 11600,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto Nacional de Jubilaciones y Pensiones de los empleados y funcionarios del Poder Ejecutivo",
        identificador: 11710,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto Nacional de Previsión del Magisterio",
        identificador: 11720,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Militar - Cuota Patronal",
        identificador: 11731,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Militar - Regimen de Riesgos Especiales",
        identificador: 11732,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Militar - Reserva Laboral",
        identificador: 11733,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Social de los Empleados de la Universidad Autónoma de Honduras",
        identificador: 11740,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Seguro Social",
        identificador: 11750,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto Nacional de Formación Profesional",
        identificador: 11760,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otras Contribuciones Patronales",
        identificador: 11790,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Dietas",
        identificador: 11800,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Servicios Personales",
        identificador: 11990,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // PERSONAL NO PERMANENTE 12000
      {
        nombre: "Sueldos Básicos",
        identificador: 12100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Jornales",
        identificador: 12200,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Adicionales",
        identificador: 12300,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes",
        identificador: 12410,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimocuarto mes",
        identificador: 12420,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contratos Especiales",
        identificador: 12910,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Servicios Personales",
        identificador: 12990,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Asignaciones Familiares",
        identificador: 13000,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 14000 retribuciones familiares
      {
        nombre: "Horas extraordinarias",
        identificador: 14100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de representación en el exterior",
        identificador: 14200,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de representación en el país",
        identificador: 14300,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de representación en el exterior para funcionarios",
        identificador: 14400,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ASISTENCIA SOCIAL AL PERSONAL",
        identificador: 15000,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Seguro de Riesgo de Trabajo",
        identificador: 15100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otras Asistencia Social al Personal",
        identificador: 15900,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Beneficios y Compensaciones",
        identificador: 16000,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIOS NO PERSONALES",
        identificador: 20000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIOS BASICOS",
        identificador: 21000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Energía Eléctrica",
        identificador: 21100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Agua",
        identificador: 21200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gas",
        identificador: 21300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "COMUNICACIONES",
        identificador: 21400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Correo Postal",
        identificador: 21410,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Telefonía Fija",
        identificador: 21420,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Telefonía Celular",
        identificador: 21430,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Télex y Telefax",
        identificador: 21440,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Servicios Básicos",
        identificador: 21490,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ALQUILERES Y DERECHOS SOBRE BIENES INTANGIBLES",
        identificador: 22000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Edificios, Viviendas y Locales",
        identificador: 22100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ALQUILER DE EQUIPOS Y MAQUINARIAS",
        identificador: 22200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipos y Maquinarias de Producción",
        identificador: 22210,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipos de Transporte, Tracción y Elevación",
        identificador: 22220,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipos Sanitarios y de Laboratorio",
        identificador: 22230,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipo Educacional",
        identificador: 22240,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipo para Computación",
        identificador: 22250,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipo de Oficina y Muebles",
        identificador: 22260,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Equipos de Comunicación",
        identificador: 22270,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Tierras y Terrenos",
        identificador: 22300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Derechos sobre Bienes Intangibles",
        identificador: 22400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alquiler de Espacios de Comunicación",
        identificador: 22500,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Alquileres",
        identificador: 22900,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "MANTENIMIENTO, REPARACIONES Y LIMPIEZA",
        identificador: 23000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Edificios y Locales",
        identificador: 23100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Equipos y Medios de Transporte",
        identificador: 23200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "MANTENIMIENTO Y REPARACION DE MAQUINARIA Y EQUIPO",
        identificador: 23300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Equipos y Maquinarias de Producción",
        identificador: 23310,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Equipos de Tracción y Elevación",
        identificador: 23320,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Equipos Sanitarios y de Laboratorio",
        identificador: 23330,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Equipo Educacional",
        identificador: 23340,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          {
        nombre: "Mantenimiento y Reparación de Equipo para Computación",
        identificador: 23350,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Equipo de Oficina y Muebles",
        identificador: 23360,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          {
        nombre: "Mantenimiento y Reparación de Equipos de Comunicación",
        identificador: 23370,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Mantenimiento y Reparación de Otros Equipos",
        identificador: 23390,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          {
        nombre: "Mantenimiento y Reparación de Obras Civiles e Instalaciones Varias",
        identificador: 23400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Limpieza, Aseo y Fumigación",
        identificador: 23500,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          {
        nombre: "Mantenimiento de Sistemas Informáticos",
        identificador: 23600,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIOS PROFESIONALES",
        identificador: 24000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          {
        nombre: "Servicios Médicos, Sanitarios y Sociales",
        identificador: 24100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Estudios, Investigaciones y Análisis de Factibilidad",
        identificador: 24200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          {
        nombre: "Servicios Jurídicos",
        identificador: 24300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Servicios de Contabilidad y Auditoría",
        identificador: 24400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        nombre: "Servicios de Capacitación",
        identificador: 24500,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Servicios de Informática y Sistemas Computarizados",
        identificador: 24600,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        nombre: "Otros Servicios Técnicos Profesionales",
        identificador: 24900,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIOS COMERCIALES Y FINANCIEROS",
        identificador: 25000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        nombre: "Servicio de Transporte",
        identificador: 22100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Servicio de Almacenamiento",
        identificador: 25200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        nombre: "Servicio de Imprenta, Publicaciones y Reproducciones",
        identificador: 25300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Primas y Gastos de Seguro",
        identificador: 25400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
         {
        nombre: "Comisiones y Gastos Bancarios",
        identificador: 25500,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Publicidad y Propaganda",
        identificador: 25600,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Servicio de Internet",
        identificador: 25700,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Servicios Comerciales y Financieros",
        identificador: 25900,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PASAJES Y VIATICOS",
        identificador: 26000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PASAJES",
        identificador: 26100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Pasajes Nacionales",
        identificador: 26110,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Pasajes al Exterior",
        identificador: 26120,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "VIATICOS",
        identificador: 26200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Viáticos Nacionales",
        identificador: 26210,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Viáticos al Exterior",
        identificador: 26220,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "IMPUESTOS, DERECHOS, TASAS Y GASTOS JUDICIALES",
        identificador: 27000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "IMPUESTOS",
        identificador: 27100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "IMPUESTOS NACIONALES",
        identificador: 27710,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre la Renta de Personas Jurídicas",
        identificador: 27111,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportación Solidaria Temporaria",
        identificador: 27112,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre la Producción Forestal",
        identificador: 27113,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre Venta- 12%",
        identificador: 27114,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre Venta- 15%",
        identificador: 27115,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuestos a Servicios de Vías Publicas",
        identificador: 27116,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "IMPUESTOS MUNICIPALES",
        identificador: 27120,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre Industria, Comercio y Servicios",
        identificador: 27121,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre Bienes Inmuebles",
        identificador: 27122,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre Ingresos Personales",
        identificador: 27123,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto sobre Extracción o Explotación de Recursos",
        identificador: 27124,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuesto Pecuario",
        identificador: 27125,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Impuestos Municipales Varios",
        identificador: 27129,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TASAS Y DERECHOS",
        identificador: 27200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Tasas",
        identificador: 27210,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Derechos",
        identificador: 27220,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Multas y Recargos",
        identificador: 27300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Cánones y Regalías",
        identificador: 27400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos Judiciales",
        identificador: 27500,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS SERVICIOS NO PERSONALES",
        identificador: 29000,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ceremonial y Protocolo",
        identificador: 29100,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Servicios de Vigilancia",
        identificador: 29200,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Actuaciones Deportivas",
        identificador: 29300,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        nombre: "Actuaciones Artísticas",
        identificador: 29400,
        idgrupo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "MATERIALES Y SUMINISTROS",
        identificador: 30000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ALIMENTOS, PRODUCTOS AGROPECUARIOS Y FORESTALES",
        identificador: 31000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alimentos y Bebidas para Personas",
        identificador: 31100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Alimentos para Animales",
        identificador: 31200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Pecuarios",
        identificador: 31300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRODUCTOS AGROFORESTALES",
        identificador: 31400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Agrícolas",
        identificador: 31410,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Forestales",
        identificador: 31420,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Madera, Corcho y sus Manufacturas",
        identificador: 31500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TEXTILES Y VESTUARIO",
        identificador: 32000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Hilados y Telas",
        identificador: 32100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Confecciones Textiles",
        identificador: 32200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Prendas de Vestir",
        identificador: 32300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Calzados",
        identificador: 32400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRODUCTOS DE PAPEL Y CARTON",
        identificador: 33000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Papel de Escritorio",
        identificador: 33100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Papel para Computación",
        identificador: 33200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Artes Gráficas",
        identificador: 33300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Papel y Cartón",
        identificador: 33400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Libros, Revistas y Periódicos",
        identificador: 33500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Textos de Enseñanza",
        identificador: 33600,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Especies Timbradas y Valores",
        identificador: 33700,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CUEROS, PIELES Y SUS PRODUCTOS",
        identificador: 34000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Cueros y Pieles",
        identificador: 34100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Artículos de Cuero",
        identificador: 34200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Artículos de Caucho",
        identificador: 34300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Llantas y Cámaras de Aire",
        identificador: 34400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRODUCTOS QUIMICOS, FARMACEUTICOS, COMBUSTIBLES Y LUBRICANTES",
        identificador: 35000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Químicos",
        identificador: 35100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Farmacéuticos y Medicinales",
        identificador: 35200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Farmacéuticos y Medicinales Varios",
        identificador: 35210,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Vacunas",
        identificador: 35220,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Antirretrovirales",
        identificador: 35230,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Anticonceptivos",
        identificador: 35240,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Abonos y Fertilizantes",
        identificador: 35300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Insecticidas, Fumigantes y Otros",
        identificador: 35400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Tintas, Pinturas y Colorantes",
        identificador: 35500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "COMBUSTIBLES Y LUBRICANTES",
        identificador: 35600,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gasolina",
        identificador: 35610,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Diesel",
        identificador: 35620,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Kerosén",
        identificador: 35630,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gas LPG",
        identificador: 35640,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aceites y Grasas Lubricantes",
        identificador: 35650,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Bunker",
        identificador: 35660,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Específicos Veterinarios",
        identificador: 35700,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Material Plástico",
        identificador: 35800,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS PRODUCTOS QUIMICOS",
        identificador: 35900,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Explosivos y de Pirotecnia",
        identificador: 35910,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Fotoquímicos",
        identificador: 35920,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Químicos de Uso Personal",
        identificador: 35930,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRODUCTOS METALICOS",
        identificador: 36000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Ferrosos",
        identificador: 36100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos no Ferrosos",
        identificador: 36200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Estructuras Metálicas Acabadas",
        identificador: 36300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Herramientas Menores",
        identificador: 36400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Material de Guerra y Seguridad",
        identificador: 36500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS PRODUCTOS METALICOS",
        identificador: 36900,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Hojalata",
        identificador: 36910,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Accesorios de Metal",
        identificador: 36920,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Elementos de Ferretería",
        identificador: 36930,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRODUCTOS MINERALES NO METALICOS",
        identificador: 37000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Arcilla y Cerámica",
        identificador: 37100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Vidrio",
        identificador: 37200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Loza y Porcelana",
        identificador: 37300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos de Cemento, Asbesto y Yeso",
        identificador: 37400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Cemento, Cal y Yeso",
        identificador: 37500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS PRODUCTOS MINERALES NO METALICOS",
        identificador: 37900,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Aislantes",
        identificador: 37910,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Productos Abrasivos",
        identificador: 37920,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "MINERALES VARIOS",
        identificador: 38000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Minerales Metalíferos",
        identificador: 38100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Petróleo Crudo",
        identificador: 38200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Carbón Mineral",
        identificador: 38300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Piedra, Arcilla y Arena",
        identificador: 38400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS MINERALES",
        identificador: 38500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Uranio",
        identificador: 38510,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Talco",
        identificador: 38520,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Dolomita",
        identificador: 38530,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Azufre",
        identificador: 38540,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS MATERIALES Y SUMINISTROS",
        identificador: 39000,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Elementos de Limpieza y Aseo Personal",
        identificador: 39100,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Útiles de Escritorio, Oficina y Enseñanza",
        identificador: 39200,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Útiles y Materiales Eléctricos",
        identificador: 39300,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Utensilios de Cocina y Comedor",
        identificador: 39400,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Instrumental Médico-Quirúrgico Menor y de Laboratorio",
        identificador: 39500,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Repuestos y Accesorios Menores",
        identificador: 39600,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Energía Eléctrica para Reventa",
        identificador: 39700,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Útiles Deportivos y Recreativos",
        identificador: 39800,
        idgrupo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "BIENES CAPITALIZABLES",
        identificador: 40000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "BIENES PREEXISTENTES",
        identificador: 41000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TIERRAS Y TERRENOS",
        identificador: 41100,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Para Construcción de Bienes en Dominio Privado",
        identificador: 41110,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Para Construcción de Bienes en Dominio Público",
        identificador: 41120,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Tierras, Predios y Solares",
        identificador: 41130,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "EDIFICIOS E INSTALACIONES",
        identificador: 41200,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Edificios y Locales",
        identificador: 41210,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Viviendas para Personal",
        identificador: 41220,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Viviendas Populares",
        identificador: 41230,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Instalaciones Varias",
        identificador: 41240,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "MAQUINARIA Y EQUIPO",
        identificador: 42000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "EQUIPO DE OFICINA Y MUEBLES",
        identificador: 42100,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Muebles Varios de Oficina",
        identificador: 42110,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipos Varios de Oficina",
        identificador: 42120,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Muebles para Alojamiento Colectivo",
        identificador: 42130,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Electrodomésticos",
        identificador: 42140,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Maquinaria y Equipo de Producción",
        identificador: 42200,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipo de Transporte, Tracción y Elevación",
        identificador: 42300,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipo Médico y de Laboratorio",
        identificador: 42400,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipo de Comunicación y Señalamiento",
        identificador: 42500,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipos para Computación",
        identificador: 42600,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "EQUIPO EDUCACIONAL Y RECREATIVO",
        identificador: 42700,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Muebles y Equipos Educacionales",
        identificador: 42710,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipos Recreativos y Deportivos",
        identificador: 42720,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Herramientas y Repuestos Mayores",
        identificador: 42800,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipos para Electrificación (Medidores, Transformadores y Postes)",
        identificador: 42900,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "LIBROS, REVISTAS Y OTROS ELEMENTOS COLECCIONABLES",
        identificador: 43000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Libros y Revistas",
        identificador: 43100,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Discos y Otras Unidades de Sonido",
        identificador: 43200,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Películas y Otras Unidades de Imagen y Sonido",
        identificador: 43300,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Obras de Arte Plástica",
        identificador: 43400,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Elementos Coleccionables",
        identificador: 43900,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Semovientes",
        identificador: 44000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ACTIVOS INTANGIBLES",
        identificador: 45000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aplicaciones Informáticas",
        identificador: 45100,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Bienes Intangibles",
        identificador: 45200,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "EQUIPO MILITAR Y DE SEGURIDAD",
        identificador: 46000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipo Militar",
        identificador: 46100,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Equipo de Seguridad (Policía)",
        identificador: 46200,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CONSTRUCCIONES",
        identificador: 47000,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CONSTRUCCIONES Y MEJORAS DE BIENES NACIONALES EN DOMINIO PRIVADO",
        identificador: 47100,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Construcciones y Mejoras de Bienes en Dominio Privado",
        identificador: 47110,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Supervisión de Construcciones y Mejoras de Bienes en Dominio Privado",
        identificador: 47120,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CONSTRUCCIONES Y MEJORAS DE BIENES NACIONALES EN DOMINIO PUBLICO",
        identificador: 47200,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Construcciones y Mejoras de Bienes en Dominio Público",
        identificador: 47210,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Supervisión de Construcciones y Mejoras de Bienes en Dominio Público",
        identificador: 47220,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Construcciones en Proceso (Modalidad BOT)",
        identificador: 47230,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "CONSOLIDACION Y MEJORAS DE BIENES CULTURALES",
        identificador: 47300,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Consolidación y Mejoras de Bienes Culturales",
        identificador: 47310,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Supervisión de Consolidación y Mejoras de Bienes Culturales",
        identificador: 47320,
        idgrupo: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES",
        identificador: 50000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES CORRIENTES AL SECTOR PRIVADO",
        identificador: 51000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTACIONES DE LA SEGURIDAD SOCIAL",
        identificador: 51100,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Jubilaciones y Retiros",
        identificador: 51110,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Pensiones",
        identificador: 51120,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTACIONES DE ASISTENCIA SOCIAL",
        identificador: 51200,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Becas",
        identificador: 51210,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ayuda Social a Personas",
        identificador: 51220,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Gastos",
        identificador: 51230,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Beneficios Especiales",
        identificador: 51240,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ayudas Sociales Varias",
        identificador: 51250,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Prestaciones Sociales",
        identificador: 51260,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Asociaciones Civiles sin Fines de Lucro",
        identificador: 51300,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SUBSIDIOS A EMPRESAS PRIVADAS",
        identificador: 51400,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Empresas Privadas no Financieras",
        identificador: 51410,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Empresas Privadas Financieras",
        identificador: 51420,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES CORRIENTES UNIDADES DEL SECTOR PUBLICO",
        identificador: 52000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES A UNIDADES DEL GOBIERNO CENTRAL",
        identificador: 52100,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Instituciones de la Administración Central",
        identificador: 52110,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Instituciones Descentralizadas",
        identificador: 52120,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Instituciones de la Seguridad Social",
        identificador: 52130,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Gobiernos Locales",
        identificador: 52200,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Otras Instituciones Públicas Financieras no Empresariales",
        identificador: 52300,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SUBSIDIOS A EMPRESAS PUBLICAS",
        identificador: 52400,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Empresas Públicas no Financieras",
        identificador: 52410,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Instituciones Públicas Financieras",
        identificador: 52420,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES CORRIENTES AL SECTOR EXTERNO",
        identificador: 53000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Gobiernos Extranjeros",
        identificador: 53100,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES A ORGANISMOS INTERNACIONALES",
        identificador: 53200,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Organismos Internacionales - Cuotas Ordinarias",
        identificador: 53210,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Organismos Internacionales - Cuotas Extraordinarias",
        identificador: 53220,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES DE CAPITAL AL SECTOR PRIVADO",
        identificador: 54000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTACIONES DE ASISTENCIA SOCIAL",
        identificador: 54100,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ayuda Social a Personas",
        identificador: 54110,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Asociaciones Civiles sin Fines de Lucro",
        identificador: 54200,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SUBSIDIOS A EMPRESAS PRIVADAS",
        identificador: 54300,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Empresas Privadas no Financieras",
        identificador: 54310,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Empresas Privadas Financieras",
        identificador: 54320,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES DE CAPITAL A UNIDADES DEL SECTOR PUBLICO",
        identificador: 55000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES A UNIDADES DEL GOBIERNO CENTRAL",
        identificador: 55100,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Instituciones de la Administración Central",
        identificador: 55110,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Instituciones Descentralizadas",
        identificador: 55120,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Instituciones de la Seguridad Social",
        identificador: 55130,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Gobiernos Locales",
        identificador: 55200,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Otras Instituciones Públicas Financieras",
        identificador: 55300,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SUBSIDIOS A EMPRESAS PUBLICAS",
        identificador: 55400,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Empresas Públicas no Financieras",
        identificador: 55410,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Subsidios a Instituciones Públicas Financieras",
        identificador: 55420,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES DE CAPITAL AL SECTOR EXTERNO",
        identificador: 56000,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Gobiernos Extranjeros",
        identificador: 56100,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TRANSFERENCIAS Y DONACIONES A ORGANISMOS INTERNACIONALES",
        identificador: 56200,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Organismos Internacionales - Cuotas Ordinarias",
        identificador: 56210,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Transferencias y Donaciones a Organismos Internacionales - Cuotas Extraordinarias",
        identificador: 56220,
        idgrupo: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ACTIVOS FINANCIEROS",
        identificador: 60000,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PARTICIPACION DE CAPITAL Y COMPRA DE ACCIONES",
        identificador: 61000,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "APORTES DE CAPITAL A EMPRESAS PRIVADAS",
        identificador: 61100,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportes de Capital a Empresa Privadas no Financieras",
        identificador: 61110,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportes de Capital a Empresa Privadas Financieras",
        identificador: 61120,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "APORTES DE CAPITAL A EMPRESAS PUBLICAS NACIONALES",
        identificador: 61200,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportes de Capital a Empresa Públicas no Financieras",
        identificador: 61210,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportes de Capital a Instituciones Públicas Financieras",
        identificador: 61220,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportes de Capital a Organismos Internacionales",
        identificador: 61300,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Aportes de Capital a Otras Organizaciones del Sector Externo",
        identificador: 61400,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A CORTO PLAZO",
        identificador: 62000,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A CORTO PLAZO AL SECTOR PRIVADO",
        identificador: 62100,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Personas",
        identificador: 62110,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Instituciones Privadas sin Fines de Lucro",
        identificador: 62120,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Empresas Privadas",
        identificador: 62130,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A CORTO PLAZO AL GOBIERNO CENTRAL",
        identificador: 62200,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a la Administración Central",
        identificador: 62210,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Instituciones Descentralizadas",
        identificador: 62220,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Institutos de la Seguridad Social",
        identificador: 62230,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Gobiernos Locales",
        identificador: 62300,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Otras Instituciones Públicas Financieras",
        identificador: 62400,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A CORTO PLAZO A EMPRESAS PUBLICAS",
        identificador: 62500,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Empresas Públicas no Financieras",
        identificador: 62510,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Instituciones Públicas Financieras",
        identificador: 62520,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A CORTO PLAZO AL SECTOR EXTERNO",
        identificador: 62600,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Organismos Internacionales",
        identificador: 62610,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Corto Plazo a Gobiernos Extranjeros",
        identificador: 62620,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A LARGO PLAZO",
        identificador: 63000,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A LARGO PLAZO AL SECTOR PRIVADO",
        identificador: 63100,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Personas",
        identificador: 63110,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Instituciones Privadas sin Fines de Lucro",
        identificador: 63120,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Empresas Privadas",
        identificador: 63130,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A LARGO PLAZO AL GOBIERNO CENTRAL",
        identificador: 63200,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a la Administración Central",
        identificador: 63210,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Instituciones Descentralizadas",
        identificador: 63220,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Institutos de la Seguridad Social",
        identificador: 63230,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Gobiernos Locales",
        identificador: 63300,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Otras Instituciones Públicas Financieras",
        identificador: 63400,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A LARGO PLAZO A EMPRESAS PUBLICAS",
        identificador: 63500,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Empresas Públicas no Financieras",
        identificador: 63510,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Instituciones Públicas Financieras",
        identificador: 63520,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "PRESTAMOS A LARGO PLAZO AL SECTOR EXTERNO",
        identificador: 63600,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Organismos Internacionales",
        identificador: 63610,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Préstamos a Largo Plazo a Gobiernos Extranjeros",
        identificador: 63620,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "TITULOS Y VALORES",
        identificador: 64000,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Títulos y Valores a Corto Plazo",
        identificador: 64100,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Títulos y Valores a Largo Plazo",
        identificador: 64200,
        idgrupo: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIO DE LA DEUDA PUBLICA",
        identificador: 70000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIO DE LA DEUDA PUBLICA INTERNA A CORTO PLAZO",
        identificador: 71000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "AMORTIZACION DE LA DEUDA PUBLICA INTERNA A CORTO PLAZO",
        identificador: 71100,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización de Títulos y Valores a Corto Plazo",
        identificador: 71110,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos del Sector Privado",
        identificador: 71120,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de la Administración Central",
        identificador: 71130,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Instituciones Descentralizadas",
        identificador: 71140,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Institutos de Seguridad Social",
        identificador: 71150,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Gobiernos Locales",
        identificador: 71160,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Empresas Públicas no Financieras",
        identificador: 71170,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Instituciones Públicas Financieras",
        identificador: 71180,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Otras Deudas Internas a Corto Plazo",
        identificador: 71190,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "INTERESES DE LA DEUDA PUBLICA INTERNA A CORTO PLAZO",
        identificador: 71200,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses de Títulos y Valores",
        identificador: 71210,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos del Sector Privado",
        identificador: 71220,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de la Administración Central",
        identificador: 71230,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Instituciones Descentralizadas",
        identificador: 71240,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Institutos de Seguridad Social",
        identificador: 71250,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Gobiernos Locales",
        identificador: 71260,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Empresas Públicas no Financieras",
        identificador: 71270,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Instituciones Públicas Financieras",
        identificador: 71280,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses Otras Deudas Internas a Corto Plazo",
        identificador: 71290,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisiones y Otros Gastos de la Deuda Pública Interna a Corto Plazo",
        identificador: 71300,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Mora y Multas de la Deuda Pública Interna a Corto Plazo",
        identificador: 71400,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIO DE LA DEUDA PUBLICA INTERNA A LARGO PLAZO",
        identificador: 72000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "AMORTIZACION DE LA DEUDA PUBLICA INTERNA A LARGO PLAZO",
        identificador: 72100,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización de Títulos y Valores",
        identificador: 72110,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos del Sector Privado",
        identificador: 72120,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de la Administración Central",
        identificador: 72130,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Instituciones Descentralizadas",
        identificador: 72140,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Institutos de Seguridad Social",
        identificador: 72150,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Gobiernos Locales",
        identificador: 72160,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Empresas Públicas no Financieras",
        identificador: 72170,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Préstamos de Instituciones Públicas Financieras",
        identificador: 72180,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización Otras Deudas Internas a Largo Plazo",
        identificador: 72190,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "INTERESES DE LA DEUDA PUBLICA INTERNA A LARGO PLAZO",
        identificador: 72200,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses de Títulos y Valores",
        identificador: 72210,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos del Sector Privado",
        identificador: 72220,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de la Administración Central",
        identificador: 72230,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Instituciones Descentralizadas",
        identificador: 72240,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Institutos de Seguridad Social",
        identificador: 72250,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Gobiernos Locales",
        identificador: 72260,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Empresas Públicas no Financieras",
        identificador: 72270,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Préstamos de Instituciones Públicas Financieras",
        identificador: 72280,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses Otras Deudas a Largo Plazo",
        identificador: 72290,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisiones y Otros Gastos de la Deuda Pública Interna a Largo Plazo",
        identificador: 72300,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Mora y Multas de la Deuda Pública Interna a Largo Plazo",
        identificador: 72400,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIO DE LA DEUDA PUBLICA EXTERNA A CORTO PLAZO",
        identificador: 73000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización de la Deuda Pública Externa a Corto Plazo",
        identificador: 73100,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses de la Deuda Pública Externa a Corto Plazo",
        identificador: 73200,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisiones y Otros Gastos de la Deuda Pública Externa a Corto Plazo",
        identificador: 73300,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Mora y Multas de la Deuda Pública Externa a Corto Plazo",
        identificador: 73400,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SERVICIO DE LA DEUDA PUBLICA EXTERNA A LARGO PLAZO",
        identificador: 74000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización de la Deuda Pública Externa a Largo Plazo",
        identificador: 74100,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses de la Deuda Pública Externa a Largo Plazo",
        identificador: 74200,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisiones y Otros Gastos de la Deuda Pública Externa a Largo Plazo",
        identificador: 74300,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Mora y Multas de la Deuda Pública Externa a Largo Plazo",
        identificador: 74400,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Amortización por Alivio Deuda Pública Externa",
        identificador: 74500,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Alivio Deuda Pública Externa",
        identificador: 74600,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisiones por Alivio Deuda Pública Externa",
        identificador: 74700,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "COMISIONES Y OTROS GASTOS",
        identificador: 74800,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisiones y Otros Gastos por Reembolsos de PPF",
        identificador: 74810,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Comisión de Inspección y Vigilancia",
        identificador: 74820,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses",
        identificador: 74830,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTRAS OBLIGACIONES A CARGO DEL TESORO",
        identificador: 75000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "GASTOS DEVENGADOS Y NO REGISTRADOS",
        identificador: 76000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "SENTENCIAS JUDICIALES",
        identificador: 77000,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sentencias Judiciales por Servicios Personales",
        identificador: 77100,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sentencias Judiciales por Servicios no Personales",
        identificador: 77200,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sentencias por Materiales y Suministros",
        identificador: 77300,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sentencias Judiciales por Bienes Capitalizables",
        identificador: 77400,
        idgrupo: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "OTROS GASTOS",
        identificador: 90000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "INTERESES DE INSTITUCIONES PUBLICAS FINANCIERAS",
        identificador: 91000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Depósitos en Caja de Ahorro",
        identificador: 91100,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Depósitos a Plazo Fijo",
        identificador: 91200,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Intereses por Fondos Comunes de Inversión",
        identificador: 91300,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Intereses",
        identificador: 91400,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "GASTOS DEL CONGRESO NACIONAL",
        identificador: 92000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos Corrientes del Congreso Nacional",
        identificador: 92100,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de Capital del Congreso Nacional",
        identificador: 92200,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "GASTOS DE LA PRESIDENCIA DE LA REPUBLICA",
        identificador: 93000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos Corrientes de la Presidencia de la República",
        identificador: 93100,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de Capital de la Presidencia de la República",
        identificador: 93200,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "GASTOS DEL MINISTERIO PUBLICO",
        identificador: 94000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos Corrientes del Ministerio Público",
        identificador: 94100,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de Capital del Ministerio Público",
        identificador: 94200,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "GASTOS DE LA CORTE SUPREMA DE JUSTICIA",
        identificador: 95000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos Corrientes de la Corte Suprema de Justicia",
        identificador: 95100,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de Capital de la Corte Suprema de Justicia",
        identificador: 95200,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "ASIGNACIONES GLOBALES",
        identificador: 99000,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Para Erogaciones Corrientes",
        identificador: 99100,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Para Erogaciones de Capital",
        identificador: 99200,
        idgrupo: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      

      

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('objetogastos', null, {});
    
  }
};
