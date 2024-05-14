import { Product } from "../types";
import { fileserver } from "../../config/config";

export const cook: Product[] = [
    { // AW-YG715
        name: `Yogurtera`,
        sku: `AW-YG715`,
        link: `/productos/AW-YG715`,
        categories: [112],
        imgs: [
            `/products/AW-YG715/img/1.webp`,
            `/products/AW-YG715/img/2.webp`,
            `/products/AW-YG715/img/3.webp`,
            `/products/AW-YG715/img/4.webp`,
            `/products/AW-YG715/img/5.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "3º Generación",
        altBackground: true,
        banners: [
            {
                title: `Disfrutá de un desayuno natural`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_01.png`,
                desc: `Personaliza tus sabores favoritos con diferentes opciones,Fácil de usar y con resultados sorprendentes, nuestra yogurtera te permite experimentar con sabores y texturas. `,
            },
            {
                title: `¡ Super Fácil !`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_02.png`,
                desc: `Un desayuno bien equilibrado te brinda la energía necesaria para enfrentar el día con todo. En simples pasos obetene los resultados mas deliciosos`,
            },
            {
                title: `Una opción saludable`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_03.png`,
                desc: `Controlas cada ingrediente, asegurándote de que cada bocado sea puro placer y nutrición. `,
            },
            {
                title: `Prepará las raciones para todo el día`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_04.png`,
                desc: `Con capacidad para preparar 1.2 litros de yogur, te permitirá disfrutar de un alimento casero fresco  con facilidad.`,
            }
        ],
        shortDesc: `Fácil, Casero y Sano`,
        longDesc:
            "Prepara yogures deliciosos en casa con nuestra Yogurtera de Acero Inoxidable. Equipada con 7 frascos de vidrio de 180 ml, control automático de temperatura y bajo consumo eléctrico, esta yogurtera combina comodidad y eficiencia. Su diseño elegante en acero inoxidable y la luz LED indicadora hacen que sea fácil y moderna. ¡Disfruta de yogures personalizados sin esfuerzo!",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 98 },
            { id: 99, },
            { id: 100 },
            { id: 101 },
            { id: 102 },
        ],
        features: [
            { id: 2, value: `20W` },
            { id: 16, value: `235 * 115 mm` },
            { id: 17, value: `250* 250 * 135 mm` },
            { id: 19, value: `7798111355364` },
            { id: 59, value: `220 - 240V` },
            { id: 60, value: `1,2L (7 frascos de 180 ml)` },
        ],
        includes: [
            38,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1wGn0gSBSx-IeRoY5tyqSLwL7b4HYglWl`,
    },

    { // AW-YG816
        name: `Yogurtera digital`,
        sku: `AW-YG816`,
        link: `/productos/AW-YG816`,
        categories: [112],
        imgs: [
            `/products/AW-YG816/img/1.webp`,
            `/products/AW-YG816/img/2.webp`,
            `/products/AW-YG816/img/3.webp`,
            `/products/AW-YG816/img/4.webp`,
            `/products/AW-YG816/img/5.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: `Disfrutá de un desayuno natural`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_01.png`,
                desc: `Personaliza tus sabores favoritos con diferentes opciones,Fácil de usar y con resultados sorprendentes, nuestra yogurtera te permite experimentar con sabores y texturas.  `,
            },
            {
                title: `¡ Super Fácil !`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_02.png`,
                desc: `Olvídate de los procesos complicados, nuestra yogurtera  hace todo el trabajo por vos, programá el tiempo, la temperatura y listo te avisará cuando el yogur esté listo.`,
            },
            {
                title: `Una opción saludable`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_03.png`,
                desc: `Controlas cada ingrediente, asegurándote de que cada bocado sea puro placer y nutrición.  `,
            },
            {
                title: `Prepará las raciones para todo el día`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_04.png`,
                desc: `Con capacidad para preparar 1.4 litros de yogur, te permitirá disfrutar de un alimento casero fresco.`,
            }
        ],
        shortDesc: `Súper Fácil, Automático`,
        longDesc:
            "Prepara yogures deliciosos con nuestra Yogurtera Premium. Con 8 frascos de vidrio, panel digital, y exterior de acero inoxidable, es fácil de usar y eficiente energéticamente. ¡Disfruta de yogures caseros con un sabor perfecto!",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 103 },
            { id: 100 },
            { id: 101 },
            { id: 102 },
        ],
        features: [
            { id: 2, value: `25W` },
            { id: 16, value: `145 * 368 * 190 mm` },
            { id: 17, value: `140* 360 * 190 mm` },
            { id: 19, value: `7798111355357` },
            { id: 59, value: `220 - 240V` },
            { id: 60, value: `1,4L (8 frascos de 180 ml)` },
        ],
        includes: [
            38,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1XymTgGHR137SIuVi9aRM5vItax_H2RcU`,
    },

    { // AW-BP508B
        name: `Batidora de pie Blanco`,
        sku: `AW-BP508B`,
        link: `/productos/AW-BP508B`,
        categories: [115],
        imgs: [
            `/products/AW-BP508B/img/1.webp`,
            `/products/AW-BP508B/img/2.webp`,
            `/products/AW-BP508B/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508B/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508B/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508B/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [
            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso


        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1QteI1l_MlK_aNEGzbvVVDhFxVNAB8Unz`,
    },

    { // AW-BP508C
        name: `Batidora de pie Crema`,
        sku: `AW-BP508C`,
        link: `/productos/AW-BP508C`,
        categories: [115],
        imgs: [
            `/products/AW-BP508C/img/1.webp`,
            `/products/AW-BP508C/img/2.webp`,
            `/products/AW-BP508C/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508C/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508C/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508C/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [

            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso
        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1YzhlyNZVoJjESNjuzOntG_NwXiqiEQNm`,
    },

    { // AW-BP508N
        name: `Batidora de pie Negro`,
        sku: `AW-BP508N`,
        link: `/productos/AW-BP508N`,
        categories: [115],
        imgs: [
            `/products/AW-BP508N/img/1.webp`,
            `/products/AW-BP508N/img/2.webp`,
            `/products/AW-BP508N/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508N/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508N/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508N/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [

            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso


        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1zaeA8_DUJfLOPkqzdFZHPCupSF4t-eXN`,
    },

    { // AW-BP508R
        name: `Batidora de pie Rojo`,
        sku: `AW-BP508R`,
        link: `/productos/AW-BP508R`,
        categories: [115],
        imgs: [
            `/products/AW-BP508R/img/1.webp`,
            `/products/AW-BP508R/img/2.webp`,
            `/products/AW-BP508R/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508R/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508R/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508R/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [

            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso


        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1HqjImgwSVlN5EtmzZZyr40ujbl2jV4-H`,
    },

    { // AW-FA35B
        name: `Freidora de Aire Blanco`,
        sku: `AW-FA35B`,
        link: `/productos/AW-FA35B`,
        categories: [113],
        imgs: [
            `/products/AW-FA35B/img/1.webp`,
            `/products/AW-FA35B/img/2.webp`,
            `/products/AW-FA35B/img/3.webp`,
            `/products/AW-FA35B/img/4.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Potencia y capacidad`,
                img: fileserver + `/banners/AW-FA35B/1.png`,
                desc: `Experimentá cocinando, con capacidad de 3,6 L  podras preparar porciones generosas y gracias a su potencia de 1400 W obtendras resultados rápidos y crujientes. `,
            },
            {
                title: `Cociná saludable`,
                img: fileserver + `/banners/AW-FA35B/2.png`,
                desc: `Reducí el aceite para una alimentación más saludable al disminuir grasas saturadas. Además, facilita la limpieza al generar menos residuos grasos.`,
            },
            {
                title: `Variedad de alimentos`,
                img: fileserver + `/banners/AW-FA35B/3.png`,
                desc: `Podrás preparar una amplia variedad de alimentos y también recalentarlos con facilidad en cuestion de minutos manteniendo su textura y sabor originales. `,
            },
            {
                title: `Ahorrá energía`,
                img: fileserver + `/banners/AW-FA35B/4.png`,
                desc: `No solo reduce el consumo de energía, sino que también cuenta con apagado automático para una mayor seguridad y conveniencia.  Además podrás limpiar sin esfuerzo  su canasta desmontable apta para lavavajillas.  `,
            },
        ],
        shortDesc: `Potente, Saludable, Versátil.`,
        longDesc:
            "La freidora de aire de 3.6 L y 1400 W es potente y versátil. Reduce el uso de aceite para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 109, value: `1400W` },
            { id: 111 }, //Ahorro de energia
            { id: 112 }, //Aire caliente 360°
            { id: 113 }, //Apagado automático
            { id: 114 }, //Apto para lavavajillas
            { id: 115, value: `3,6L` }, //Capacidad 
            { id: 116 }, //Interior antiadherente
            { id: 117 }, //Multiples comidas
            { id: 118 }, //Recalentá o cociná
        ],
        features: [
            { id: 59, value: `220 - 240V` }, //Tension
            { id: 2, value: `1400W` }, //Potencia
            { id: 60, value: `3,6L` }, //Capacidad
            { id: 16, value: `240 * 260 * 310 mm` },
            { id: 17, value: `310* 310 * 330 mm` },
            { id: 19, value: `7798111355425` },


        ],
        includes: [
            9, // Manual y garantía
        ],
        downloads: ``,
    },

    { // AW-FA35N
        name: `Freidora de Aire Negro`,
        sku: `AW-FA35N`,
        link: `/productos/AW-FA35N`,
        categories: [113],
        imgs: [
            `/products/AW-FA35N/img/1.webp`,
            `/products/AW-FA35N/img/2.webp`,
            `/products/AW-FA35N/img/3.webp`,
            `/products/AW-FA35N/img/4.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Potencia y capacidad`,
                img: fileserver + `/banners/AW-FA35N/1.png`,
                desc: `Experimentá cocinando, con capacidad de 3,6 L  podras preparar porciones generosas y gracias a su potencia de 1400 W obtendras resultados rápidos y crujientes. `,
            },
            {
                title: `Cociná saludable`,
                img: fileserver + `/banners/AW-FA35N/2.png`,
                desc: `Reducí el aceite para una alimentación más saludable al disminuir grasas saturadas. Además, facilita la limpieza al generar menos residuos grasos.`,
            },
            {
                title: `Variedad de alimentos`,
                img: fileserver + `/banners/AW-FA35N/3.png`,
                desc: `Podrás preparar una amplia variedad de alimentos y también recalentarlos con facilidad en cuestion de minutos manteniendo su textura y sabor originales. `,
            },
            {
                title: `Ahorrá energía`,
                img: fileserver + `/banners/AW-FA35N/4.png`,
                desc: `No solo reduce el consumo de energía, sino que también cuenta con apagado automático para una mayor seguridad y conveniencia.  Además podrás limpiar sin esfuerzo  su canasta desmontable apta para lavavajillas.  `,
            },
        ],
        shortDesc: `Potente, Saludable, Versátil.`,
        longDesc:
            "La freidora de aire de 3.6 L y 1400 W es potente y versátil. Reduce el uso de aceite para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 109, value: `1400W` },
            { id: 111 }, //Ahorro de energia
            { id: 112 }, //Aire caliente 360°
            { id: 113 }, //Apagado automático
            { id: 114 }, //Apto para lavavajillas
            { id: 115, value: `3,6L` }, //Capacidad 
            { id: 116 }, //Interior antiadherente
            { id: 117 }, //Multiples comidas
            { id: 118 }, //Recalentá o cociná
        ],
        features: [
            { id: 59, value: `220 - 240V` }, //Tension
            { id: 2, value: `1400W` }, //Potencia
            { id: 60, value: `3,6L` }, //Capacidad
            { id: 16, value: `240 * 260 * 310 mm` },
            { id: 17, value: `310* 310 * 330 mm` },
            { id: 19, value: `7798111355432` },


        ],
        includes: [
            9, // Manual y garantía
        ],
        downloads: ``,
    },
]