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

]