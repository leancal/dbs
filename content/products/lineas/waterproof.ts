import { Product } from '../../types'
import { fileserver } from "../../../config/config";

export const waterproof: Product[] = [
    { // AW-PP265
        name: `Parlante inalambrico Portatil`,
        sku: `AW-PP265`,
        link: `/productos/AW-PP265`,
        line: `waterproof`,
        categories: [101],
        imgs: [
            `/products/AW-PP265/img/AW-PP265_1.png`,
            `/products/AW-PP265/img/AW-PP265_2.png`,
            `/products/AW-PP265/img/AW-PP265_3.png`,
            `/products/AW-PP265/img/AW-PP265_4.png`,
            `/products/AW-PP265/img/AW-PP265_5.png`,
            `/products/AW-PP265/img/AW-PP265_6.png`,
        ].map((e) => fileserver + e),
        top: true,
        360: false,
        gen: "1º Generación",
        banners: [
            {
                title: `Resistente al agua`,
                img: fileserver + `/banners/AW-PP265/Banner_AW-PP265_01.png`,
                desc: "Ahora es posible disfrutar de la música en todo terreno! El parlante AIWA es resistente al agua, conforme con la norma IPX5, acompañándote en cualquier aventura.",
            },
            {
                title: `True Wireless Stereo`,
                img: fileserver + `/banners/AW-PP265/Banner_AW-PP265_02.png`,
                desc: "Con esta herramienta vas a poder conectar dos parlantes iguales a través del bluetooth para transmitir de manera separada el canal izquierdo y el derecho para así conseguir un sonido stereo.",
            },
            {
                title: "¡Llevalo a todos lados!",
                img: fileserver + "/banners/AW-PP265/Banner_AW-PP265_03.png",
                desc: "Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.",
            },
            {
                title: "Efectos de Luz",
                img: fileserver + `/banners/AW-PP265/Banner_AW-PP265_04.png`,
                desc: `Deslumbrantes luces que se dedican a brillar a los costados del parlante. Pueden encandilar un momento especial o podés elegir apagarlas para optimizar la batería y disfrutar por más horas.`,
            },
        ],
        shortDesc: `Aventura sin límites`,
        longDesc:
            "Su diseño trasportable te permite llevar la fiesta contigo a donde vayas, ya sea en la playa, en la piscina o en tus excursiones al aire libre. Además, cuenta con una correa firme que facilita su transporte, permitiéndote llevar la música contigo de manera cómoda y segura.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,

        featuredFeatures: [
            {
                // Potencia
                id: 2,
                value: `2 * 6.5W`,
            },
            {
                // Bluetooth
                id: 12,
            },
            {
                // Efectos de Luz
                id: 6,
            },
            {
                //Bateria recargable
                id: 7,
                value: `3.7V / 3000 mAh`,
            },
            {
                //Transportable
                id: 96,
            },
            {
                //Manos libres
                id: 46,
            },
            {
                //Auxiliar
                id: 17,
            },
            {
                // TWS
                id: 11,
            },
            {
                //Alcance
                id: 58,
            },
            {
                //Resistente al agua IPX5
                id: 97,
            }
        ],
        features: [

            {
                // Potencia
                id: 2,
                value: "2 * 6.5W",
            },
            {
                // Batería
                id: 10,
                value: "3.7V / 3000 mAh",
            },
            {
                // Luces
                id: 12,
                value: "RGB con efectos",
            },
            {
                // Conectividad
                id: 9,
                value: "Bluetooth 5.3",
            },
            {
                // Funciones
                id: 13,
                value: "TWS, Manos libres",
            },
            {
                // Entradas
                id: 8,
                value: "Auxiliar, De carga",
            },
            {
                // Medidas del producto
                id: 16,
                value: "85 * 185 * 90 mm",
            },
            {
                // Medidas de la caja
                id: 17,
                value: "139 * 203 * 139 mm",
            },
            {
                // Peso
                id: 18,
                value: "860 gr",
            },
            {
                //Altavoz
                id: 57,
                value: "2.25” * 2",
            },
            {
                //Impermeabilidad
                id: 58,
                value: 'Nivel IPX5',
            }
        ],
        includes: [
            3, // Cable aux
            6, // Cable usb c
            9, // Manual de usuario
        ],
        downloads: `https://drive.google.com/drive/folders/1sqrWQJPy1J0DtN92AaTaeclt36-W5PxI`,
        variants: [],
        videos: []
    },

    { // AW-PP210
        name: `Parlante inalambrico Portatil`,
        sku: `AW-PP210`,
        link: `/productos/AW-PP210`,
        line: `waterproof`,
        categories: [101],
        imgs: [
            `/products/AW-PP210/img/AW-PP210_1.webp`,
            `/products/AW-PP210/img/AW-PP210_2.webp`,
            `/products/AW-PP210/img/AW-PP210_3.webp`,
            `/products/AW-PP210/img/AW-PP210_4.webp`,
            `/products/AW-PP210/img/AW-PP210_5.webp`,
            `/products/AW-PP210/img/AW-PP210_6.webp`,
        ].map((e) => fileserver + e),
        top: true,
        360: false,
        gen: "1º Generación",
        banners: [
            {
                title: `Resistente al agua`,
                img: fileserver + `/banners/AW-PP210/Banner_AW-PP210_01.png`,
                desc: "Ahora es posible disfrutar de la música en todo terreno! El parlante AIWA es resistente al agua, conforme con la norma IPX5, acompañándote en cualquier aventura.",
            },
            {
                title: `True Wireless Stereo`,
                img: fileserver + `/banners/AW-PP210/Banner_AW-PP210_02.png`,
                desc: "Con esta herramienta vas a poder conectar dos parlantes iguales a través del bluetooth para transmitir de manera separada el canal izquierdo y el derecho para así conseguir un sonido stereo.",
            },
            {
                title: "¡Llevalo a todos lados!",
                img: fileserver + "/banners/AW-PP210/Banner_AW-PP210_03.png",
                desc: "Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.",
            },
            {
                title: "Efectos de Luz",
                img: fileserver + `/banners/AW-PP210/Banner_AW-PP210_04.png`,
                desc: `Deslumbrantes luces que se dedican a brillar a los costados del parlante. Pueden encandilar un momento especial o podés elegir apagarlas para optimizar la batería y disfrutar por más horas.`,
            },
        ],
        shortDesc: `Potencia a tu lado`,
        longDesc:
            "No dejes que nada interrumpa tu diversión, lleva contigo este parlante portátil y disfruta de un sonido potente en cualquier momento y lugar. Con su resistencia al agua (IPX5) y portabilidad hacen de este parlante una elección incomparable para aquellos que buscan una experiencia musical sin límites.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,

        featuredFeatures: [
            {
                // Potencia
                id: 2,
                value: `2 * 10W`,
            },
            {
                // Bluetooth
                id: 12,
            },
            {
                // Efectos de Luz
                id: 6,
            },
            {
                //Bateria recargable
                id: 7,
                value: `3.7V / 3600 mAh`,
            },
            {
                //Transportable
                id: 96,
            },
            {
                //Manos libres
                id: 46,
            },
            {
                //Auxiliar
                id: 17,
            },
            {
                // TWS
                id: 11,
            },
            {
                //Resistente al agua IPX5
                id: 97,
            }
        ],
        features: [

            {
                // Potencia
                id: 2,
                value: "2 * 10W",
            },
            {
                // Batería
                id: 10,
                value: "3.7V / 3600 mAh",
            },
            {
                // Luces
                id: 12,
                value: "RGB con efectos",
            },
            {
                // Conectividad
                id: 9,
                value: "Bluetooth 5.3",
            },
            {
                // Funciones
                id: 13,
                value: "TWS, Manos libres",
            },
            {
                // Entradas
                id: 8,
                value: "Auxiliar, De carga",
            },
            {
                // Medidas del producto
                id: 16,
                value: "260 * 100 * 95 mm",
            },
            {
                // Medidas de la caja
                id: 17,
                value: "288 * 181 * 139 mm",
            },
            {
                // Peso
                id: 18,
                value: "1,14 kg",
            },
            {
                //Altavoz
                id: 57,
                value: "2.5” * 2",
            },
            {
                //Impermeabilidad
                id: 58,
                value: 'Nivel IPX5',
            }
        ],
        includes: [
            3, // Cable aux
            6, // Cable usb c
            9, // Manual de usuario
        ],
        downloads: `https://drive.google.com/drive/folders/1iTadj5aWDKiNiVUvv2w1o70jVEUM-qLT`,
        variants: [],
        videos: []
    },

    { // AW-PP106
        name: `Parlante inalambrico UltraPortatil`,
        sku: `AW-PP106`,
        link: `/productos/AW-PP106`,
        line: `waterproof`,
        categories: [101],
        imgs: [
            `/products/AW-PP106/img/AW-PP106_1.webp`,
            `/products/AW-PP106/img/AW-PP106_2.webp`,
            `/products/AW-PP106/img/AW-PP106_3.webp`,
            `/products/AW-PP106/img/AW-PP106_4.webp`,
            `/products/AW-PP106/img/AW-PP106_5.webp`,
        ].map((e) => fileserver + e),
        top: true,
        360: false,
        gen: "1º Generación",
        banners: [
            {
                title: `Resistente al agua`,
                img: fileserver + `/banners/AW-PP106/Banner_AW-PP106_01.png`,
                desc: "Ahora es posible disfrutar de la música en todo terreno! El parlante AIWA es resistente al agua, conforme con la norma IPX7, acompañándote en cualquier aventura.",
            },
            {
                title: `True Wireless Stereo`,
                img: fileserver + `/banners/AW-PP106/Banner_AW-PP106_02.png`,
                desc: "Con esta herramienta vas a poder conectar dos parlantes iguales a través del bluetooth para transmitir de manera separada el canal izquierdo y el derecho para así conseguir un sonido stereo.",
            },
            {
                title: "¡Llevalo a todos lados!",
                img: fileserver + "/banners/AW-PP106/Banner_AW-PP106_03.png",
                desc: "Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.",
            },
            {
                title: "Efectos de Luz",
                img: fileserver + `/banners/AW-PP106/Banner_AW-PP106_04.png`,
                desc: `Deslumbrantes luces que se dedican a brillar a los costados del parlante. Pueden encandilar un momento especial o podés elegir apagarlas para optimizar la batería y disfrutar por más horas.`,
            },
        ],
        shortDesc: `Ultra portátil`,
        longDesc:
            "Un sonido potente y claro en tus momentos más activos. Lleva contigo este parlante ultra portátil y sumérgete en una experiencia musical sin límites, donde la resistencia al agua se une a la comodidad extrema.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,

        featuredFeatures: [
            {
                // Potencia
                id: 2,
            },
            {
                // Bluetooth
                id: 12,
            },
            {
                // Efectos de Luz
                id: 6,
            },
            {
                //Bateria recargable
                id: 7,
                value: `3.7V / 1200 mAh`,
            },
            {
                //Transportable
                id: 96,
            },
            {
                //Auxiliar
                id: 17,
            },
            {
                // TWS
                id: 11,
            },
            {
                //Resistente al agua IPX5
                id: 97,
            }
        ],
        features: [


            {
                // Batería
                id: 10,
                value: "3.7V / 1200 mAh",
            },
            {
                // Luces
                id: 12,
                value: "RGB con efectos",
            },
            {
                // Conectividad
                id: 9,
                value: "Bluetooth 5.0",
            },
            {
                // Funciones
                id: 13,
                value: "TWS",
            },
            {
                // Entradas
                id: 8,
                value: "Auxiliar, De carga",
            },
            {
                // Medidas del producto
                id: 16,
                value: "Diametro 80 * 86 mm",
            },
            {
                // Medidas de la caja
                id: 17,
                value: "83 * 113 * 83 mm",
            },
            {
                // Peso
                id: 18,
                value: "230 gr",
            },
            {
                //Altavoz
                id: 57,
                value: "6W * 1",
            },
            {
                //Impermeabilidad
                id: 58,
                value: 'Nivel IPX7',
            },
            {
                id: 52,
                value: '6 - 12 horas'
            },
            {
                id: 38,
                value: '2 - 2.5 horas'
            }
        ],
        includes: [
            3, // Cable aux
            6, // Cable usb c
            9, // Manual de usuario
        ],
        downloads: `https://drive.google.com/drive/folders/1nDTmSTFPSCzI8qv2trklcp7rYcO3_Eah`,
        variants: [],
        videos: []
    },

    { // AW-PP205
        name: `Parlante inalambrico UltraPortatil`,
        sku: `AW-PP205`,
        link: `/productos/AW-PP205`,
        line: `waterproof`,
        categories: [101],
        imgs: [
            `/products/AW-PP205/img/AW-PP205_1.png`,
            `/products/AW-PP205/img/AW-PP205_2.png`,
            `/products/AW-PP205/img/AW-PP205_3.png`,
            `/products/AW-PP205/img/AW-PP205_4.png`,
            `/products/AW-PP205/img/AW-PP205_5.png`,
        ].map((e) => fileserver + e),
        top: true,
        360: false,
        gen: "1º Generación",
        banners: [
            {
                title: `Resistente al agua`,
                img: fileserver + `/banners/AW-PP205/Banner_AW-PP205_01.png`,
                desc: "Ahora es posible disfrutar de la música en todo terreno! El parlante AIWA es resistente al agua, conforme con la norma IPX7, acompañándote en cualquier aventura.",
            },
            {
                title: `True Wireless Stereo`,
                img: fileserver + `/banners/AW-PP205/Banner_AW-PP205_02.png`,
                desc: "Con esta herramienta vas a poder conectar dos parlantes iguales a través del bluetooth para transmitir de manera separada el canal izquierdo y el derecho para así conseguir un sonido stereo.",
            },
            {
                title: "¡Llevalo a todos lados!",
                img: fileserver + "/banners/AW-PP205/Banner_AW-PP205_03.png",
                desc: "Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.",
            },
            {
                title: "Efectos de Luz",
                img: fileserver + `/banners/AW-PP205/Banner_AW-PP205_04.png`,
                desc: `Deslumbrantes luces que se dedican a brillar a los costados del parlante. Pueden encandilar un momento especial o podés elegir apagarlas para optimizar la batería y disfrutar por más horas.`,
            },
        ],
        shortDesc: `Sumérgete a la potencia`,
        longDesc:
            "Empapate en la música sin preocupaciones. La combinación de su resistencia al agua (IPX7) y su ultra portabilidad lo convierten en un dispositivo versátil, listo para enfrentar cualquier desafío.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,

        featuredFeatures: [
            {
                // Potencia
                id: 2,
            },
            {
                // Bluetooth
                id: 12,
            },
            {
                // Efectos de Luz
                id: 6,
            },
            {
                //Bateria recargable
                id: 7,
                value: `3.7V / 1800 mAh`,
            },
            {
                //Transportable
                id: 96,
            },
            {
                //Auxiliar
                id: 17,
            },
            {
                // TWS
                id: 11,
            },
            {
                //Resistente al agua IPX5
                id: 97,
            }
        ],
        features: [


            {
                // Batería
                id: 10,
                value: "3.7V / 1800 mAh",
            },
            {
                // Luces
                id: 12,
                value: "RGB con efectos",
            },
            {
                // Conectividad
                id: 9,
                value: "Bluetooth 5.0",
            },
            {
                // Funciones
                id: 13,
                value: "TWS",
            },
            {
                // Entradas
                id: 8,
                value: "Auxiliar, De carga",
            },
            {
                // Medidas del producto
                id: 16,
                value: "Diametro 84 * 106 mm",
            },
            {
                // Medidas de la caja
                id: 17,
                value: "85 * 128 * 85 mm",
            },
            {
                // Peso
                id: 18,
                value: "320 gr",
            },
            {
                //Altavoz
                id: 57,
                value: "5W * 2",
            },
            {
                //Impermeabilidad
                id: 58,
                value: 'Nivel IPX7',
            },
            {
                id: 52,
                value: '5 - 7 horas'
            },
            {
                id: 38,
                value: '2.5 - 3 horas'
            }
        ],
        includes: [
            3, // Cable aux
            6, // Cable usb c
            9, // Manual de usuario
        ],
        downloads: `https://drive.google.com/drive/folders/14E0_ONNbh55i_oaX_PWNzywT2kEzkS16`,
        variants: [],
        videos: []
    },
]



