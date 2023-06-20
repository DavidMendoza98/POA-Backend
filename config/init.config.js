const db = require("../models/");
const bcrypt = require("bcryptjs");
const config = require("./auth.config.js");


exports.initial = async () => {
    try {


        await db.role.create({
            id: 1,
            rol: "super_admin",
            descripcion: "super usuario",
        });
        await db.role.create({
            id: 2,
            rol: "admin",
            descripcion: "administrador",
        });
        await db.role.create({
            id: 3,
            rol: "planificador",
            descripcion: "Jefe de Departamento o coordinador asignado que llevará la planificación",
        });


        // await db.institucion.bulkCreate([
        //     {
        //         nombre: 'UNAH',
        //         descripcion: 'Universidad Nacional Autónoma de Honduras'
        //     },
        //     {
        //         nombre: 'HGS',
        //         descripcion: 'Hospital del Sur'
        //     }
        // ])

        await db.pei.bulkCreate([
            
            {
                name: "Plan Estrategico Institucional UNAH 2021-2025",
                initialYear: '2021-01-01',
                finalYear: '2026-01-01',
                isActive: 1,
                idInstitucion: 1
            }
        ]);



        await db.dimension.bulkCreate([
            {
                nombre: '01-DESARROLLO E INNOVACION CURRICULAR',
                descripcion: 'descripcion 1',
                idPei: 1
            },
            {
                nombre: '02-INVESTIGACION CIENTIFICA',
                descripcion: 'descripcion 1',
                idPei: 1
            },
            {
                nombre: '03-VINCULACION UNIVERSIDAD SOCIEDAD',
                descripcion: '03-VINCULACION UNIVERSIDAD SOCIEDAD',
                idPei: 1
            },
            {
                nombre: '04-DOCENCIA Y PROFESORADO UNIVERSITARIO',
                descripcion: '04-DOCENCIA Y PROFESORADO UNIVERSITARIO',
                idPei: 1
            },
            {
                nombre: '05-ESTUDIANTES',
                descripcion: '05-ESTUDIANTES',
                idPei: 1
            },
            {
                nombre: '06-GRADUADOS',
                descripcion: '06-GRADUADOS',
                idPei: 1
            },
            {
                nombre: '07-GESTION DEL CONOCIMIENTO',
                descripcion: '07-GESTION DEL CONOCIMIENTO',
                idPei: 1
            },
            {
                nombre: '08-LO ESENCIAL',
                descripcion: '08-LO ESENCIAL',
                idPei: 1
            },
            {
                nombre: '09-CULTURA DE INNOVACION INSTITUCIONAL Y EDUCATIVA',
                descripcion: '09-CULTURA DE INNOVACION INSTITUCIONAL Y EDUCATIVA',
                idPei: 1
            }, {
                nombre: '10-ASEGURAMIENTO DE LA CALIDAD',
                descripcion: '10-ASEGURAMIENTO DE LA CALIDAD',
                idPei: 1
            }, {
                nombre: '11-POSGRADO',
                descripcion: '11-POSGRADO',
                idPei: 1
            }, {
                nombre: '12-GESTION ADMINISTRATIVA',
                descripcion: '12-GESTION ADMINISTRATIVA',
                idPei: 1
            }, {
                nombre: '13-GESTION DEL TALENTO HUMANO',
                descripcion: '13-GESTION DEL TALENTO HUMANO',
                idPei: 1
            }, {
                nombre: '14-GESTION ACADEMICA',
                descripcion: '14-GESTION ACADEMICA',
                idPei: 1
            }, {
                nombre: '15-INTERNACIONALIZACION DE LA EDUCACION SUPERIOR',
                descripcion: '15-INTERNACIONALIZACION DE LA EDUCACION SUPERIOR',
                idPei: 1
            }, {
                nombre: '16-GOBERNABILIDAD Y PROCESO DE GESTIÓN DESCENTRALIZADAS EN REDES',
                descripcion: '16-GOBERNABILIDAD Y PROCESO DE GESTIÓN DESCENTRALIZADAS EN REDES',
                idPei: 1
            }, {
                nombre: '17-DESARROLLO DEL SISTEMA DE EDUCACIÓN SUPERIOR',
                descripcion: '17-DESARROLLO DEL SISTEMA DE EDUCACIÓN SUPERIOR',
                idPei: 1
            }, {
                nombre: '18-GESTION TIC',
                descripcion: '18-GESTION TIC',
                idPei: 1
            }
        ])

        await db.objetivos.bulkCreate([
            {
                nombre: "1. Impulsar un proceso de desarrollo curricular siguiendo los lineamientos del Modelo Educativo de la UNAH en consonancia con las nuevas tendencias y diversidad educativa (formal, no formal y continua); se diseñaran currículos innovadores (abiertos, flexibles e incluyentes) acordes a estándares internacionales y que contaran con referentes axiológicos que orienten la selección de contenidos y la coherencia entre estos.",
                descripcion: "objetivo descripcion",
                idDimension: 1,
                idPei: 1
            },
            {
                nombre: "2) Consolidar la aplicación de la política de bimodalidad en la UNAH.",
                descripcion: "objetivo descripcion",
                idDimension: 1,
                idPei: 1
            },
            {
                nombre: "Consolidar el sistema de investigación científica y tecnológica de la UNAH, para posicionarse en una situación de liderazgo nacional y regional, tanto del conocimiento como de sus aplicaciones, desarrollando una investigación de impacto nacional y con reconocimiento internacional, ampliamente integrada a la docencia, especialmente al postgrado y vinculada a la solución de problemas, promoviendo sustantivamente el desarrollo del país.",
                descripcion: "objetivo descripcion",
                idDimension: 2,
                idPei: 1
            },
            {
                nombre: "Fortalecer de manera permanente y sostenida la Vinculación de la UNAH con el Estado, sus graduados, las fuerzas sociales, productivas y demás que integran la sociedad hondureña.",
                descripcion: "Fortalecer de manera permanente y sostenida la Vinculación de la UNAH con el Estado, sus graduados, las fuerzas sociales, productivas y demás que integran la sociedad hondureña.",
                idDimension: 3,
                idPei: 1
            }, {
                nombre: "Crear en la comunidad universitaria una cultura de compromiso social, a través de la construcción de redes y ámbitos de inserción con la sociedad hondureña, para construir vías de comunicación y de acción efectivas entre distintas comunidades y la Universidad, para construir participativamente valores, conocimientos y espacios de mutuo aprendizaje.",
                descripcion: "Crear en la comunidad universitaria una cultura de compromiso social, a través de la construcción de redes y ámbitos de inserción con la sociedad hondureña, para construir vías de comunicación y de acción efectivas entre distintas comunidades y la Universidad, para construir participativamente valores, conocimientos y espacios de mutuo aprendizaje.",
                idDimension: 3,
                idPei: 1
            }, {
                nombre: "Focalizar la inserción de los graduados universitarios en los mercados de trabajo, su seguimiento y actualización educativa, con estudios de postgrado, que sean pertinentes a los programas acádemicas y de actualización continua.",
                descripcion: "Focalizar la inserción de los graduados universitarios en los mercados de trabajo, su seguimiento y actualización educativa, con estudios de postgrado, que sean pertinentes a los programas acádemicas y de actualización continua.",
                idDimension: 3,
                idPei: 1
            }, {
                nombre: "Empoderar y formar de manera permanente al profesorado universitario en prácticas académicas innovadoras, alineadas con los objetivos académicos, estratégicos y del Modelo Educativo de la Universidad, con el propósito que construyan las múltiples competencias para su transformación académica y la de los estudiantes (actualización, innovación, culturización) con valores y ética, en el plano docente, humanístico y disciplinar.",
                descripcion: "Empoderar y formar de manera permanente al profesorado universitario en prácticas académicas innovadoras, alineadas con los objetivos académicos, estratégicos y del Modelo Educativo de la Universidad, con el propósito que construyan las múltiples competencias para su transformación académica y la de los estudiantes (actualización, innovación, culturización) con valores y ética, en el plano docente, humanístico y disciplinar.",
                idDimension: 4,
                idPei: 1
            }, {
                nombre: "Propiciar cambios en la calidad de vida y formación académica de los estudiantes universitarios; articulando procesos de orientación, asesoría, salud, cultura, deporte, estímulos académicos y atención diferenciada e inclusiva, con el fin de lograr el desarrollo estudiantil para el logro de su excelencia académica y profesional.",
                descripcion: "Propiciar cambios en la calidad de vida y formación académica de los estudiantes universitarios; articulando procesos de orientación, asesoría, salud, cultura, deporte, estímulos académicos y atención diferenciada e inclusiva, con el fin de lograr el desarrollo estudiantil para el logro de su excelencia académica y profesional.",
                idDimension: 5,
                idPei: 1
            }, {
                nombre: "Focalizar la inserción de los graduados universitarios en los mercados de trabajo, con miras al cambio, haciendo enfasis en el emprendedurismo, su seguimiento y actualización educativa profesional, con estudios de postgrado que sean pertinentes a las necesidades que enfrenta el país, al desarrollo de la ciencia y la tecnología y, a la actualización continua de los graduados.",
                descripcion: "Focalizar la inserción de los graduados universitarios en los mercados de trabajo, con miras al cambio, haciendo enfasis en el emprendedurismo, su seguimiento y actualización educativa profesional, con estudios de postgrado que sean pertinentes a las necesidades que enfrenta el país, al desarrollo de la ciencia y la tecnología y, a la actualización continua de los graduados.",
                idDimension: 6,
                idPei: 1
            }, {
                nombre: "Velar y promover de manera efectiva, la inclusión de los Graduados Universitarios calificados para el relevo docente ( entre otros, reorientado y fortaleciendo a través de un nuevo Reglamento, a los Instructores).",
                descripcion: "Velar y promover de manera efectiva, la inclusión de los Graduados Universitarios calificados para el relevo docente ( entre otros, reorientado y fortaleciendo a través de un nuevo Reglamento, a los Instructores).",
                idDimension: 6,
                idPei: 1
            }, {
                nombre: "Gestionar y promover el conocimiento científico y social para contribuir a la superación de los principales problemas del país, para satisfacer las necesidades prioritarias y desplegar las potencialidades para el desarrollo humano sostenible a nivel local, nacional y regional a través de la movilidad y el intercambio, el uso de las TICs y funcionamiento de redes, entre otros.",
                descripcion: "Gestionar y promover el conocimiento científico y social para contribuir a la superación de los principales problemas del país, para satisfacer las necesidades prioritarias y desplegar las potencialidades para el desarrollo humano sostenible a nivel local, nacional y regional a través de la movilidad y el intercambio, el uso de las TICs y funcionamiento de redes, entre otros.",
                idDimension: 7,
                idPei: 1
            }, {
                nombre: "1) Transversalizar en los planes de estudios, curriculares y didácticos, y en todas las funciones académicas y actividades administrativas de la UNAH, la PRÁCTICA DE LA ÉTICA, la identidad y la cultura para la construcción de ciudadanía: ÉTICA",
                descripcion: "1) Transversalizar en los planes de estudios, curriculares y didácticos, y en todas las funciones académicas y actividades administrativas de la UNAH, la PRÁCTICA DE LA ÉTICA, la identidad y la cultura para la construcción de ciudadanía: ÉTICA",
                idDimension: 8,
                idPei: 1
            }, {
                nombre: "2) Garantizar una educación integral, que incorpore la gestión académica del conocimiento, de cultura para el desarrollo, como parte de la dinámica institucional, y del perfil profesional, orientado al fortalecimiento de la ciudadano.",
                descripcion: "2) Garantizar una educación integral, que incorpore la gestión académica del conocimiento, de cultura para el desarrollo, como parte de la dinámica institucional, y del perfil profesional, orientado al fortalecimiento de la ciudadano.",
                idDimension: 8,
                idPei: 1
            }, {
                nombre: "3) Priorizar la producción y gestión del conocimiento con alto contenido de identidad nacional, regional y local; que refuerce el saber local-regional, aborde los problemas nacionales, y que transite hacia la internacionalización del conocimiento.",
                descripcion: "3) Priorizar la producción y gestión del conocimiento con alto contenido de identidad nacional, regional y local; que refuerce el saber local-regional, aborde los problemas nacionales, y que transite hacia la internacionalización del conocimiento.",
                idDimension: 8,
                idPei: 1
            }, {
                nombre: "4) Fortalecer en la comunidad universitaria la práctica de la cultura física y deportes, el aprecio por las artes y la cultura como parte de la formación integral y del buen vivir.",
                descripcion: "4) Fortalecer en la comunidad universitaria la práctica de la cultura física y deportes, el aprecio por las artes y la cultura como parte de la formación integral y del buen vivir.",
                idDimension: 8,
                idPei: 1
            }, {
                nombre: "1. Fortalecer la cultura de la Innovación Institucional y Educativa e implementar el modelo de innovación educativa de la UNAH, que integre el currículo, las metodologías, las estrategias de enseñanza y aprendizaje, los materiales y recursos didácticos, el uso educativo de las TIC, la relación con el entorno, la profesionalización docente, y la profesionalización de la dirección y conducción de la UNAH.",
                descripcion: "1. Fortalecer la cultura de la Innovación Institucional y Educativa e implementar el modelo de innovación educativa de la UNAH, que integre el currículo, las metodologías, las estrategias de enseñanza y aprendizaje, los materiales y recursos didácticos, el uso educativo de las TIC, la relación con el entorno, la profesionalización docente, y la profesionalización de la dirección y conducción de la UNAH.",
                idDimension: 9,
                idPei: 1
            }, {
                nombre: "Mejora continua y acreditación de la calidad de la UNAH, sus servicios y funciones sustantivas de docencia, investigación y vinculación universidad-sociedad. y programas; evidenciada en la rendición de cuentas a la sociedad hondureña y en la atención oportuna efectiva y pertinente a las demandas auténticas de ésta.",
                descripcion: "Mejora continua y acreditación de la calidad de la UNAH, sus servicios y funciones sustantivas de docencia, investigación y vinculación universidad-sociedad. y programas; evidenciada en la rendición de cuentas a la sociedad hondureña y en la atención oportuna efectiva y pertinente a las demandas auténticas de ésta.",
                idDimension: 10,
                idPei: 1
            }, {
                nombre: "Promover un sistema de aseguramiento de la calidad en la UNAH, con participación de todas las Unidades Académicas, Administrativas, Financieras y Logísticas.",
                descripcion: "Promover un sistema de aseguramiento de la calidad en la UNAH, con participación de todas las Unidades Académicas, Administrativas, Financieras y Logísticas.",
                idDimension: 10,
                idPei: 1
            }, {
                nombre: "Convertir a la Universidad en una Institución respetuosa del medio ambiente, saludable y segura para todos que cree conciencia y promueva estilos de vida saludables dentro de la sociedad, con el propósito de fortalecer la participación ciudadana, la critica constructiva y la creatividad.",
                descripcion: "Convertir a la Universidad en una Institución respetuosa del medio ambiente, saludable y segura para todos que cree conciencia y promueva estilos de vida saludables dentro de la sociedad, con el propósito de fortalecer la participación ciudadana, la critica constructiva y la creatividad.",
                idDimension: 10,
                idPei: 1
            }, {
                nombre: "Posicionar a la UNAH como una institución líder en la formación de posgrados a nivel nacional, generando una oferta de posgrados de estricta pertinencia con las necesidades de conocimiento que los distintos sectores de la sociedad hondureña requieren, lo que unido a la calidad de los programas y a su capacidad de actualización, están en consonancia con los desafíos de crecimiento y desarrollo del país y la región.",
                descripcion: "Posicionar a la UNAH como una institución líder en la formación de posgrados a nivel nacional, generando una oferta de posgrados de estricta pertinencia con las necesidades de conocimiento que los distintos sectores de la sociedad hondureña requieren, lo que unido a la calidad de los programas y a su capacidad de actualización, están en consonancia con los desafíos de crecimiento y desarrollo del país y la región.",
                idDimension: 11,
                idPei: 1
            }, {
                nombre: "Lograr un desarrollo institucional acorde con los ingresos económicos, de modo que se asegure su viabilidad futura, focalizado en el mejoramiento de la situación económico-financiera de la UNAH y su desarrollo a través de la generación de ingresos y del aumento a la productividad. Para ello se busca mejorar la eficiencia de los recursos e insumos, el crecimiento y mantenimiento de la infraestructura de acuerdo a las necesidades de la calidad y las perspectivas de expansión en un ambiente de calidad, acogedor, diverso y pluralista con una infraestructura de calidad, estéticamente atractiva e inserta en un entorno natural y cultural privilegiado que favorezca el trabajo académico y la convivencia social.",
                descripcion: "Lograr un desarrollo institucional acorde con los ingresos económicos, de modo que se asegure su viabilidad futura, focalizado en el mejoramiento de la situación económico-financiera de la UNAH y su desarrollo a través de la generación de ingresos y del aumento a la productividad. Para ello se busca mejorar la eficiencia de los recursos e insumos, el crecimiento y mantenimiento de la infraestructura de acuerdo a las necesidades de la calidad y las perspectivas de expansión en un ambiente de calidad, acogedor, diverso y pluralista con una infraestructura de calidad, estéticamente atractiva e inserta en un entorno natural y cultural privilegiado que favorezca el trabajo académico y la convivencia social.",
                idDimension: 12,
                idPei: 1
            }, {
                nombre: "Innovar, crear y mejorar la gestión administrativa-financiera, en función de la actividad académica y de los diferentes insumos y recursos institucionales, y aquellos que se generen por las diferentes unidades, aplicando procesos administrativos y principios de eficiencia, eficacia, oportunidad, transparencia y rendición de cuentas en todos los actos de la UNAH.",
                descripcion: "Innovar, crear y mejorar la gestión administrativa-financiera, en función de la actividad académica y de los diferentes insumos y recursos institucionales, y aquellos que se generen por las diferentes unidades, aplicando procesos administrativos y principios de eficiencia, eficacia, oportunidad, transparencia y rendición de cuentas en todos los actos de la UNAH.",
                idDimension: 12,
                idPei: 1
            }, {
                nombre: "Promover de manera planificada el permanente desarrollo del talento humano docente y administrativo de la UNAH en todo el ciclo vital, productivo y laboral: captación, selección, inducción, desempeño, despliegue de capacidades y potencialidades, capacitación, formación, distribución, egreso. y vínculo social e institucional; asegurando el relevo en nuevos campos del conocimiento científico, técnico y humanístico.",
                descripcion: "Promover de manera planificada el permanente desarrollo del talento humano docente y administrativo de la UNAH en todo el ciclo vital, productivo y laboral: captación, selección, inducción, desempeño, despliegue de capacidades y potencialidades, capacitación, formación, distribución, egreso. y vínculo social e institucional; asegurando el relevo en nuevos campos del conocimiento científico, técnico y humanístico.",
                idDimension: 13,
                idPei: 1
            }, {
                nombre: "Contar con una gestión académica de calidad y pertinente a la complejidad de la UNAH, ágil, moderna y flexible que permita un apoyo efectivo al desarrollo de las funciones fundamentales de la Universidad y del proceso educativo; por medio de la formulación y aplicación a través de un sistema automatizado de políticas, normas y procedimientos académicos ; que orienta la planificación, organización, integración y control de los servicios de soporte a la docencia, investigación, vinculación universidad-sociedad, gestión del conocimiento, y la monitoria y evaluación de dichas funciones, con un enfoque de gestión basada en resultados y evaluación de alcances.",
                descripcion: "Contar con una gestión académica de calidad y pertinente a la complejidad de la UNAH, ágil, moderna y flexible que permita un apoyo efectivo al desarrollo de las funciones fundamentales de la Universidad y del proceso educativo; por medio de la formulación y aplicación a través de un sistema automatizado de políticas, normas y procedimientos académicos ; que orienta la planificación, organización, integración y control de los servicios de soporte a la docencia, investigación, vinculación universidad-sociedad, gestión del conocimiento, y la monitoria y evaluación de dichas funciones, con un enfoque de gestión basada en resultados y evaluación de alcances.",
                idDimension: 14,
                idPei: 1
            }, {
                nombre: "Liderar y coordinar los esfuerzos institucionales de internacionalización de la educación superior, a fin de contribuir de manera eficaz al fortalecimiento y mejoramiento académico de la UNAH en el marco de la Reforma Universitaria.",
                descripcion: "Liderar y coordinar los esfuerzos institucionales de internacionalización de la educación superior, a fin de contribuir de manera eficaz al fortalecimiento y mejoramiento académico de la UNAH en el marco de la Reforma Universitaria.",
                idDimension: 15,
                idPei: 1
            }, {
                nombre: "Fortalecer y consolidar el gobierno universitario, basando sus acciones y decisiones en los principios de Democracia, Respeto, Responsabilidad, Subsidiaridad, Transparencia y Rendición de cuentas.",
                descripcion: "Fortalecer y consolidar el gobierno universitario, basando sus acciones y decisiones en los principios de Democracia, Respeto, Responsabilidad, Subsidiaridad, Transparencia y Rendición de cuentas.",
                idDimension: 16,
                idPei: 1
            }, {
                nombre: "Fortalecer y consolidar las responsabilidades de la UNAH en el papel de organizar, dirigir y desarrollar la educación superior del país.",
                descripcion: "Fortalecer y consolidar las responsabilidades de la UNAH en el papel de organizar, dirigir y desarrollar la educación superior del país.",
                idDimension: 16,
                idPei: 1
            }, {
                nombre: "Avanzar de manera planificada y progresiva en un proceso de descentralización de la gestión académica y administrativa financiera hacia las redes educativas regionales",
                descripcion: "Avanzar de manera planificada y progresiva en un proceso de descentralización de la gestión académica y administrativa financiera hacia las redes educativas regionales",
                idDimension: 16,
                idPei: 1
            }, {
                nombre: "Fortalecer y consolidar las responsabilidades de la UNAH en el papel de organizar, dirigir y desarrollar la educación superior del país.",
                descripcion: "Fortalecer y consolidar las responsabilidades de la UNAH en el papel de organizar, dirigir y desarrollar la educación superior del país.",
                idDimension: 17,
                idPei: 1
            }, {
                nombre: "2. Integrar activamente a la UNAH al campo de la Bimodalidad (Educación presencial y a Distancia en todas sus expresiones) incorporando la tecnología de forma permanente.",
                descripcion: "2. Integrar activamente a la UNAH al campo de la Bimodalidad (Educación presencial y a Distancia en todas sus expresiones) incorporando la tecnología de forma permanente.",
                idDimension: 18,
                idPei: 1
            }, {
                nombre: "1. Consolidar y asumir el liderazgo nacional en las Tecnologías de la Información y Comunicación para la academia, la ciencia y la cultura.",
                descripcion: "1. Consolidar y asumir el liderazgo nacional en las Tecnologías de la Información y Comunicación para la academia, la ciencia y la cultura.",
                idDimension: 18,
                idPei: 1
            }, {
                nombre: "3. Mantener y fortalecer a la UNAH con una infraestructura de redes, telecomunicaciones, equipo ofimático y aplicaciones informáticas (hardware y software), como plataforma para todo el quehacer universitario.",
                descripcion: "3. Mantener y fortalecer a la UNAH con una infraestructura de redes, telecomunicaciones, equipo ofimático y aplicaciones informáticas (hardware y software), como plataforma para todo el quehacer universitario.",
                idDimension: 18,
                idPei: 1
            }, {
                nombre: "4. Consolidar el Gobierno Electrónico institucional a través de la sistematización, automatización de los procesos académicos y administrativos a través de las TIC en forma ágil y eficiente.",
                descripcion: "4. Consolidar el Gobierno Electrónico institucional a través de la sistematización, automatización de los procesos académicos y administrativos a través de las TIC en forma ágil y eficiente.",
                idDimension: 18,
                idPei: 1
            }
        ])


        await db.areas.bulkCreate([{
            nombre: "Mejoramiento de la Calidad Educativa.",
            idObjetivos: 1,
            idDimension: 1,
            idPei: 1
        }, {
            nombre: "Mejoramiento de la Calidad Educativa.",
            idObjetivos: 2,
            idDimension: 1,
            idPei: 1
        }, {
            nombre: "a) Las facultades y los centros regionales se insertan en el eje de fomento de la investigación; desarrollan investigación en el marco de las prioridades de investigación.",
            idObjetivos: 3,
            idDimension: 2,
            idPei: 1
        }, {
            nombre: "d) Las facultades y los centros regionales se insertan en el eje de capacitación en investigación; aprovechan la oferta de capacitación y actualización en investigación científica.",
            idObjetivos: 3,
            idDimension: 2,
            idPei: 1
        }, {
            nombre: "e) Las facultades y los centros regionales se insertan en el eje de gestión de la investigación; cuentan con al menos instancias de gestión y/o ejecución de la investigación que promueven y gestionan recursos internos/ externos y desarrollan proyectos de investigación que contribuyen a la solución de problemas y a la generación de conocimiento pertinente.",
            idObjetivos: 3,
            idDimension: 2,
            idPei: 1
        }, {
            nombre: "b) Las Facultades y los Centros Regionales se insertan en el eje de publicación, difusión y comunicación; promueven y publican las investigaciones realizadas por su personal docente y estudiantil.",
            idObjetivos: 3,
            idDimension: 2,
            idPei: 1
        }, {
            nombre: "c) Las facultades y los centros regionales se insertan en el eje de protección de los resultados de investigación; utilizan los resultados de las investigaciones para contribuir a la solución de los problemas prioritarios del país y al desarrollo científico y técnico.",
            idObjetivos: 3,
            idDimension: 2,
            idPei: 1
        }, {
            nombre: "A. Vínculos académicos y alianzas estratégicas",
            idObjetivos: 4,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "C. Gestión académica y administrativa de la vinculación",
            idObjetivos: 4,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "C. Gestión académica y administrativa de la vinculación",
            idObjetivos: 4,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "B. Socialización y creación de conocimiento en vinculación",
            idObjetivos: 4,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "B. Educacion No Formal",
            idObjetivos: 5,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "C. Comunicación y Difusión",
            idObjetivos: 5,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "D. Desarrollo Local y Cultura",
            idObjetivos: 5,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "A. Servicio Social y gestión del riesgo",
            idObjetivos: 5,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "A. Inserción laboral",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "B. Actualización profesional y formación continua",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "C. Estudios de seguimiento de graduados",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "F. Servicios y Beneficios",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "G. Eventos y Encuentros",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "D. Asociación de Graduados",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "E. Plataforma Virtual",
            idObjetivos: 6,
            idDimension: 3,
            idPei: 1
        }, {
            nombre: "Fortalecemiento de las competencias docentes para la educación superior que faciliten el aprendizaje y mejoren la eficiencia terminal.",
            idObjetivos: 7,
            idDimension: 4,
            idPei: 1
        }, {
            nombre: "a. Brindar atención a los estudiantes universitarios de forma integral en su dimensión psico-pedagógica y social, que involucre aspectos interpersonales-afectivos, mediación de conflictos, orientación, asesoría, rendimiento académico, inducción vocacional y laboral.",
            idObjetivos: 8,
            idDimension: 5,
            idPei: 1
        }, {
            nombre: "b. Contribuir a la promoción, prevención y atención integral de la salud en el estudiantado universitario, para mejorar su calidad de vida y rendimiento académico.",
            idObjetivos: 8,
            idDimension: 5,
            idPei: 1
        }, {
            nombre: "c. Promover la realización de actividades socioculturales y deportivas tanto recreativas, competitivas y de intercambio estudiantil universitario.",
            idObjetivos: 8,
            idDimension: 5,
            idPei: 1
        }, {
            nombre: "d. Contribuir al mejoramiento de la calidad de vida estudiantil mediante la promoción de espacios y beneficios que le permitan el desarrollo de sus potencialidades bajo perspectivas de equidad e inclusión, además de promover una cultura de solidaridad, cooperación y participación ciudadana a través de la formación de líderes y voluntarios universitarios.",
            idObjetivos: 8,
            idDimension: 5,
            idPei: 1
        }, {
            nombre: "Mejoramiento de la Calidad, la Pertinencia y la equidad.",
            idObjetivos: 9,
            idDimension: 6,
            idPei: 1
        }, {
            nombre: "Fortalecimiento de la Calidad.",
            idObjetivos: 10,
            idDimension: 6,
            idPei: 1
        }, {
            nombre: "a) Fortalecimiento y consolidación del proceso de organización y desarrollo de las redes educativas regionales de la UNAH, y de los planes estratégicos y tácticos para continuar con la reforma integral de los centros regionales de la UNAH.",
            idObjetivos: 11,
            idDimension: 7,
            idPei: 1
        }, {
            nombre: "b) Mejorar significativamente la cobertura de la UNAH y el acceso de la población hondureña a los servicios académicos de la UNAH.",
            idObjetivos: 11,
            idDimension: 7,
            idPei: 1
        }, {
            nombre: "c) Desarrollar los Centros Regionales de la UNAH, como polos de desarrollo científico, técnico, y cultural de las regiones del país.",
            idObjetivos: 11,
            idDimension: 7,
            idPei: 1
        }, {
            nombre: "1. ÉTICA: Transversalización del Eje Curricular de Ética en las actividades administrativas y como eje integrador de los demás ejes del Modelo Educativo de la UNAH.",
            idObjetivos: 12,
            idDimension: 8,
            idPei: 1
        }
        ])

        await db.resultado.bulkCreate([
            {
                nombre: "1. Implementados currículos innovadores a nivel de grado y postgrado (macro, meso y micro currículos), en todas las Facultades y Centros Regionales Universitarios.",
                descripcion: "",
                idArea: 1,
                idObjetivos: 1,
                idDimension: 1,
                idPei: 1
            },
            {
                nombre: "a.1) Las facultades y los centros regionales desarrollan proyectos de investigación enmarcados en los temas prioritarios de la UNAH y de la facultad o centro regional a la cual están adscritas.",
                descripcion: "",
                idArea: 2,
                idObjetivos: 2,
                idDimension: 2,
                idPei: 1
            }, {
                nombre: "a.1) Las facultades y los centros regionales desarrollan proyectos de investigación enmarcados en los temas prioritarios de la UNAH y de la facultad o centro regional a la cual están adscritas.",
                descripcion: "a.1) Las facultades y los centros regionales desarrollan proyectos de investigación enmarcados en los temas prioritarios de la UNAH y de la facultad o centro regional a la cual están adscritas.",
                idArea: 3,
                idObjetivos: 3,
                idDimension: 2,
                idPei: 1
            }, {
                nombre: "a.4) Las facultades y los centros regionales promueven la asignación de investigación como carga académica en la UNAH, con el desarrollo de proyectos de investigación.",
                descripcion: "a.4) Las facultades y los centros regionales promueven la asignación de investigación como carga académica en la UNAH, con el desarrollo de proyectos de investigación.",
                idArea: 3,
                idObjetivos: 3,
                idDimension: 2,
                idPei: 1
            }, {
                nombre: "d.1) Las facultades y los centros regionales participan en el programa de capacitación ofertado por la Dirección de Investigación Científica.",
                descripcion: "d.1) Las facultades y los centros regionales participan en el programa de capacitación ofertado por la Dirección de Investigación Científica.",
                idArea: 4,
                idObjetivos: 3,
                idDimension: 2,
                idPei: 1
            }, {
                nombre: "d.1) Las facultades y los centros regionales participan en el programa de capacitación ofertado por la Dirección de Investigación Científica.",
                descripcion: "d.1) Las facultades y los centros regionales participan en el programa de capacitación ofertado por la Dirección de Investigación Científica.",
                idArea: 4,
                idObjetivos: 3,
                idDimension: 2,
                idPei: 1
            }
        ])
        // await db.ue.create({
        //     name: "CURLP",
        //     descripcion: "Centro Universitario Regional del Litoral Pacífico - UNAH",
        //     idInstitucion: 1
        // });

        // await db.depto.bulkCreate([{
        //     name: "Coordinación Ingeniería en Sistemas",
        //     siglas: "IS",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "DEGT",
        //     siglas: "DEGT",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Coordinación Ingeniería Agroindustrial",
        //     siglas: "AGRO",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Coordinación Ingeniería Acuicola",
        //     siglas: "ICA",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Coordinación Administración y Generación de Empresas",
        //     siglas: "AGE",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Coordinación Comercio Internacional",
        //     siglas: "CIOA",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Coordinación Pedagogía",
        //     siglas: "PDG",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Mantenimiento",
        //     siglas: "MTO",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Dirección",
        //     siglas: "DIR",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "VOAE",
        //     siglas: "VOAE",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "DIPP",
        //     siglas: "DIPP",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Sitr13",
        //     siglas: "SIT13",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Humanidades y Artes",
        //     siglas: "HUA",
        //     idUnidadEjecutora: 1
        // },
        // {
        //     name: "Biblioteca",
        //     siglas: "BTC",
        //     idUnidadEjecutora: 1
        // }]);
        await db.empleado.bulkCreate([{
            id: 1,
            dni: "0000-0000-00000",
            nombre: "admin",
            apellido: "admin",
            direccion: "La libertad",
            telefono: "8888-0099",
            fechaNacimiento: '1995-08-07',
            sexo: "M",
            idUnidadEjecutora: 1
        },
        {
            id: 2,
            dni: "0601-1975-00189",
            nombre: "Juan ",
            apellido: "Rodriguez",
            direccion: "La libertad",
            telefono: "8888-0909",
            fechaNacimiento: '1995-08-07',
            sexo: "M",
            idUnidadEjecutora: 1
        },
        {
            id: 3,
            dni: "0601-1980-00110",
            nombre: "Pedro",
            apellido: "Ordoñez",
            direccion: "La libertad",
            telefono: "8888-0909",
            fechaNacimiento: '1995-08-07',
            sexo: "M",
            idUnidadEjecutora: 1
        }
    ]);

        await db.user.create({
            email: "cjso0323@gmail.com",
            username: "root",
            password: bcrypt.hashSync(config.secret, 8),
            idEmpleado: 1,
            idRol: 1
        });
        await db.user.create({
            email: "admin@gmail.com",
            username: "admin",
            password: bcrypt.hashSync(config.secret, 8),
            idEmpleado: 2,
            idRol: 2
        });
        await db.user.create({
            email: "planificador@gmail.com",
            username: "depto",
            password: bcrypt.hashSync(config.secret, 8),
            idEmpleado: 3,
            idRol: 3
        });



        //Agregue tabla catalogo de permisos
        await db.permiso.bulkCreate([{
            Permiso: "Gestion_PEI"
        },
        {
            Permiso: "Crear_PEI",
            Descripcion: "Permite crear PEI."
        },
        {
            Permiso: "Gestion_Reportes"
        },
        {
            Permiso: "Gestion_Revisiones"
        },
        {
            Permiso: "Gestion_POA"
        },
        {
            Permiso: "Crear_POA",
            Descripcion: "Permite crear POA."
        },
        {
            Permiso: "Deshabilitar_POA",
            Descripcion: "Permite deshabilitar POA."
        },
        {
            Permiso: "Gestion_Usuarios"
        },
        {
            Permiso: "Gestion_RRHH",
        },
        {
            Permiso: "Gestion_Seguimientos"
        },
        {
            Permiso: "Gestion_MIS_POAS",
        }]);

        await db.roles_permiso.bulkCreate([{
            idRol: 1,
            idPermiso: 1
        },
        {
            idRol: 1,
            idPermiso: 2
        },
        {
            idRol: 1,
            idPermiso: 3
        },
        {
            idRol: 1,
            idPermiso: 4
        },
        {
            idRol: 1,
            idPermiso: 5
        },
        {
            idRol: 1,
            idPermiso: 6
        },
        {
            idRol: 1,
            idPermiso: 7
        },
        {
            idRol: 1,
            idPermiso: 8
        },
        {
            idRol: 1,
            idPermiso: 9
        },
        {
            idRol: 1,
            idPermiso: 10
        },
        {
            idRol: 1,
            idPermiso: 11
        }


        ,
        {
            idRol: 2,
            idPermiso: 3
        },
        {
            idRol: 2,
            idPermiso: 4
        },
        {
            idRol: 2,
            idPermiso: 5
        },
        {
            idRol: 2,
            idPermiso: 8
        },
        {
            idRol: 2,
            idPermiso: 9
        },
        {
            idRol: 2,
            idPermiso: 10
        },
        {
            idRol: 2,
            idPermiso: 11
        }


        ,
        {
            idRol: 3,
            idPermiso: 3
        },
        {
            idRol: 3,
            idPermiso: 10
        },
        {
            idRol: 3,
            idPermiso: 11
        }

    ]);

        // await db.poa.bulkCreate([{
        //     name: "POA 2022",
        //     anio: '2022',
        //     isActive: 1,
        //     idUE: 1,
        //     idInstitucion: 1,
        // },
        // {
        //     name: "POA 2021",
        //     anio: '2021',
        //     isActive: 1,
        //     idUE: 1,
        //     idInstitucion: 1,
        // }]);
        // await db.poa_depto.create({
        //     fuente11:200,
        //     fuente12:300,
        //     fuente12B:500,
        //     idPoaUE:1,
        //     idDepto:1
        // })
        // await db.actividad.create({
        //     nombre: 'Gira vocacional',
        //     descripcion: 'gira para dar a conocer la carrera en la ciudad',
        //     correlativo:'CA-IS-R-01-01',
        //     estado: 'FORMULACION',
        //     resultadoActividad:'Finalidad de la misma',
        //     tipoActividad: 'ACADEMICA',
        //     categoria: 'COORDINACION',
        //     idPoa: 1,
        //     idPoaDepto:1,
        //     idDepto: 1,
        //     idInstitucion: 1,
        //     idUE: 1,
        //     idResultado:1
        // });
        // await db.actividad.create({
        //     nombre: 'Reparación de equipos en lab',
        //     descripcion: 'reparar los equipos dañados en el lab de Is',
        //     correlativo:'CA-IS-R-01-02',
        //     estado: 'FORMULACION',
        //     resultadoActividad:'Finalidad de la misma',
        //     tipoActividad: 'ACADEMICA',
        //     categoria: 'COORDINACION',
        //     idPoa: 1,
        //     idPoaDepto:1,
        //     idDepto: 1,
        //     idInstitucion: 1,
        //     idUE: 1,
        //     idResultado:1
        // });
        // await db.ACencargados.create({
        //     idActividad: 1,
        //     idEmpleado: 1
        // });
        // await db.ACencargados.create({
        //     idActividad: 2,
        //     idEmpleado: 1
        // });
        // /// Tareas desde aqui
        // /// CATALOGO DE OBJETO DEL GASTO
        // await db.grupogasto.bulkCreate([{
        //     nombre: "Servicios Personales",
        //     identificador: 10000
        // }, {
        //     nombre: "Servicios no Personales",
        //     identificador: 20000
        // }, {
        //     nombre: "Materiales y Suministros",
        //     identificador: 30000
        // }, {
        //     nombre: "Bienes Capitalizables",
        //     identificador: 40000
        // }, {
        //     nombre: "Transferencias y Donaciones",
        //     identificador: 50000
        // }, {
        //     nombre: "Activos Financieros",
        //     identificador: 60000
        // }]);
        // ///Grupo del gasto
        // await db.objetogasto.bulkCreate([{
        //     "nombre": "Diesel",
        //     "identificador": 35620,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Viáticos Nacionales",
        //     "identificador": 26210,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Productos Químicos",
        //     "identificador": 35100,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Productos de Material Plástico",
        //     "identificador": 35800,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Productos Farmacéuticos y Medicinales Varios",
        //     "identificador": 35210,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Productos de Vidrio",
        //     "identificador": 37200,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Instrumental Médico Quirúrgico Menor",
        //     "identificador": 39510,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Material Médico Quirúrgico Menor",
        //     "identificador": 39530,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Equipos Varios de Oficina",
        //     "identificador": 42120,
        //     "idgrupo": 4
        // },
        // {
        //     "nombre": "lectrodomésticos",
        //     "identificador": 42140,
        //     "idgrupo": 4
        // },
        // {
        //     "nombre": "Repuestos y Accesorios",
        //     "identificador": 39600,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Mantenimiento y Reparación de Otros Equipos",
        //     "identificador": 23390,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Aceites y Grasas Lubricantes",
        //     "identificador": 35650,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Insecticidas, Fumigantes y Otros",
        //     "identificador": 35400,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Gasolina",
        //     "identificador": 35610,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Prendas de Vestir",
        //     "identificador": 32310,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Productos De Cemento, Asbesto, Yeso Y Otros",
        //     "identificador": 37100,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Productos Con Propiedades Aislantes",
        //     "identificador": 37300,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Utiles de Escritorio, Oficina y Enseñanza",
        //     "identificador": 39200,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Mantenimiento de Sistemas Informáticos",
        //     "identificador": 23600,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Mantenimiento y Reparación de Equipos de\nComunicación",
        //     "identificador": 23370,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Mantenimiento y Reparación de Equipo para\nComputación",
        //     "identificador": 23350,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Productos Ferrosos",
        //     "identificador": 36100,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Tintas, Pinturas y Colorantes",
        //     "identificador": 35500,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Elementos de Ferretería",
        //     "identificador": 36930,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Herramientas Menores",
        //     "identificador": 36400,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Madera, Corcho y sus Manufacturas",
        //     "identificador": 31500,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Utiles y Materiales Eléctricos",
        //     "identificador": 39300,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Mantenimiento y Reparación de Edificios y\nLocales",
        //     "identificador": 23100,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Mantenimiento y Reparación de Equipos y\nMedios de Transporte",
        //     "identificador": 23200,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Mantenimiento y Reparación de Equipo de\nOficina y Muebles",
        //     "identificador": 23360,
        //     "idgrupo": 2
        // },
        // {
        //     "nombre": "Llantas y Cámaras de Aire",
        //     "identificador": 34400,
        //     "idgrupo": 3
        // },
        // {
        //     "nombre": "Equipos Recreativos y Deportivos",
        //     "identificador": 42720,
        //     "idgrupo": 4
        // },
        // {
        //     "nombre": "Construcciones y Mejoras de Bienes en\nDominio Privado",
        //     "identificador": 47110,
        //     "idgrupo": 4
        // },
        // {
        //     "nombre": "Muebles Varios de Oficina",
        //     "identificador": 42110,
        //     "idgrupo": 4
        // },
        // {
        //     "nombre": "Muebles y Equipos Educacionales",
        //     "identificador": 42710,
        //     "idgrupo": 4
        // }]);
        // //FUente
        // await db.fuente.bulkCreate([{
        //     nombre: "Ingresos del estado",
        //     identificador: "11",
        // }, {
        //     nombre: "Ahorros",
        //     identificador: "12",
        // }, {
        //     nombre: "ingresos propios",
        //     identificador: "12B",
        // }]);
        ///unidad de medida
        await db.unidadmedida.bulkCreate([{
            nombre: "Litros",
        },
        {
            nombre: "Kilogramos",
        },
        {
            nombre: "Gramos",
        },
        {
            nombre: "Unidad",
        },{
            nombre:"Mililitros"
        }
        ]);
        // await db.tarea.bulkCreate([{
        //     nombre: "Compra de Combustible",
        //     descripcion: "Utilizacion de Diesel",
        //     isPresupuesto: true,
        //     idActividad: 1,
        //     idPoa: 1,
        //     idDepto: 1,
        //     idUE: 1
        // }, {
        //     nombre: "Compra de Combustible",
        //     descripcion: "Utilizacion de Gasolina",
        //     isPresupuesto: true,
        //     idActividad: 1,
        //     idPoa: 1,
        //     idDepto: 1,
        //     idUE: 1
        // },
        // {
        //     nombre: "Compra de Consumibles para limpieza",
        //     descripcion: "aire comprimido, pasta termica y limpiacontactos",
        //     isPresupuesto: true,
        //     idActividad: 2,
        //     idPoa: 1,
        //     idDepto: 1,
        //     idUE: 1
        // }, {
        //     nombre: "Compra de Combustible",
        //     descripcion: "Utilizacion de Gasolina",
        //     isPresupuesto: true,
        //     idActividad: 2,
        //     idPoa: 1,
        //     idDepto: 1,
        //     idUE: 1
        // }]);
        // await db.presupuesto.bulkCreate([{
        //     cantidad: 10,
        //     costounitario: 40,
        //     total: 400,
        //     idgrupo: 1,
        //     idobjeto: 2,
        //     idtarea: 1,
        //     idfuente: 1,
        //     idunidad: 1
        // }, {
        //     cantidad: 20,
        //     costounitario: 40,
        //     total: 800,
        //     idgrupo: 1,
        //     idobjeto: 1,
        //     idtarea: 2,
        //     idfuente: 1,
        //     idunidad: 1
        // },
        // {
        //     cantidad: 10,
        //     costounitario: 40,
        //     total: 800,
        //     idgrupo: 1,
        //     idobjeto: 1,
        //     idtarea: 3,
        //     idfuente: 1,
        //     idunidad: 1
        // },
        // {
        //     cantidad: 1,
        //     costounitario: 40,
        //     total: 800,
        //     idgrupo: 1,
        //     idobjeto: 1,
        //     idtarea: 4,
        //     idfuente: 1,
        //     idunidad: 1
        // }]);

        // // historicos tarea
        // await db.tareas_historico.bulkCreate([
        //     {
        //      "nombre": "Combustible Diesel",
        //      "idobjeto": 1,
        //      "objeto": "35620 - Diesel",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Viático tramites legales (Conductor)",
        //      "idobjeto": 2,
        //      "objeto": "26210 - Viáticos Nacionales",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Viático tramites legales CURLP",
        //      "idobjeto": 2,
        //      "objeto": "26210 - Viáticos Nacionales",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Amonio CUATERNARIO, YODO DE 250 ML,CLORO GRANULADO, GEL BOTES DE 250 ML",
        //      "idobjeto": 3,
        //      "objeto": "35100 - Productos Químicos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 5,
        //      "unidad": "Mililitros"
        //     },
        //     {
        //      "nombre": "Bolsa para empacado al vacio 6*12 caja de 100 uns",
        //      "idobjeto": 4,
        //      "objeto": "35800 Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "COLIFORME \/ECOLI caja de 25 unidades, RECUENTO TOTAL BACTERIAS AEROBIAS (RTBA) CAJA DE 50 UNIDADES, ESTAFILOCOCS SAURIOS CAJA DE 25 UNIDADES, ENTEROBACTERIAS CAJA DE 25 UNIDADES, BACTERIAS PARA YOGUR",
        //      "idobjeto": 5,
        //      "objeto": "35210 Productos Farmacéuticos y Medicinales Varios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "FRASCO DE VIDRIO PARA AUTOCLAVE DE 500 ML",
        //      "idobjeto": 6,
        //      "objeto": "37200 Productos de Vidrio",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 5,
        //      "unidad": "Mililitros"
        //     },
        //     {
        //      "nombre": "Guantes de inseminacion descartable caja de 100 unidades",
        //      "idobjeto": 7,
        //      "objeto": "39510 - Instrumental Médico Quirúrgico Menor",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Instrumental Médico Quirúrgico",
        //      "idobjeto": 8,
        //      "objeto": "39530 - Material Médico Quirúrgico Menor",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Insumos Reactivos para laboratorios",
        //      "idobjeto": 3,
        //      "objeto": "35100 - Productos Químicos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Unidades y equipo de aires acondicionado instalados",
        //      "idobjeto": 9,
        //      "objeto": "42120 - Equipos Varios de Oficina",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Estufas eléctricas para laboratorio",
        //      "idobjeto": 10,
        //      "objeto": "42140 - Electrodomésticos",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Repuestos y accesorios aires acondicionados",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de limpieza aires 12000-24000 BTU",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de mantenimiento de UPS Centros de datos",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Aceite 15-40",
        //      "idobjeto": 13,
        //      "objeto": "35650 - Aceites y Grasas Lubricantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Hilo maquina podadora 4 mm",
        //      "idobjeto": 4,
        //      "objeto": "35800 - Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de mantenimiento podadoras y termonebulizadora",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Aqua reslink liquida",
        //      "idobjeto": 14,
        //      "objeto": "35400 - Insecticidas, Fumigantes y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Deltametrina 2.5%",
        //      "idobjeto": 14,
        //      "objeto": "35400 - Insecticidas, Fumigantes y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Gasolina Super",
        //      "idobjeto": 15,
        //      "objeto": "35610 - Gasolina",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Traje de fumigación",
        //      "idobjeto": 16,
        //      "objeto": "32310 - Prendas de Vestir",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Aqua reslink liquida Litro",
        //      "idobjeto": 14,
        //      "objeto": "35400 - Insecticidas, Fumigantes y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Tablilla tabla yeso de 1450 2*4*1\/2",
        //      "idobjeto": 16,
        //      "objeto": "37100 - Productos De Cemento, Asbesto, Yeso Y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Compra de memorias RAM DDR3-8GB",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Disco duros SSD-256GB-factor SATA para equipo Desktop",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Bolsas plásticas 100cm * 70cm",
        //      "idobjeto": 4,
        //      "objeto": "35800 - Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Botes aire comprimido",
        //      "idobjeto": 3,
        //      "objeto": "35100 - Productos Químicos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Botes de espuma expansiva",
        //      "idobjeto": 18,
        //      "objeto": "37300 - Productos Con Propiedades Aislantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Botes de silicón",
        //      "idobjeto": 19,
        //      "objeto": "39200 - Utiles de Escritorio, Oficina y Enseñanza",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Limpiadores de contacto",
        //      "idobjeto": 3,
        //      "objeto": "35100 - Productos Químicos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Limpiadores de espuma",
        //      "idobjeto": 3,
        //      "objeto": "35100 - Productos Químicos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Paquete de 50 fajas plasticas de 12",
        //      "idobjeto": 4,
        //      "objeto": "35800 - Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Masking tape 2pulgadas",
        //      "idobjeto": 19,
        //      "objeto": "39200 - Utiles de Escritorio, Oficina y Enseñanza",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Tonners y tintas para impresoras",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servcios de soporte para sistemas interactivos",
        //      "idobjeto": 20,
        //      "objeto": "23600 - Mantenimiento de Sistemas Informáticos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicios de mantenimiento e instalacion de camaras IP",
        //      "idobjeto": 21,
        //      "objeto": "23370 - Mantenimiento y Reparación de Equipos de\nComunicación",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicios tecnicos para mantenimiento de computadoras LAPTOP\/ WORKSTATION",
        //      "idobjeto": 22,
        //      "objeto": "23350 - Mantenimiento y Reparación de Equipo para\nComputación",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicios tecnicos para mantenimiento de impresoras",
        //      "idobjeto": 22,
        //      "objeto": "23350 - Mantenimiento y Reparación de Equipo para\nComputación",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicios técnicos para revision de UPS",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Compra de Fluxometros 3080050 REGAL 111-1.28 XL",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Compra de O62201000 ORINAL ARICA",
        //      "idobjeto": 16,
        //      "objeto": "37100 - Productos De Cemento, Asbesto, Yeso Y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Compra de inodoro cadet flx 4.8LTS ALT 15",
        //      "idobjeto": 16,
        //      "objeto": "37100 - Productos De Cemento, Asbesto, Yeso Y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Orinal Washbrook Pint Equipado",
        //      "idobjeto": 16,
        //      "objeto": "37100 - Productos De Cemento, Asbesto, Yeso Y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Contratacion de servicio de mantenimiento y reparacion del sistema hidrosanitario; Desmontaje y montaje de grifos de lavamanos y Accesorios",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Contratacion de servicio de mantenimiento y reparacion del sistema hidrosanitario; Desmontaje y montaje fluxómetro en inodoros y urinarios",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Contratacion de servicio de mantenimiento y reparacion del sistema hidrosanitario; Desmontaje y montaje fluxómetro en inodoros y urinarios",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Alambre galvanizado, válvula, capotes de alucin",
        //      "idobjeto": 23,
        //      "objeto": "36100 - Productos Ferrosos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Barniz, curador y cinta tapagoteras",
        //      "idobjeto": 23,
        //      "objeto": "35500 - Tintas, Pinturas y Colorantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cemento",
        //      "idobjeto": 16,
        //      "objeto": "37100 - Productos De Cemento, Asbesto, Yeso Y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cielo falso de fibra mineral (opcional) aprox. 65cm x 65cm",
        //      "idobjeto": 16,
        //      "objeto": "37100 - Productos De Cemento, Asbesto, Yeso Y Otros",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Clavos, escuadra, felpa, tornillos",
        //      "idobjeto": 25,
        //      "objeto": "36930 - Elementos de Ferretería",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Lamina para cielo falso, tuberia PVC, botes para basura",
        //      "idobjeto": 4,
        //      "objeto": "35800 - Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Limas, desarmadores grandes",
        //      "idobjeto": 26,
        //      "objeto": "36400 - Herramientas Menores",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Madera tablas de pino cepillada",
        //      "idobjeto": 27,
        //      "objeto": "31500 - Madera, Corcho y sus Manufacturas",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Compra de materiales eléctricos, cables, lámparas",
        //      "idobjeto": 28,
        //      "objeto": "39300 - Utiles y Materiales Eléctricos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Diagnostico y reparacion del sistema electrico interno",
        //      "idobjeto": 29,
        //      "objeto": "23100 - Mantenimiento y Reparación de Edificios y\nLocales",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de revisión de tuberia de agua potable y aguas negras y alcantaria",
        //      "idobjeto": 29,
        //      "objeto": "23100 - Mantenimiento y Reparación de Edificios y\nLocales",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cascos protección",
        //      "idobjeto": 4,
        //      "objeto": "35800 - Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Chalecos de protección",
        //      "idobjeto": 16,
        //      "objeto": "32310 - Prendas de Vestir",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Mantenimineto y reparacion de herraminetas menores",
        //      "idobjeto": 12,
        //      "objeto": "23390 - Mantenimiento y Reparación de Otros Equipos",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Baterias 130 L. 31P-900PSTE para el bus HIUNDAY",
        //      "idobjeto": 28,
        //      "objeto": "39300 - Utiles y Materiales Eléctricos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio Cambio de aceite para el BUS HIUNDAY ( 3 galones de aceite 15W40 LONG LIFE; 1 FILTRO DE ACEITE LFP9930T )",
        //      "idobjeto": 30,
        //      "objeto": "23200 - Mantenimiento y Reparación de Equipos y\nMedios de Transporte",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio cambio de aceite para el NISAN FRONTIER ; 1 galones 1\/4 de aceite 15W40 LONG LIFE; 1 FILTRO DE ACEITE LFP9930T9",
        //      "idobjeto": 30,
        //      "objeto": "23200 - Mantenimiento y Reparación de Equipos y\nMedios de Transporte",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Brochas fibra natural\/sintetica 2\"",
        //      "idobjeto": 25,
        //      "objeto": "36930 - Elementos de Ferretería",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Brochas fibra natural\/sintetica 4\"",
        //      "idobjeto": 25,
        //      "objeto": "36930 - Elementos de Ferretería",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Diluyente",
        //      "idobjeto": 23,
        //      "objeto": "35500 - Tintas, Pinturas y Colorantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Felpa para rodos gruesa\/delgada",
        //      "idobjeto": 25,
        //      "objeto": "36930 - Elementos de Ferretería",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Pintura anticorrosiva Galón",
        //      "idobjeto": 23,
        //      "objeto": "35500 - Tintas, Pinturas y Colorantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Pintura impermeabilizante para losa de cemento (Galón)",
        //      "idobjeto": 23,
        //      "objeto": "35500 - Tintas, Pinturas y Colorantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Thiner",
        //      "idobjeto": 23,
        //      "objeto": "35500 - Tintas, Pinturas y Colorantes",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cambio de dos fanes para el aire de 36000 BTU (Laboratorio de Ciencias Biológicas)",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cambio de motor para el aire de 18000 BTU (oficina de Biologia)",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cambio de motor para el aire de 36000 BTU (Laboratorio de Ciencias Biológicas)",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cambio de motor para el aire de 60000 BTU (Laboratorio de Computacion y la URI)",
        //      "idobjeto": 11,
        //      "objeto": "39600 - Repuestos y Accesorios",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de limpieza aires 12000 BTU",
        //      "idobjeto": 31,
        //      "objeto": "23360 - Mantenimiento y Reparación de Equipo de\nOficina y Muebles",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de limpieza aires 18000 BTU",
        //      "idobjeto": 31,
        //      "objeto": "23360 - Mantenimiento y Reparación de Equipo de\nOficina y Muebles",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de limpieza aires 24000 BTU",
        //      "idobjeto": 31,
        //      "objeto": "23360 - Mantenimiento y Reparación de Equipo de\nOficina y Muebles",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de limpieza aires 36000 BTU",
        //      "idobjeto": 31,
        //      "objeto": "23360 - Mantenimiento y Reparación de Equipo de\nOficina y Muebles",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio de limpieza aires 60000 BTU",
        //      "idobjeto": 31,
        //      "objeto": "23360 - Mantenimiento y Reparación de Equipo de\nOficina y Muebles",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Diesel",
        //      "idobjeto": 1,
        //      "objeto": "35620 - Diesel",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 1,
        //      "unidad": "Litros"
        //     },
        //     {
        //      "nombre": "Llantas",
        //      "idobjeto": 32,
        //      "objeto": "34400 - Llantas y Cámaras de Aire",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio cambio de aceite para el NISAN FRONTIER ; 1 galon 1\/4 de aceite 15W40 LONG LIFE; 1 FILTRO DE ACEITE LFP9930T9",
        //      "idobjeto": 30,
        //      "objeto": "23200 - Mantenimiento y Reparación de Equipos y\nMedios de Transporte",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Servicio cambio de aceite para el TOYOTA ; 1 galone 1\/4 de aceite 15W40 LONG LIFE; 1 FILTRO DE ACEITE LFP9930T9",
        //      "idobjeto": 30,
        //      "objeto": "23200 - Mantenimiento y Reparación de Equipos y\nMedios de Transporte",
        //      "idgrupo": 2,
        //      "grupo": "20000 - SERVICIOS NO PERSONALES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Cielo falso de asbesto para alero de techo (Pliego de 2x4 pie)",
        //      "idobjeto": 4,
        //      "objeto": "35800 - Productos de Material Plástico",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Recarga de extintor POLVO QUIMICO SECO, Dióxido carbono, Tipo K",
        //      "idobjeto": 3,
        //      "objeto": "35100 - Productos Químicos",
        //      "idgrupo": 3,
        //      "grupo": "30000 - MATERIALES Y SUMINISTROS",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Licitación mobiliario y equipo de oficina para cafeteria.",
        //      "idobjeto": 33,
        //      "objeto": "42720 - Equipos Recreativos y Deportivos",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Contratación directa obra gris",
        //      "idobjeto": 34,
        //      "objeto": "47110 - Muebles y Equipos Educacionales",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Reparaciones varias (cielo falso, revestimiento de cerámica, sistema de iluminacion)",
        //      "idobjeto": 34,
        //      "objeto": "47110 - Muebles y Equipos Educacionales",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Mesa\/Escritorio para computadoras",
        //      "idobjeto": 35,
        //      "objeto": "42110 - Muebles Varios de Oficina",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Adquisicion de modular",
        //      "idobjeto": 36,
        //      "objeto": "42710 - Muebles y Equipos Educacionales",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Sillas ejectutivas para trabajo docente",
        //      "idobjeto": 36,
        //      "objeto": "42710 - Muebles y Equipos Educacionales",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     },
        //     {
        //      "nombre": "Lictacion obra de infraestructura pacimentacion parque principal UNAH-CURLP",
        //      "idobjeto": 36,
        //      "objeto": "42710 - Muebles y Equipos Educacionales",
        //      "idgrupo": 4,
        //      "grupo": "40000 - BIENES CAPITALIZABLES",
        //      "idunidad": 4,
        //      "unidad": "Unidad"
        //     }
        //    ]);





        // //Indicadores_Poa
        // await db.indicadoresPoa.create({
        //     nombre: "Indicador 1",
        //     descripcion: "Indicador 1",
        //     cantidadPlanificada: 20,
        //     cantidadEjecutada: 0,
        //     promedioAlcanzado: 0,
        //     isCantidad: 1,
        //     isPorcentaje: 0,
        //     idActividad: 1

        // });

        // await db.empleado_depto.bulkCreate([{
        //     idEmpleado: 1,
        //     idDepto: 1
        // },
        // {
        //     idEmpleado: 1,
        //     idDepto: 2
        // },
        // {
        //     idEmpleado: 2,
        //     idDepto: 1
        // },
        // {
        //     idEmpleado: 3,
        //     idDepto: 1
        // }]);

        await db.trimestre.bulkCreate([{
                trimestre:'Primero'
            },{
                trimestre:'Segundo'
            },{
                trimestre:'Tercero'
            },{
                trimestre:'Cuarto'
            }
        ]);
        db.mes.bulkCreate(
            [
                {
                    mes:'Enero',
                    idTrimestre:1 
                },
                {
                    mes:'Febrero',
                    idTrimestre:1 
                },
                {
                    mes:'Marzo',
                    idTrimestre:1 
                },
                {
                    mes:'Abril',
                    idTrimestre:2 
                },
                {
                    mes:'Mayo',
                    idTrimestre:2 
                },
                {
                    mes:'Junio',
                    idTrimestre:2 
                },
                {
                    mes:'Julio',
                    idTrimestre:3 
                },
                {
                    mes:'Agosto',
                    idTrimestre:3 
                },
                {
                    mes:'Septiembre',
                    idTrimestre:3 
                },
                {
                    mes:'Octubre',
                    idTrimestre:4 
                },
                {
                    mes:'Noviembre',
                    idTrimestre:4 
                },
                {
                    mes:'Diciembre',
                    idTrimestre:4 
                }
            ]
        )

        // db.planificacion.bulkCreate([{
        //     cantidad: 25,
        //     fechaInicio: '2021-01-01',
        //     fechaFin: '2021-03-31',
        //     idActividad:1,
        //     idIndicador:1,
        //     idMes:1
        // }]);

        // db.ACencargados.bulkCreate([{
        //     descripcion: "Encargado de Actividades",
        //     idEmpleado: 1,
        //     idActividad: 1,
        // }])
        // db.seguimiento_planificacion.bulkCreate([{
        //     seguimiento: "Compra de combustible",
        //     ejecutado:20,
        //     fecha: '2021-10-01',
        //     idPlanificacion:1,
        //     idActividad: 1,
        //     idPoaDepto:1
        // }])

        // db.seguimiento_tarea.bulkCreate([{
        //     seguimiento: "Compra de combustible",
        //     monto_ejecutado:10,
        //     fecha: '2021-10-01',
        //     idTarea:1,
        //     idActividad: 1,
        //     idPoaDepto:1
        // }])

        // db.medioVerificacion.bulkCreate([{
        //     nombre:'Fatura de Compra de Combustible',
        //     descripcion:'Esta factura es de la tarea de los 40 litros de combustible',
        //     url:'aIdXQwFlAPBD7W9VV7EKt2in.png',
        //     nombre_Archivo:'Captura de pantalla.png',
        //     idSeguimiento:1
        // }])

    } catch (error) {
        console.log(error);
    }



};
