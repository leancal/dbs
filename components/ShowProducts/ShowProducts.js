import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const URI = 'http://localhost:8000/audio';

const CompShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAudio();
    }, []);

    // Procedimiento para mostrar todos los productos
    const getAudio = async () => {
        try {
            const res = await axios.get(URI);
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching audio:", error);
        }
    }

    // Procedimiento para eliminar un producto
    const deleteAudio = async (id) => {
        // Mostrar confirmación antes de eliminar
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
        if (confirmDelete) {
            try {
                await axios.delete(`${URI}/${id}`);
                getAudio();
            } catch (error) {
                console.error("Error deleting audio:", error);
            }
        }
    }

    const goToEditPage = (id) => {
        window.location.href = `/editProduct/${id}`;
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <button className="btn btn-danger"><Link href="/newProduct" className="btn btn-primary">Añadir producto</Link> </button>
                </div>
            </div>
            <div className="row">
                {
                    products.map(product => (
                        <div className="col-md-4 p-2" key={product.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{product.sku}</h5>
                                    <button className="btn btn-secondary" onClick={() => goToEditPage(product.id)}>Editar</button>
                                </div>
                                <div className="card-body">
                                    <h5>{product.name}</h5>
                                    <p>{product.longDesc}</p>
                                    <p>{product.shortDesc}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => deleteAudio(product.id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default CompShowProducts;
