import '../styles/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Favicon from '../components/Favicon';
import HeadThings from '../components/Head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Obtén el enlace solicitado
    const link = router.query.link;

    // Verifica si el enlace coincide con el enlace deseado
    if (link === '/audio/party/AW-T2022.html') {
      // Redirige al nuevo enlace destino del lado del cliente
      router.push('/productos/AW-T2022/');
    }
  }, [router.query.link]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#222'
      }
    }
  }); 
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <HeadThings/>
        <Favicon/>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
