import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const EditProducts = ({ productId }) => {
    const [product, setProduct] = useState({
        sku: '',
        name: '',
        longDesc: '',
        shortDesc: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:8000/audio/${productId}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/audio/${productId}`, product); // Utiliza productId en lugar de match.params.id
    };

    return (
        <div className="container">
            <h1>Editar Producto</h1>
            <div className="col">
                <button className="btn btn-danger"><Link href="/adminPanel" className="btn btn-primary">Volver</Link> </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU:</label>
                    <input type="text" className="form-control" id="sku" name="sku" value={product.sku} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="longDesc" className="form-label">Descripción Larga:</label>
                    <textarea className="form-control" id="longDesc" name="longDesc" value={product.longDesc} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="shortDesc" className="form-label">Descripción Corta:</label>
                    <textarea className="form-control" id="shortDesc" name="shortDesc" value={product.shortDesc} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditProducts;
