import axios from 'axios';
import React, { useState } from 'react';
import Link from 'next/link';

const CreateProducts = () => {
    const [product, setProduct] = useState({
        sku: '',
        name: '',
        longDesc: '',
        shortDesc: ''
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar los datos del nuevo producto al servidor
            const response = await axios.post('http://localhost:8000/audio', product);
            console.log('Producto creado:', response.data);
            // Limpiar el formulario después de la creación exitosa
            setProduct({
                sku: '',
                name: '',
                longDesc: '',
                shortDesc: ''
            });
        } catch (error) {
            console.error('Error al crear el producto:', error);
        }
    };

    return (
        <div className="container">
            <h1>Añadir Nuevo Producto</h1>
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
                <button type="submit" className="btn btn-primary">Crear Producto</button>
            </form>
        </div>
    );
};

export default CreateProducts;
