import React from 'react';
import Head from 'next/head';
import CreateProducts from '../../components/CreateProducts/CreateProducts';

export default function newProduct() {
    return (
        <>
            <Head>
                <title>Agregar Nuevo Producto</title>
            </Head>
            <CreateProducts />
        </>
    );
}
