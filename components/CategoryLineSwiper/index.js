// Importa las bibliotecas y componentes necesarios
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import lines from '../../content/lineas'
import Link from 'next/link';

// Define el componente CategoryLineSwiper y recibe la lista de productos como prop
export default function CategoryLineSwiper({ products }) {

  // Encuentra la línea de productos basada en el nombre de la primera línea en los productos
  const line = lines.find(e => e.name == products[0].line)

  // Filtra los productos para excluir aquellos que tienen la categoría 110
  products = products.filter(e => !e.categories.some(f => f == 110))

  // Renderiza un carrusel de productos utilizando la biblioteca Swiper
  return (
    <Swiper
      tag='section'
      className='line-swiper'
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 6000 }}
      loop
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        if (window.innerWidth < 850) {
          console.log(swiper)
          swiper.params.slidesPerView = 1
          swiper.params.centeredSlides = true
        }
      }}
    >
      {/* Mapea la lista de productos y crea un SwiperSlide para cada uno */}
      {products.map((e, i) => (
        <SwiperSlide className='main-banner-slide' key={i}>
          <div className="product">
            <div className="left">
              <div className="line-logo-wrapper">
                <Image src={line.logo} alt={line.name} fill />
              </div>
              <p className="sku">{e.sku}</p>
              <p className="title">{e.shortDesc}</p>
              <p className="desc">{e.longDesc}</p>
              <Link href={e.link ? e.link : '#'}>
                Ver más
              </Link>
            </div>
            <div className="right">
              <Image hor={e.sku == 'AW-T2022' ? 'true' : 'false'} src={e.imgs[0]} alt={e.sku} fill />
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Agrega una imagen de fondo para la línea de productos */}
      <Image className='line-background' src={line.background} loading='' alt='line background' fill />
    </Swiper>
  )
}
