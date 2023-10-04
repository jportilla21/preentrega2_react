import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import producto1Image from '../energia.jpg';
import producto2Image from '../leche.jpg';
import producto3Image from '../proteina.jpg';
import producto4Image from '../cerdos.jpg';

const productos = [
  { id: 850221, nombre: 'Ganador Energía', precio: 32000, descripcion: 'Línea diseñada para los animales que necesiten energía en su alimentación.', imagen: producto1Image },
  { id: 900315, nombre: 'Ganador Leche', precio: 34000, descripcion: 'Línea para todas las haciendas lecheras que desean mejorar calidad y producción en la leche.', imagen: producto2Image },
  { id: 601122, nombre: 'Ganador Proteína', precio: 36000, descripcion: 'Línea enfocada al ganado de cría, levante y/o engorde.', imagen: producto3Image },
  { id: 630703, nombre: 'Ganador Porcinos', precio: 39000, descripcion: 'Línea para ganado procino en etapa de levante y engorde.', imagen: producto4Image },
];

function ProductDetail() {
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === Number(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="titulo">Detalles del Producto</h2>
          <img src={producto.imagen} alt={producto.nombre} className="product-image" />
          <p>ID: {producto.id}</p>
          <p>Nombre: {producto.nombre}</p>
          <p>Precio: ${producto.precio.toFixed(2)}</p>
          <p>Descripción: {producto.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;