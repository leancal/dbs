import CompShowProducts from '../../components/ShowProducts/ShowProducts'
import Head from 'next/head'
import { useRouter } from 'next/router'; // Importa el enrutador de Next.js

export default function adminPanel() {


    return (
        <>
            <Head>
                <title>Panel de Administración</title>
            </Head>
            <CompShowProducts />
        </>
    )
}


// export async function getStaticProps(context) {
//     const product = products.find(e => e.sku === context.params.prod)
//     return {
//         props: { product }, // will be passed to the page component as props
//     }
// }
// //
// export async function getStaticPaths() {
//     const paths = products.map(p => ({ params: { prod: p.sku } }))
//     return {
//         paths,
//         fallback: false, // can also be true or 'blocking'
//     }
// }

