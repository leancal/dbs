import ImageIcon from '@mui/icons-material/Image'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from 'react'
import Image from 'next/image'
//import ThreeSixty from '../ThreeSixty'
import ProductMorePhotos from '../ProductMorePhotos'
import ProductVideos from '../ProductVideos';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import VideocamIcon from '@mui/icons-material/Videocam';
import ProductBanners from '../ProductBanners';
import ProductFeatures from '../ProductFeatures';
import ProductSpecsTable from '../ProductSpecsTable'
import YoutubeBanner from '../YoutubeBanner';
import lineas from '../../content/lineas'

export default function ProductContent({ prod }) {
  const [mode, setMode] = useState(0) // 0 = reg | 1 = 360º | 2 = view more photos
  const [screenWidth, setScreenWidth] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const isCookProduct = prod.categories.includes(112) || prod.categories.includes(113) || prod.categories.includes(114) || prod.categories.includes(115)
  const prodLine = lineas.find(e => e.name == prod.line)

  useEffect(() => {
    // Función para agregar encabezados Expires al DOM
    const addExpiresHeader = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Cache-Control';
      meta.content = 'public, max-age=604800, must-revalidate';
      document.head.appendChild(meta);

      const meta2 = document.createElement('meta');
      meta2.httpEquiv = 'Expires';
      meta2.content = '604800';
      document.head.appendChild(meta2);
    };

    // Llamada a la función cuando el componente se monta
    addExpiresHeader();

    // Limpieza al desmontar el componente
    return () => {
      document.querySelector('meta[http-equiv="Cache-Control"]').remove();
      document.querySelector('meta[http-equiv="Expires"]').remove();
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  useEffect(() => {
    if (window) setScreenWidth(window.screen.width)
  }, [])
  return (
    <>
      <section className='top-wrapper' fullscreen={fullscreen ? "true" : "false"}>
        <div className={`always-on-top ${mode == 3 && 'video-open'}`}>
          {(mode == 0 || mode == 2) && prod[360] && (
            <>
              <button className='video pc-only' onClick={() => setMode(1)}>
                <img src='/360-logo.svg' className='three-sixty' alt='360-logo' />
                <video width="145" height="145" muted autoPlay loop>
                  <source src={`/productos/${prod.sku}/360.mp4`} type="video/mp4" />
                </video>
              </button>
              <button className='to-right mobile-only' onClick={() => setMode(1)}><ThreeDRotationIcon /></button>
            </>
          )}
          {(mode == 1 || mode == 2 || mode == 3) && (
            <button className='to-right' onClick={() => {
              setMode(0)
              setFullscreen(false)
            }}><ArrowBackIcon />
              <span className='pc-only'>VOLVER</span>
            </button>
          )}
          {mode != 2 && (
            <button className='to-right' onClick={() => setMode(2)}><ImageIcon />
              <span className='pc-only'>FOTOS</span>
            </button>
          )}
          {mode != 3 && prod.videos && prod.videos.length > 0 && (
            <button className='to-right' onClick={() => setMode(3)}><VideocamIcon />
              <span className='pc-only'>VIDEOS</span>
            </button>
          )}
          <a href='#product-features-anchor'>
            <button className='to-right'><FormatListBulletedIcon />
              <span className='pc-only'>DETALLES</span>
            </button>
          </a>
          {prod.buyLink && (
            <a href={prod.buyLink} target='_blank' rel="noreferrer">
              <button className='to-right'><ShoppingCartIcon />
                <span className='pc-only'>COMPRAR</span>
              </button>
            </a>
          )}
        </div>
        {mode == 0 && (
          <div className={`default${isCookProduct ? " bg-yellow" : prod.altBackground ? " bg-alt" : ""}`} linea={prod.line}>
            <div className='text-wrapper'>
              <div className='text'>
                {prod.line && (
                  <div className='line-logo'>
                    {prodLine && <Image src={prodLine.logo} alt={prodLine.displayName} layout='fill' objectFit='contain' objectPosition={screenWidth < 850 ? 'center' : 'left'} />}
                  </div>
                )}
                <p className='sku'>{prod.sku}</p>
                <h1>{prod.shortDesc}</h1>
                <p className='description'>{prod.longDesc}</p>
              </div>
            </div>
            <div className='cover-wrapper'>
              <Image className='cover' src={`/productos/${prod.sku}/cover.webp`} fill alt='product-cover' priority />
            </div>
          </div>
        )}
        {/* {mode == 1 && (
          <ThreeSixty sku={prod.sku} shortDesc={prod.shortDesc} top={prod.top} fs={fullscreen} setFs={setFullscreen} />
        )} */}
        {mode == 2 && <ProductMorePhotos sku={prod.sku} shortDesc={prod.shortDesc} arr={prod.imgs} fs={fullscreen} setFs={setFullscreen} />}
        {mode == 3 && <ProductVideos videos={prod.videos} />}
      </section>

      {isCookProduct ? (
        <ProductBanners banners={prod.banners} line={prod.line} backgroundGradient="linear-gradient(180deg, rgba(236, 240, 239, 1) 0%, rgba(204, 218, 217, 1) 100%)" />
      ) : (
        <ProductBanners banners={prod.banners} line={prod.line} />
      )}
      <ProductFeatures prod={prod} />
      <ProductSpecsTable prod={prod} />
      <YoutubeBanner />
    </>
  )
}
