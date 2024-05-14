import EditProducts from '../../components/EditProducts/EditProducts'
import Head from 'next/head'
import { useRouter } from 'next/router'; // Importa el enrutador de Next.js

const EditProductPage = () => {
    const router = useRouter(); // Inicializa el enrutador

    const { id } = router.query; // Obtén el ID del producto de la URL

    return (
        <>
            <Head>
                <title>Editar producto</title>
            </Head>
            {id && <EditProducts productId={id} />} {/* Pasa el ID del producto como una prop */}
        </>
    )
}

export default EditProductPage;
